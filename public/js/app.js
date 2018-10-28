const app = angular.module('SpecuLook', []);

app.controller('MainController', ['$http', function($http){

  //Define controller
  const controller = this;
  const userImage = this.image;
  this.me = 'awesome';
  //Create Function
  this.createUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        name: this.name,
        username: this.username,
        password: this.password,
        image: this.image,
        admin: this.admin
      }
    }).then(response=>{
      console.log(response.data)
    });
  };

  //Get Function
  this.getUsers = function(){
    $http({
      method: 'GET',
      url: '/users',
    }).then(response=>{
      controller.users = response.data
      console.log(controller.users)
    });
  };

  //Update Function
  this.editUser = function(user){
    $http({
      method: 'PUT',
      url: '/users/' + user._id,
      data: {
        username: this.updateUsername,
        password: this.updatedPassword,
        admin: this.updatedAdmin
      }
    }).then(function(response){
      controller.getUsers();
    });
  };

  //Delete Function
  this.deleteUser = function(user){
    $http({
      method: 'DELETE',
      url: '/users/' + user._id
    }).then(response=>{
      controller.getUsers();
    })
  }


// =============62-120===Emily===================================
  // log in
  this.logIn = () => {
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }

  this.loggedIn = () => {
    $http({
      method: 'GET',
      url: '/speculook',
    }).then((response) => {
      console.log(response.data);
      controller.currentUser = response.data;
    }, (error) => {
      console.log(error);
    })
  }

  this.logout = () => {
    $http({
      method: 'DELETE',
      url: '/sessions'
    }).then((response) => {
      console.log(response.data)
    }, (error) => {
      console.log(error);
    })
  }
















// ================121-155 Laura==================================

this.toggleShowLogin = function() {
  controller.showLogin = !controller.showLogin;
  controller.showRegister = false;
  console.log(controller.showLogin);
}

this.toggleShowRegister = function() {
  controller.showRegister = !controller.showRegister;
  controller.showLogin = false;
  console.log(controller.showRegister);
}

this.consoleLog = function(logThis){
  console.log(logThis);
}

this.editProfile = function(user){
  $http({
    method: 'PUT',
    url: '/users/' + user._id,
    data: {
      name: this.updatedName,
      username: this.updatedUsername,
      password: this.updatedPassword,
      image: this.updatedImage,
      location: this.updatedLocation,
      email: this.updatedEmail,
      linkedIn: this.updatedLinkedIn,
      github: this.updatedGithub,
      facebook: this.updatedFacebook,
      interests: this.updatedInterests,
      iCanHelp: {
        CSS: this.updatedCss,
        HTML: this.updatedHtml,
        JavaScript: this.updatedJs,
        jQuery: this.updatedJq,
        Angular: this.updatedAng,
        CLI: this.updatedCli,
        React: this.updatedReact,
        Ruby: this.updatedRuby
      }
    }
  }).then(function(response){
    controller.getUsers();
  })
}
this.showEditUserForm = (user, index) => {
  console.log(index);
  this.editData = user;
  this.editIndex = index;
}
this.editUser = (id) => {
  $http({
    method: 'PUT',
    url: '/users/'+ id,
    data: this.editData
  }).then((res)=> {
    this.getUsers();
    // hide edit form
    this.editIndex = null;
  }, (err)=> {
    console.log(err);
  })
}
























// ====================156-210 Alyssa===============================

  const messages = [];

  this.getMessage = function(){
    $http({
      method: 'GET',
      url: '/messages',
      data: {
        message: this.message,
        signature: this.signature
      }
    }).then(response=>{
      controller.messages = response.data
      console.log(response.data);
    });
  };

  this.postMessage = function(){
    $http({
      method: 'POST',
      url: '/messages',
      data: {
        message: this.message,
        userWhoPosted: this.username,
        userImage: this.image,
      }
    }).then(response=>{
      controller.image = this.image
      console.log(controller.image);
      controller.getMessage();
    });
  };


  this.deleteMessage = function(message){
    $http({
      method: 'DELETE',
      url: '/messages/' + message._id
    }).then(response=>{
      controller.getMessage();
    });
  };

  this.editMessage = function(message){
    $http({
      method: 'PUT',
      url: '/messages/' + message._id,
      data: {
        message: this.message,
        signature: this.signature
      }
    }).then(function(response){
      controller.getMessage();
    });
  };

  this.showHideProfile = function(){
    controller.userProfile = !controller.userProfile
  };

// ===================================================

  this.getUsers();
  this.getMessage();
}]);
