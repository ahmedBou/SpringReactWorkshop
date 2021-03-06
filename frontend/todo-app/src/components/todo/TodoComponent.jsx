import React, {Component} from "react";
import moment  from 'moment';
import {ErrorMessage, Field, Form, Formik} from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";



class TodoComponent extends Component{

    constructor(props) {
        super(props);
        this.state= {
            id: this.props.match.params.id,
            description: " ",
            targetDate: moment(new Date).format('YYYY-MM-DD'),
        }

        //this.handleChange = this.handleChange.bind(this)
        this.fillForm = this.fillForm.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState(
                {
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }
            ))
    }

    /*
    handleChange(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }*/

    fillForm(values){
        console.log(values)
    }

    validate(values){
        let errors = {}
        console.log(values.description)
        if(!values.description){
            errors.description = 'Enter a Description'
        }
        else if(values.description.length <5){
            errors.description = 'Enter at least 5 Character in Description'
        }
        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid target'
        }
        return errors

    }

    render(){
        let {description, targetDate} = this.state
        //let targetDate =  this.state.targetDate
        return(
            <div className="container">
                <Formik
                    initialValues={{description, targetDate}}
                    onSubmit={this.fillForm}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props)=>(
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>

                                <fieldset className="form-group">
                                    <label>description</label>
                                    <Field className="form-control" type="text" name="description"
                                           /* value={this.state.description} onChange={this.handleChange}*//>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"
                                            /*value={this.state.targetDate} onChange={this.handleChange}*//>
                                </fieldset>
                                <button className="btn btn-success" type="submit" >Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}
export default TodoComponent;