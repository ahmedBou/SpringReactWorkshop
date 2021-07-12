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

}

export default new AuthenticationService;