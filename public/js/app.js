const app = angular.module('SpecuLook', []);

app.controller('MainController', ['$http', function($http){
  //Create Function
  this.createUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password,
        admin: this.admin
      }
    }).then(response=>{
      console.log(response.data)
    });
  };

}])
