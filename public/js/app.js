const app = angular.module('SpecuLook', []);

app.controller('MainController', ['$http', function($http){

  //Define controller
  const controller = this;
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











































// ================121-155 Laura==================================


































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
    }).then(function(response){
      controller.messages = response.data
      console.log(controller.messages);
    });
  };

  this.postMessage = function(){
    $http({
      method: 'POST',
      url: '/messages',
      data: {
        message: this.message,
        signature: this.signature
      }
    }).then(function(response){
      console.log(response.data);
    }, function(){
      console.log('An error has occured');
    });
  };

  this.deleteMessage = function(){
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

// ===================================================

  this.getUsers();
}]);
