# ![Image of Speculook logo](public/images/specubanner.png?raw=true)
<p align="center">
  by Emily Reno, Laura Levenhagen & Alyssa Kieffer
</p>


## About Speculook
<p>
  Speculook was made for the WDIR Speculoos class of General Assembly. It’s like Facebook, but with cooler people. This is where we’ll keep in touch and share everything we’ve done and learned in this web development journey of ours. So, come on in! Everyone could use a little bit of speculoos.
</p>


## Wireframes
![Image of wireframe](public/images/drawnwireframe.jpg?raw=true)
![Image of wireframe](public/images/speculook.jpg?raw=true)
![Image of wireframe](public/images/speculookloginregister.png?raw=true)
![Image of wireframe](public/images/speculookmemberprofile.png?raw=true)


## Technologies
- Mongoose  
- Express
- Bcrypt
- Angular
- HTML
- CSS
- Javascript

## Approach Taken
### Emily
<p>
</p>

### Laura
<p>
</p>

### Alyssa
##### Community Members
<p>
In order to create the Community Members display, an ng-repeat was used to run through the Users array and display each user's image and name. The image was established with an ng-click function so that it could be clicked and sent to that specific user's profile.
</p>


##### Message Board
<p>
By creating the Message Board feature, we were able to accomplish a stretch goal of getting two Models talking, along with utilizing the Delete portion of CRUD. I first created a Message Schema and Controller. The Schema pulls the username from the User Model and posts it, along with the written message. I used the same idea from the Community Members display, and utilized the ng-repeat function to iterate through the messages array and display each message and username of who posted. In order to get the delete button to appear for only the current user, an ng-if statement was used. 
</p>


## Issues
### Emily
<p>
</p>

### Laura
<p>
</p>

### Alyssa
##### Community Members
<p>
One main goal that was not achieved was removing the Current User from the Community Members display. By putting an ng-if statement into the individual items being displayed (name and image) I was able to remove the Current User...but only until the users database was dropped. After going to TA Hours about the issue, we realized that this type of thing was difficult to achieve in Angular, and should be filtered in the Javascript functions. When doing that, the ability to click on your own profile and edit details was eliminated. In order to incorporate this function, we would have to change the entire way our code is utilizing the edit function.
</p>

##### Message Board
<p>
In an attempt to have an image or initials posted alongside the username, we realized that the only things being pulled from the Schema were the username and password. We were not able to pull additional data, therefore we set this up with a default picture for styling purposes as a work around.
</p>


## Link
Join Speculook [here](https://github.com/emfoxily/speculook)
