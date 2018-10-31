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
##### Login/Authorization Flow
<p>
  The first thing I tackled in the login/authorization process was the user schema. I started out with the basics (username, password, etc) because we weren't sure of what all would be needed in the end, so it was a good foundation. I did have to refer to class notes as I did this, but I learned a lot more about it than I anticipated and I'm grateful. In the user schema, there is also an admin key and I made it so that not just anyone could be an admin. I accomplished this by creating a user seed for Laura, Alyssa, and myself. At this moment in time, there isn't much difference from admins and regular users, but as a group, we plan on adding more to this app in the future because we've grown equally passionate about it. We plan to create options so that admins can upgrade regular users to admins and vice versa.
</p>


##### Navigation & Modal Functionality
<p>
  The navigation was probably one of the easier things to be done in the app. I incorporated a welcome message that checks for a current user and displays their name upon login. It also displays the user's image.

  For the modals, I had done some research prior to creating modals, but was overwhelmed by all the code and examples I found that I ended up finding it easier to utilize ng-show on divs. It's also how I achieved the login screen. Upon login, the div disappears. We then ended up recycling the function I wrote for the login modal on other parts of the app. It proved to be rather efficient.
</p>

### Laura
##### Profile / Profile Edit
<p>
  My first task was to structure the html for the individual profiles as well as create the necessary functions in app.js for editing your own profile. I referenced the wireframe Emily had created and that we had all agreed on, which was very helpful. I also edited the user model to include more information for the profile.

  I had a fun time researching how to edit overflow options with the scrollbar to keep the profile looking nice even when the sections grew with more information.

  I also made the 'edit profile' button only visible to the current user, on their own profile so that no one can edit anyone else's information.
</p>

##### Mailbox
<p>
  The Mailbox was definitely a struggle for me, since each person's profile had to access only that person's mail. I added a mailbox key to the user model(an array of objects with each object providing a mail key and a sender key) and used angularJS to access the user's mail with an ng-repeat (mail in user.mailbox). I think this was the task that taught me the most about accessing objects within arrays within objects, as well as the process of creating additional 'PUT' routes for the same model (ie: '/users/:id/messages').
</p>

##### consoleLog Function
<p>
One thing I was proud of in this project was my idea to make a consoleLog() function in the app.js that could be called in the index.html whenever we wanted to make sure we were calling the correct key/value. This ended up being useful throughout the project, and it is a technique I know I will use again.
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
##### Login/Authorization Flow
<p>
  The main issue I ran into was keeping a session logged in. I researched ways to keep a session logged in even on refresh and all I could find was related to installing something for Angular. I wasn't entirely comfortable with trying it in fear of breaking something, so for now, users have to login again if they refresh. It shouldn't be too much of an issue since everything in the website is on one page.
</p>

### Laura

##### Mailbox
<p>
Alyssa and Emily know, I went pretty crazy trying to figure out that mailbox! I spend several nights trying all different sorts of ways to make it work, but I always seemed to have issues. I knew that with each of my ideas, I was so close to figuring it out, but I couldn't figure out which idea would get me to my goal. I ended up having to reach out during TA hours, and Dan helped me focus on the correct theory and make it work. I learned so much in the process though, so I don't regret any of it.
</p>

### Alyssa
##### Community Members
<p>
One main goal that was not achieved was removing the Current User from the Community Members display. By putting an ng-if statement into the individual items being displayed (name and image) I was able to remove the Current User...but only until the users database was dropped. After going to TA Hours about the issue, we realized that this type of thing was difficult to achieve in Angular, and should be filtered in the Javascript functions. When doing that, the ability to click on your own profile and edit details was eliminated. In order to incorporate this function, we would have to change the entire way our code is utilizing the edit function.
</p>

##### Message Board
<p>
The biggest issue that arose with the Message Board was surprisingly the image being displayed of the user who posted. I tried many work arounds and for some reason the image was inaccessible, only the username and password were being shown when console logging any user information. After working with Dan, I realized that I first needed to access the Current User before accessing the image for posting. It was the best feeling of success and accomplishment!
</p>


## Link
Join Speculook [here](https://github.com/emfoxily/speculook)
