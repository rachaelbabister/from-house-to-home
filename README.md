# **FROM HOUSE TO HOME - FRONTEND**

From House to Home is a social plafform designed for visitors to share their inspirational photos with anything to do with the home. The web application has been built with technologies such as React, Bootstrap, and Django to build the Backend. The repository for the Backend can be found below, which has its own README document. I was inspired to create From House to Home due to my own upcoming house move and felt that any property can be a house, but it takes putting your own stamp on it to become a home.

![From House to Home](docs/images/responsive.webp)

**LIVE SITE**

[You can view the live web application here.](https://from-house-to-home-b7afcfcc32e9.herokuapp.com/)

**GITHUB PAGES**

[Frontend GitHub Repository](https://github.com/rachaelbabister/from-house-to-home)<br>
[API GitHub Repository](https://github.com/rachaelbabister/from-house-to-home-api)

---

# **CONTENTS**

<!-- TOC -->

- [**FROM HOUSE TO HOME - FRONTEND**](#from-house-to-home---frontend)
- [**CONTENTS**](#contents)
- [User Experience UX](#user-experience-ux)
- [Client Goals](#client-goals)
    - [First Time Visitor Goals](#first-time-visitor-goals)
    - [Returning Visitor Goals](#returning-visitor-goals)
    - [Frequent Visitor Goals](#frequent-visitor-goals)
    - [Agile Methodology](#agile-methodology)
        - [User Stories](#user-stories)
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Wireframes](#wireframes)
        - [Home Page - not logged in](#home-page---not-logged-in)
        - [Home Page - logged in](#home-page---logged-in)
        - [Sign up](#sign-up)
        - [Sign in](#sign-in)
        - [Create Post](#create-post)
        - [Profile page](#profile-page)
        - [Update Profile](#update-profile)
- [Backend Planing](#backend-planing)
    - [Data Models & Relationsips](#data-models--relationsips)
- [Features](#features)
    - [General features](#general-features)
    - [Landing Page](#landing-page)
    - [Sign Up & Sign In](#sign-up--sign-in)
    - [Home Page after Sign In](#home-page-after-sign-in)
    - [Create a Post](#create-a-post)
    - [Edit a Post](#edit-a-post)
    - [Profile Page](#profile-page)
    - [Edit Profile Page](#edit-profile-page)
    - [Comments](#comments)
    - [Deleting a Post or Comment](#deleting-a-post-or-comment)
    - [Likes](#likes)
    - [Follows](#follows)
    - [Search Bar & Category Filter](#search-bar--category-filter)
    - [Empty Results](#empty-results)
    - [Page Not Found](#page-not-found)
    - [Reusable](#reusable)
- [Future Implementations](#future-implementations)
- [**Technologies & Frameworks**](#technologies--frameworks)
    - [Main Technologies](#main-technologies)
    - [Frameworks & Libraries](#frameworks--libraries)
- [**Testing**](#testing)
- [**Deployment**](#deployment)
    - [**Environment & Settings**](#environment--settings)
    - [**Deploying to Heroku**](#deploying-to-heroku)
    - [**Connecting the Frontend to the API**](#connecting-the-frontend-to-the-api)
        - [**Add Client Origin URLs**](#add-client-origin-urls)
        - [**Frontend Setup in Gitpod**](#frontend-setup-in-gitpod)
        - [**Configure Axios**](#configure-axios)
        - [**Use Axios in Your App**](#use-axios-in-your-app)
    - [**Handle Changes**](#handle-changes)
        - [**Redeploy After Changes**](#redeploy-after-changes)
        - [**Static Files**](#static-files)
    - [**Local Development**](#local-development)
        - [**How to Fork**](#how-to-fork)
        - [**How to Clone**](#how-to-clone)
- [**Credits**](#credits)
    - [**Help Resources**](#help-resources)
    - [**Media**](#media)
    - [**Acknowledgments**](#acknowledgments)

<!-- /TOC -->

---

# User Experience (UX)

# Client Goals

- For users to visit the site and be inspired by others home improvements and design.
- Build a community of like-minded home lovers who enjoy engaging on the platform.
- To encourage visitors not to just scroll through the posts but to add their own as well.
- Thus, being able to easily create a new profile and add posts.
- For visitors to comment on individual posts and start a discussion.
- To be able to 'like' a post and have them saved in their profile.

## First Time Visitor Goals

- Visit the site and immediately know the purpose and navigate easily.
- View a constant feed of posts without having to create an account. 
- Have the ability to search for posts by category to tailor my search.
- Be able to create an account quickly and without too much information required.
- Be able to easily add my own photos and stories.
- Feel welcomed by other users of the site and have the desire to return.

## Returning Visitor Goals

- To be able to come back to the site and not have to log back in, but still have the option to log out if I want to.
- Return to posts I've liked to continue engaging with any comments made.
- Find new ideas from fresh content.
- Follow favourite user profiles so I can personalise my feed.
- Be notified if I have received any interaction with my own posts.
- Add more of my own posts and stories.

## Frequent Visitor Goals

- Be able to continue communicating with other users by way of comments and likes.
- Be able to add or remove likes and follows of posts and profiles to personalise my feed.
- To be able to update or delete my profile.

## Agile Methodology

Before work started on the build of the website, I created a Board of User Stories to determine exactly what was needed. Using the MoSCoW method, it was much easier to implement each issue based on their priority rather than trying to get everything completed. Separate user stories were created for the Frontend from those created for the API, however they were all added to the same project board and separated using a different Epic called Backend. That way the whole development process was visible on the same board. [You can view the user stories on this project board](https://github.com/users/rachaelbabister/projects/4), however they are also listed below


### User Stories

| EPIC                                     | USER STORY                                                                                                                            | ACCEPTANCE CRITERIA                                                                                                                                                                                                                                                                                                                                                                   | MoSCoW      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Basic Setup & General UX                 | As a Site Admin I can ensure the site has an appealing style so that it enhances the user experience.                                 | • Website design adheres to established branding guidelines and style preferences.<br>• Visual elements (e.g., colours, typography, imagery) are consistent and aesthetically pleasing.<br>• Layout and spacing are well-organized and visually balanced for readability and engagement.<br>• Website is responsive and displays correctly on various devices and screen resolutions. | MUST HAVE   |
|                                          | As a Site User I can view a navigation bar on every page so that I can access all pages easily.                                       | • All content is fully visible to both logged in and non registered users.<br>• Users who are not logged in can view content without restrictions.<br>• Users who are not logged in can see comments and likes on posts, but cannot like or comment unless logged in.                                                                                                                 | MUST HAVE   |
|                                          | As a Site User I can read all content whether I'm logged in or not so I can decide to register.                                       | • A navigation bar is displayed prominently on the website's homepage and all other pages.<br>• Navigation bar includes clear and intuitive links to essential pages.<br>• Navigation links are visually distinguishable and responsive across different screen sizes.<br>• Clicking on navigation links redirects the user to the corresponding pages without errors.                | MUST HAVE   |
| User Authentication                      | As a Site User I can create an account so that I can access all features for a signed in user.                                        | • User registration form includes appropriate fields for creating a new account.<br>• Registered users can log in to access all features.                                                                                                                                                                                                                                             | MUST HAVE   |
|                                          | As a Site User I can log in and log out so that I can access my profile and post content securely.                                    | • Users can login using a valid username and password, which then directs them to their profile page.<br>• Logged in users can see a log out button which when clicked, securely logs them out.<br>• Once logged out, users are unable to post content, like posts or perform any other actions that require authentication.                                                          | MUST HAVE   |
|                                          | As a Site User I can see easily if I am logged in or not.                                                                             | • Logged in users can see their username or a logged in status clearly in the navigation bar or header.<br>• Logged out user can see a login or register link in the navigation bar, indicating they need to login.                                                                                                                                                                   | SHOULD HAVE |
|                                          | As a Site User I can stay logged in until I have manually logged out to improve my user experience.                                   | • Logged in users remain logged in across sessions until they manually log out, even after closing and reopening the browser.                                                                                                                                                                                                                                                         | SHOULD HAVE |
| User Profile Management                  | As a Site User I can view and edit my profile so that I can see and update my personal information.                                   | • A logged in user can view their profile page which will detail their personal information and a list of their posts.<br>• Logged in users can access their profile page via a clearly visible link.                                                                                                                                                                                 | MUST HAVE   |
|                                          | As a Site User I can delete my profile if I no longer want to have an account on the site.                                            | • A logged in user can click on a delete profile within their profile page.<br>• Confirmation is required before the profile is permanently deleted, warning the user of the loss of data.                                                                                                                                                                                            | SHOULD HAVE |
|                                          | As a Site User I can view other profiles to see their content and interact with them.                                                 | • When logged in, users can view other users profiles, displaying their account information and posts.<br>• Logged in user can comment and like on other users content.                                                                                                                                                                                                               | SHOULD HAVE |
|                                          | As a Site User I want to follow other profiles so that I can personalise my feed.                                                     | • When logged in, users can follow or unfollow other users profiles by clicking on a button on their profile page.<br>• Content from a followed profile will appear in the logged in user's feed prioritised accordingly.                                                                                                                                                             | SHOULD HAVE |
|                                          | As a Site User I can update my username and password.                                                                                 | • Forgot password link is provided on the login page.<br>• Users can enter their email address to receive a password reset link.<br>• Password reset link is valid for a limited time and expires after use or after a set period.<br>• Users can create a new password using the reset link and successfully log in.<br>• Users can update their username on their profile page.     | COULD HAVE  |
|                                          | As a Site User I want to receive notifications so that I know when others have interacted with my posts, comments and profile.        | • A list of notifications will be displayed for a logged in order, with the most recent first.<br>• A detailed view of a notification will be displayed including sender, recipient, message, related post or comment and read status.<br>• Notifications can be marked as read.<br>• Notifications will be updated in real-time.                                                     | COULD HAVE  |
| Posting Content                          | As a Site User I can create a new post with photos and descriptions so that I can share my home projects.                             | • Logged in users can click on a 'Create Post' option that will allow them to upload photos and descriptions of their post.<br>• Once submitted, the post will be displayed on the users profile and feed.                                                                                                                                                                            | MUST HAVE   |
|                                          | As a Site User I can modify or delete my posts so that I can update or remove my content.                                             | • Once logged in, users can edit or delete their own posts.<br>• Editing a post replaces the existing content with the updated version.<br>• Deleting a post removes it from the feed.                                                                                                                                                                                                | SHOULD HAVE |
| Commenting & Liking                      | As a Site User I can comment on posts so that I can engage with other users content.                                                  | • Once logged in, users can comment on a post and submit it.<br>• Submitted comments are displayed below the post for other users to view.                                                                                                                                                                                                                                            | SHOULD HAVE |
|                                          | As a Site User I can like other users posts so that I can show support for their content.                                             | • Once logged in, users can 'like' posts using a visible button on each post.<br>• The number of likes is updated and displayed on the post.                                                                                                                                                                                                                                          | COULD HAVE  |
|                                          | As a Site User I can modify or delete my comments on a post so that I can update or remove my comment.                                | • Once logged in, users can edit or delete their own comments.<br>• Editing a comment replaces the existing comment text with the updated version.<br>• Deleting a comment removes it from the comment section.                                                                                                                                                                       | SHOULD HAVE |
| Content Search, Filtering & Categorising | As a Site User I can search for posts by title and content keywords so that I can find specific posts.                                | • Users can type in keywords in a search bar and posts containing those keywords in the title or content will be displayed in the search results.                                                                                                                                                                                                                                     | COULD HAVE  |
|                                          | As a Site User I can filter search results by username, most liked, date created and categories so that I can narrow down my results. | • Users can filter the search results by username, most liked, date created and categories using a drop down or list filter.                                                                                                                                                                                                                                                          | COULD HAVE  |
|                                          | As a Site User I can filter the posts into various categories so that I can quickly find content that matches my preferences.         | • Post filtering options are prominently displayed from a category list or menu.<br>• Applying filters updates the feed to display only posts matching the selected category.                                                                                                                                                                                                         | COULD HAVE  |
| Fine Tuning                              | As a Site User I can click a back to top button so that the page scrolls to the top of the page.                                      | • A 'back to top' button is visible on long-scrolling pages of the website.<br>• Clicking the back to top button smoothly scrolls the page to the top.                                                                                                                                                                                                                                | COULD HAVE  |
|                                          | As a Site User I can see confirmation that a comment / form has been posted so that I know it has been sent.                          | • After submitting a comment or form, a confirmation message is displayed on the screen.<br>• The confirmation message indicates that the comment or form submission was successful.                                                                                                                                                                                                  | COULD HAVE  |
| Deployment                               | As a Site User I can view the website in a public domain so that I can view the website                                               | • The website is accessible via a public domain URL.<br>• Users can type the domain URL into a web browser to access the website.                                                                                                                                                                                                                                                     | MUST HAVE   |
| Testing & Documentation                  | As a Site Admin I can complete manual testing so that I know the blog works correctly.                                                | • Site Admin conducts manual testing of key features and functionalities of the blog.<br>• Testing includes navigating through different pages, interacting with forms and buttons, and verifying expected behaviour.<br>• Site Admin ensures that all links, images, and content display correctly and that there are no obvious errors or issues.                                   | SHOULD HAVE |
|                                          | As a Site Admin I can complete validator testing so that I know all the source code doesn't have any bugs.                            | • Site Admin runs automated validation tools or scripts to check the source code for errors, syntax issues, or non-compliance with coding standards.<br>• Validator testing covers HTML, CSS, and JavaScript code to ensure compliance with web standards and best practices.<br>• Site Admin resolves any identified issues or bugs and retests to ensure successful validation.     | MUST HAVE   |
|                                          | As a Site Owner I can access a README file so that all information regarding the project is available once complete.                  | • A README file is included in the project repository.<br>• A README file provides comprehensive information about the project, including its purpose, features, and all testing completed.                                                                                                                                                                                           | MUST HAVE   |

---

# Design

## Colour Scheme

The colours chosen for the website were to inspire calm and warmth.

![From House to Home colour palette](docs/images/colour-palette.png)

## Typography

Simple and elegant fonts were chosen from Google Fonts, that complimented each other without being too distracting. 

![Google Fonts used for From House to Home](docs/images/googlefonts.webp)

Font Awesome is also used for various icons on the site, in particular on the NavBar.

## Wireframes

Before implementing the website, I created [Wireframes for each page using Balsamiq.

### Home Page - not logged in

![Home page](/docs/images/wireframes/Home-loggedin.webp)

### Home Page - logged in

![Home page - logged in](/docs/images/wireframes/Home-loggedin.webp)

### Sign up

![From House to Home colour palette](/docs/images/wireframes/SignUp.webp)

### Sign in

![Sign In](/docs/images/wireframes/SignIn.webp)

### Create Post

![Create Post](/docs/images/wireframes/CreatePost.webp)

### Profile page

![Profile](/docs/images/wireframes/Profile.webp)

### Update Profile

![Update Profile](/docs/images/wireframes/UpdateProfile.webp)

---

# Backend Planing

## Data Models & Relationsips

[For ease of reference the data models and relationships created for the API are here, along with the rest of the API README document.](https://github.com/rachaelbabister/from-house-to-home-api?tab=readme-ov-file#data-models)

---

# Features

## General features 

- The site is fresh and not too busy, making it easy to navigate.
- A navigation bar is situated at the top of every page and gives you extra pages once you are logged in.
- You can view posts on the home page straight away meaning the user doesn't have to find them.
- The posts have an infinite scroll which means they auto load, not having to view more pages.
- Users are able to Create, Read, Update and Delete (CRUD) their posts and comments.
- All pages show the site branding with a logo and styling to match. The site is responsive across different devices.

## Landing Page

All posts are immediately able to be seen for ease of viewing and to give a better user experience. The navbar sticks to the top of the page, so users are able to choose the option to sign up or sign in at all times. In desktop view they are also able to see a list of other registered users, and they can click on the icons to see their profile page, but they are unable to interact until they have signed in. On the landing page, other user profiles are hidden to give a better experience on a smaller screen.

![Desktop Landing Page](docs/images/desktopfeatures/landingpage.webp)

*Desktop Landing Page before sign up or sign in*

![Mobile Landing Page](docs/images/mobilefeatures/mob-landingpage.webp)

*Mobile Landing Page before sign up or sign in*

## Sign Up & Sign In

A quick and simple sign up form so that users can get posting straight away. Once they have created their account they get directed to the sign in page to login, where they then get directed to the home page.

![Desktop Sign Up Page](docs/images/desktopfeatures/signup.webp)

*Desktop Sign Up Page*

![Desktop Sign In Page](docs/images/desktopfeatures/signin.webp)

*Desktop Sign In Page*

![Mobile Sign Up and Sign In Pages](docs/images/mobilefeatures/mob-signinup.webp)

*Mobile Sign Up and Sign In Pages*

## Home Page after Sign In

Once users are signed in, they get taken to the home page but now have more options to add a new post, follow other profiles (on desktop only) and within the navbar there are also buttons to view 'Friends' they are following and posts they have 'Liked'. They can also visibly see their username, giving indication that they are signed in. This button would take them to their profile page.

![Desktop Home Page](docs/images/desktopfeatures/homepage-loggedin.webp)

*Desktop Home Page after sign in*

![Mobile Home Page](docs/images/mobilefeatures/mob-togglemenu.webp)

*Mobile Home Page after sign in showing toggle menu*

## Create a Post

By clicking on the New Post button users get taken to a simple upload page. They will get error messages if they miss out adding an image or a title, but content and category are optional fields. They will also get error messages if the image is too large. Once they click 'Post', they get directed to the posts detail where they have the option to edit, delete or comment on it.

![Desktop Create a Post Page](docs/images/desktopfeatures/createpost.webp)

*Desktop Create a Post Page*

![Mobile Create a Post Page](docs/images/mobilefeatures/mob-createpost.webp)

*Mobile Create a Post Page*

## Edit a Post

On the Posts detail page a user can click on the three dots to bring up a menu to edit or delete their post. On a mobile they can also see a few other users to select and view their Profiles if they wish. To edit their post, just can just update any information and click 'Save'. If they want to delete a post, when they select delete on the drop down they will get a pop up asking to confirm before it gets deleted.

![Desktop Menu to Edit a Post Page](docs/images/desktopfeatures/dropdowneditpost.webp)

*Desktop Menu to Edit or Delete a Post*

![Desktop Edit a Post Page](docs/images/desktopfeatures/updatepost.webp)

*Desktop Edit a Post Page*

![Mobile Edit a Post Page](docs/images/mobilefeatures/mob-updatepost.webp)

*Mobile Edit a Post Page*

## Profile Page

A Profile is automatically created for the user once they sign up, and can be accessed by clicking on their username in the navbar. Profile pages can be viewed by anyone on the site, but only the owner of a profile can edit it. Users are able to edit their profile once signed in by clicking on the three dots. It will give them the option to edit profile or change their username or password. 

![Desktop Profile Page](docs/images/desktopfeatures/profilepage.webp)

*Desktop Profile Page*

![Mobile Profile Page](docs/images/mobilefeatures/mob-profile.webp)

*Mobile Profile Page*

## Edit Profile Page

Clicking on edit profile will take the user to a page where they can upload their own profile picture (the green avatar is the default picture) and include a bit about themselves. If the About Me is left blank nothing appears on their profile page, but that is optional. They are also given the option to update their username or password.

![Desktop Edit Profile Page](docs/images/desktopfeatures/updateprofile.webp)

*Desktop Edit Profile Page*

![Mobile Edit Profile Page](docs/images/mobilefeatures/mob-updateprofile.webp)

*Mobile Edit Profile Page*

## Comments 

Users can read comments on posts at any time, but are only able to post comments when they are signed in. They will also have the option to edit or delete their comments while signed in. There is also a comment count on each post, so users can easily see when scrolling the feed whether comments have been made or not.

![Desktop Comments](docs/images/desktopfeatures/comments.webp)

*Desktop Comments*

![Mobile Comments](docs/images/mobilefeatures/mob-comments.webp)

*Mobile Comments*

## Deleting a Post or Comment

As part of a defensive design component, users will be asked to confirm they want to delete a post or comment, on the off chance they hit delete by mistake. If they do want to continue with deletion they can confirm and will be redirected back to the previously visied page.

![Confirm Deletion](docs/images/desktopfeatures/defensive.webp)

*Confirm Deletion*

## Likes 

All users can see that a post has been liked by a heart icon at the bottom of the post, with a number count next to it, however only those who are logged in are able to leave a like. Users can also click the heart again to unlike a post.

![Desktop Comments](docs/images/desktopfeatures/likes.webp)

*Desktop Likes*

![Mobile Comments](docs/images/mobilefeatures/mob-likes.webp)

*Mobile Likes*

## Follows 

Users can follow and unfollow other users by clicking on the button next to their profile on the home page, or by navigating to their profile page and selecting follow from there. Another click of the button will unfollow them. 

![Desktop Comments](docs/images/desktopfeatures/follows.webp)

*Desktop Likes*

![Mobile Comments](docs/images/mobilefeatures/mob-follows.webp)

*Mobile Likes*

## Search Bar & Category Filter 

When viewing all posts on the home, viewers are able to search for posts by keyword in the search bar, or select the drop down menu to filter the posts by a category. 

![Search Bar & Category Filter](docs/images/desktopfeatures/categoryfilter.webp)

*Search Bar & Category Filter*

## Empty Results

If a user visits the 'Friends' or 'Liked' pages but hasn't followed any profiles or liked any posts, then these will give an empty feed. 

![Empty Results](docs/images/desktopfeatures/noposts.webp)

*Empty Results*

## 404 Page Not Found

If a user tries to access a page that isn't valid, they will get a 404 Page Not Found error.

![Empty Results](docs/images/desktopfeatures/404page.webp)

## Reusable

*404 Page Not Found*

# Future Implementations

Unfortunately time was against me with this project, and I didn't have time to implement all the functionality I would have liked to. Future implementations would include:

- Giving the logged in user nofifications of receiving a comment or like on their posts, getting a follow, and someone else commenting on a post they have commented on.  
- The ability to have an online chat between online users.
- A scroll to the top of the page button. With the infinite scrolling of the application, I think this would be ideal to have. However, users can access the menu at all times, so are able to navigate around the site easily.
- A back button on the Posts Detail page that takes the user back to the point where they left the feed.
- The ability to delete a profile.
- Fine tuning the search functionalility so that results can also be filtered by date, and most liked.
- I would like to have more flash messages that inform users of when an action has been successful, for example when they have submitted a post or a comment. I did install Toastify to try to implement this, but time didn't allow.

---

# **Technologies & Frameworks**

## Main Technologies

- HTML & CSS - to create the structure and add styling of the site.
- JavaScript - for interaction with the site.
- React - A JavaScript library for user interface.

## Frameworks & Libraries

- [Balsamiq](https://balsamiq.com/) - to create Wireframes.
- [React Bootstrap](https://react-bootstrap.github.io/) - CSS framework to help build responsive websites.
- [ChatGPT](https://openai.com/chatgpt) - to create a JSON file of all the recipes.
- [Gitpod](https://www.gitpod.io/) - cross platform cloud IDE to deploy workspace environment to Github.
- [Cloudinary](https://cloudinary.com/) - cloud based storage for images.
- [Font Awesome](https://fontawesome.com/) - to use icons on the website.
- [Github](https://github.com/) - to store and display all files and assets for the website.
- [Google Fonts](https://fonts.google.com/) - to import the fonts used on the website.
- [Google Image Search](https://images.google.com/) - to find images to upload test posts.
- [Google Dev Tools](https://developer.chrome.com/docs/devtools/) - to troubleshoot, test and solve issues with any styling.
- [Heroku](https://www.heroku.com/) - for hosting and deployment of the site.
- [JSHint](https://jshint.com/) - to check JavaScript files for bugs.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - to test the accessibility of the site.
- [Lucid](https://lucid.co/) - to create my Data Models.
- [Photoshop 2024](https://www.adobe.com/products/photoshop.html) - to optimise images for the website.
- [W3C Markup Validator](https://validator.w3.org/) - to check the source code of my HTML files for any bugs.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - to check the source code of my CSS file for any bugs.
- [Canva](https://www.canva.com/) - to help create the logo.
- [Coolor](https://coolors.co/) - to help create the colour palette.

---

# **Testing**

[Testing for the API can be found here in a separate file - TESTING.md](TESTING.md)
___

# **Deployment**

Both Environment & Settings and Deploying to Heroku have been set up [within the API](https://github.com/rachaelbabister/from-house-to-home-api/blob/main/README.md#environment--settings), however I shall list the full deployment details here for ease of reference.

## **Environment & Settings**

- In your IDE open your env.py file or create one in the main directory if it hasn't been created for you.
- Having created your cloud-based database, add the DATABASE_URL value and a SECRET_KEY value to the env.py file.
- Open the settings.py file and import the env.py file and the DATABASE_URL and SECRETKEY file paths.
- Install Django and add to requirements.txt.
- Create your project.
- Add the STATIC files settings.
- Create a file called Procfile (with a capital P) in the main directory,
- For cloud-based image storage, add Cloudinary URL to env.py
- Add Cloudinary libraries to INSTALLED APPS.
- Add your IDE workspace and Heroku to ALLOWED_HOSTS.
- Make migrations and migrate.
- Create new Django project - *django-admin startproject <home_api>*.
- Create Superuser (email can be left blank) - *python manage.py createsuperuser (username>email>password1>password2)*.
- Create your apps - *python manage.py startapp <nameofapp>*.
- Before you add, commit & push your files to GitHub, ensure DEBUG is set to False in your settings.py file.

## **Deploying to Heroku**

- Login or create an account on Heroku.com. Click 'New' and then 'Create New App'.
- Give your project a unique name and select a region, then click 'Create App'.
- Connect your Heroku project to your GitHub repository. Under deployment you can choose GitHub, find the relevant one and click 'Connect.
- Once connected, go to the Settings tab and click on 'Reveal Config Vars'. Add the environment key & value variables used above in your env.py file (CLOUDINARY_URL, DATABASE_URL & SECRET_KEY).
- Next add DISABLE_COLLECTSTATIC and add 1 if this is to be disabled to prevent errors, or 0 if the app is in a state where errors will not be generated.
- Click on Buildpack further down and click Add Buildpack to confirm Heroku buildpack is present.
- Navigate to the Deploy section, click on Github for the deployment method and confirm.
- Search for your repository name and click connect.
- At the bottom of the deploy section, make sure you are connected to the main branch and then click Deploy Branch.
- You can then view your live site.

## **Connecting the Frontend to the API**

### **Add Client Origin URLs**
- In Heroku, go to your API app’s 'Settings'.
- Add Config Vars for frontend URLs:
    - **Key:** 'CLIENT_ORIGIN'
    - **Value:** Your deployed React app URL, in this instance https://from-house-to-home-b7afcfcc32e9.herokuapp.com/.
    - **Key:** 'CLIENT_ORIGIN_DEV'.
    - **Value:** Your Gitpod preview link, without the the trailing slash.

### **Frontend Setup in Gitpod**
- In your Frontend Gitpod workspace:
  - Install Axios:
    - Run 'npm install axios' in the terminal.
  - Create a folder called 'api' create a file named 'axiosDefaults.js' inside.

### **Configure Axios**
- Import Axios in 'axiosDefaults.js':
    ```javascript
    import axios from 'axios';
    ```
- Set up Axios:
    ```javascript
    axios.defaults.baseURL = 'https://home-api-58bb6b7692c8.herokuapp.com/';
    axios.defaults.headers['Content-Type'] = 'multipart/form-data';
    axios.defaults.withCredentials = true;
    ```
### **Use Axios in Your App**
- Import 'axiosDefaults.js' into your 'App.js'.

## **Handle Changes**

### **Redeploy After Changes**
- If you update any files, push changes to GitHub.
- Manually redeploy on Heroku if automatic deploys are not enabled.

### **Static Files**
- After changing static files, make sure to 'collectstatic' them and push to GitHub for updates.

## **Local Development**

### **How to Fork**

To fork a repository on Github, follow these steps:

- Log in to Github - or step up a new account.
- Click on the repository name.
- Click the Fork button in the top right corner.

### **How to Clone**

To clone a repository on Github, follow these steps:

- Log in to Github - or step up a new account.
- Find or create your repository.
- Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and paste the link you copied in step 3. Press enter.
 
---
# **Credits**

## **Help Resources**

- The [React Bootstrap website](https://react-bootstrap-v4.netlify.app/) was helpful for many things, including the NavBar, Cards, Dropdowns, and other layouts and components.
- To help with the findDOMNode console error [I used this artcle from bobbhadz.com](https://bobbyhadz.com/blog/react-warning-finddomnode-is-deprecated-in-strict-mode) to help update my index.js file.
- This article from [freecodecamp.org](https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/) helped when I was receiving a particular error on my site.
- [Stack Overflow](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json) helped when I was looking to specify my Node packages within package.json.
- After reaching out to the Slack community for help with my category search, [Kelly Hurchison kindly shared her repo](https://github.com/quiltingcode/happening-react-frontend) for me to look as how she did hers.
- I found [this extension from open-vsk.org](https://open-vsx.org/extension/huntertran/auto-markdown-toc) when doing a Google search for autocreating a Table of Contents for this README document.
- I used the 'Moments' walkthrough to help with some setup and coding.
- ChatGPT - to explain certain code and bugs I didn't understand.


## **Media**

The media used throughout the site has either come from other users who have uploaded their images when testing the site for me, or I have downloaded images Google Images to upload as a post.

- The logo was designed by myself using Canva, with the house icon coming from their icon library.
- The following images were downloaded from Google Images and then amended to match the sites colour palette.
    - 'default-avata.webp' (uploaded on the API) - *the default image used on registration and until a user uploads their own profile image.
    - 'search.webp' - *used when no results have been returned.*
    - 'notfound.webp' - *used when visiting a url that isn't valid.
    - 'upload.webp' - *used as a placeholder when uploading an image on a new post.*

## **Acknowledgments**

This has been a tough project and I've had some great support! The Slack Community, yet again, have been saviours, whether its been answering questions or the help already being out their when searching for things.

The support of my friends and family has been incredible, from helping to do chores so that I could study, to being asked to yet again go through the site to give me feedback. Thank you, it's so appreciated.