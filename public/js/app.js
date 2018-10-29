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
        initials: this.initials,
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
      // console.log(controller.users)
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
      url: '/speculook',
      data: {
        username: this.username,
        password: this.password,
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
//
// this.editProfile = function(id){
//   $http({
//     method: 'PUT',
//     url: '/users/' + id,
//     data: {
//       name: this.updatedName,
//       username: this.updatedUsername,
//       password: this.updatedPassword,
//       initials: this.updatedInitials,
//       image: this.updatedImage,
//       location: this.updatedLocation,
//       email: this.updatedEmail,
//       linkedIn: this.updatedLinkedIn,
//       github: this.updatedGithub,
//       facebook: this.updatedFacebook,
//       interests: this.updatedInterests,
//       iCanHelp: {
//         CSS: this.updatedCss,
//         HTML: this.updatedHtml,
//         JavaScript: this.updatedJs,
//         jQuery: this.updatedJq,
//         Angular: this.updatedAng,
//         CLI: this.updatedCli,
//         React: this.updatedReact,
//         Ruby: this.updatedRuby
//       }
//     }
//   }).then(function(response){
//     controller.getUsers();
//   })
// }
this.showEditUserForm = (user, index) => {
  console.log(index);
  this.editData = user;
  this.editIndex = index;
}



this.messageObject= {mail: ' ', sender: ' '};
this.mailboxIds = [{id: ' ', mailboxMail: [ ]}];

this.pushMessage = (message, userId) => {
  console.log(controller.users.length);
  let numOfUsers = controller.users.length;
  this.mailboxIds = [{id: ' ', mailboxMail: [' ' ]}];
  for (i=0; i<numOfUsers; i++) {
    console.log(i);
    this.mailboxIds[i] =
      { id: controller.users[i]._id,
        mailboxMail: []
      }
    ;
    // console.log(userId, this.mailboxIds[i].id);
    if (userId === this.mailboxIds[i].id) {
      console.log( this.mailboxIds[i].id + 'is the id of the mailbox for id ' + userId);
      this.mailboxIds[i].mailboxMail.unshift(  {
          mail: message,
          sender: 'need to add'
        });
      this.mailToSend = this.mailboxIds[i].mailboxMail;
      console.log(this.mailToSend);
      controller.editUser(userId, this.mailToSend);
    }
  }
}


this.editUser = (id, mailboxMail) => {
  $http({
    method: 'PUT',
    url: '/users/'+ id,
    data: {
      mailbox: mailboxMail,
      name: this.editData.name,
      username: this.editData.username,
      password: this.editData.password,
      initials: this.editData.initials,
      image: this.editData.image,
      location: this.editData.location,
      email: this.editData.email,
      linkedIn: this.editData.linkedIn,
      github: this.editData.github,
      facebook: this.editData.facebook,
      interests: this.editData.interests,
      iCanHelp: this.editData.iCanHelp
    }
  })
  .then((res)=> {
    // console.log(mailboxMail);
    // console.log(this.mail);
    this.getUsers();
    // hide edit form
    this.editIndex = null;
  }, (err)=> {
    console.log(err);
  })
}





















// ====================156-210 Alyssa===============================

  this.getMessage = function(){
    $http({
      method: 'GET',
      url: '/messages',
      data: {
        message: this.message
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
        initials: this.initials,
        userImage: this.image
      }
    }).then(response=>{
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
        message: this.message
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
