class AuthenticationService{

  registerSuccessfulLogin(username) {
        console.log("register Successful Login")
        sessionStorage.setItem('authenticatedUser', username);
  }
  logout(){
      sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn(){
      let user = sessionStorage.getItem('authenticatedUser')
      return user !== null;
  }
  getLoggedInUser(){
    let username = sessionStorage.getItem('authenticatedUser')
      if(username == null){
          return ' '
      }else{
          return username
      }
  }

}

export default new AuthenticationService;