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

--

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

[For ease of reference the data models and relationships created for the API are here.](https://github.com/rachaelbabister/from-house-to-home-api?tab=readme-ov-file#data-models)

---

# Features

## General features 

- The site is fresh and not too busy, making it easy to navigate.
- A navigation bar is situated at the top of every page and gives you extra pages once you are logged in.
- You can view posts on the home page straight away meaning the user doesn't have to find them.
- The posts have an infinite scroll which means they auto load, not having to view more pages.
- Users are able to Create, Read, Update and Delete (CRUD) their posts and comments.
- All pages show the site branding with a logo and styling to match. The site is responsive across different devices.

