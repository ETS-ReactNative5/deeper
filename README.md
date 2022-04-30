# deeper

> This ReadMe details code documentation (the software report or what should be called the README_SOFTWARE.md). 

---


## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Development and Build Tools](#development-and-build-tools)
- [Software Modules](#software-modules)
- [Flow Chart](#flow-chart)

---

## Introduction

This project involves the design of a mobile application that aims to bridge the gap between those suffering from mental health disorders (focusing on depression/anxiety with college students on college campuses first) and their friends and family. Our frontend is React Native, which will allow for smooth user interaction and experience with our application, and our backend/database is Firebase, which allows for user information to be processed, retrieved, and stored through RESTful APIs. 

In terms of the user interface, the user is first prompted to the splash screen, which contains the logo of our project and two interactive buttons: sign up and sign in. Sign up allows the user to create an account with their name, email, and password, while sign in allows the user to access an existing account that they have already made. This is followed by onboarding pages, which allow the user to learn more about our application. They have the ability to navigate back and forth between screens through swiping the screen or hitting the next button. They also have the ability to skip these screens entirely. Finally, the user can interact with the main functionalities of our application through pressing the different icons of the navigation bar at the bottom of the screen. There is the home page, which allows the user to monitor their mental health and take a survey through the daily check-up; the community feed page, which allows the user to post something and interact or search up existing posts; the journal page, which allows the user to write about anything and check their past entries; and the inbox page, which allows the user to send their own messages, read and filter messages sent to them, and search up messages.

Although there is no hardware component (as our project is solely software-based), we have a [Figma](https://www.figma.com/file/8lHPYkZNslN37Y4j8CfBP6/Healthcare-App-with-Blush-Illustrations-Community?node-id=6%3A0) which allows us to wireframe our application. With the target of college students as mental health consumers in mind, we decided on a singular user interface that will be simple and easy-to-use, emulating social media for building bonds and familiarity. Shown below are some parts of our wireframe, and our user interface created with React Native emulates our Figma wireframe.


---

## Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/) as an IDE to open and edit code. 
2. Clone the Github repository through source control on Visual Code Studio. 
3. Open a new terminal, go into the frontend directory, and run ``yarn install`` to install all the dependencies required for the project to run. 
4. Then, run ``expo start`` to open the app on a simulator of an Apple or Android device.

---

## Development and Build Tools

For our application, we are using React Native 0.64.3 for our frontend and Firebase ^9.6.8 for our backend. To see more details about our scripts and dependencies (as there are too many to list due to the scope of our software), please refer to ``package.json`` in the frontend folder. 

---

## Software Modules

For our app, the different modules are stored in the frontend folder (and most will be in the screens subfolder, which contains the different pages that users navigate from and to). The assets subfolder contains fonts for text, icons for interacting with, and images for visuals in the user interface. The table below explains the modules and where they are stored, listed from top to bottom and as ordered by the repository:

| Module | Overview |
| --- | --- |
| `firebaseMethods.js` | Located in the API subfolder, this is a POST API function that sends a journal entry and informs the user whether it has been successfully saved or not through an alert. The fields for the document sent include content of what the user wrote, date of when the user saved the entry, and email of the user as the unique identifier. |
| `icons.js` | Located in the constants folder, this exports the icons for use in the application. |
| `images.js` | Located in the constants folder, this exports the images for use in the application. |
| `index.js` | Located in the constants folder, this centralizes and exports all of the constants for use in the application. |
| `theme.js` | Located in the constants folder, this exports different colors, sizes, and fonts for use in the application. |
| `tabs.js` | Located in the navigation folder, this creates the navigation bar on the bottom of the screen that the user can see and use to move between pages and their different functionalities after signing in. |
| `comments.js` | Located in the screens folder, this allows the user to comment under a post in the community forum screen. This is followed by the user being able to submit it. |
| `community.js` | Located in the screens folder, this is in charge of the community forum page and contains a GET API to retrieve and show previous posts. This involves calling the Firestore collection "posts" and displaying them on the app through the function renderPost. |
| `dailycheckup.js` | Located in the screens folder, this allows the user to complete a survey regarding their mental health through smiley faces representing their mood, another survey that is more concrete and tangible, and reminds them to write a journal entry. |
| `entries.js` | Located in the screens folder, this allows the user to read their previous journal entries through a GET API. Similar to the community functionality, this involves calling the Firestore collection "journal" and displaying them on the app through the function renderEntry. |
| `Fire.js` | Located in the screens folder, this is in charge of initializing and retrieving the Firebase app. |
| `healthindex.js` | Located in the screens folder, this allows the user to monitor their mental health through a graph. There is also a drop-down menu to filter the graph by different time intervals. |
| `home.js` | Located in the screens folder, this is in charge of the home page that highlights the daily check-up, mental health index, mediation, and mental health resources (redirects to a list of links). These pages are navigated through hardcoded buttons (using TouchableOpacity instead of Button in CSS).
| `inbox.js` | Located in the screens folder, this is in charge of the messaging system page that shows the different conversations that a user has and allows users to add new conversations through a GET API. It involves calling the Firestore collection "chats" and displaying them on the app through the function renderEntry. |
| `index.js` | Located in the screens folder, this centralizes and exports all of the screens for use in the application. |
| `journal.js` | Located in the screens folder, this is in charge of the journaling functionality that allows the user to write in a text field and save it through a POST API. It involves calling the Firestore collection "journal" and saves them through the function from firebaseMethods.js. |
| `messages.js` | Located in the screens folder, this is in charge of showing a user's favorite messages from the chat functionality. |
| `onboardingscreen.js` | Located in the screens folder, this allows the user to learn more about the app after signing in or signing up. This is through the dependency react-native-onboarding-swiper, and the user can skip the onboarding entirely or swipe through the different pages. When the user is on the last page, the button "next" becomes into "done." |
| `postscreen.js` | Located in the screens folder, this allows the user to write and upload an image as a post for the community forum functionality. The user is prompted to their camera roll through the built-in function launchImageLibraryAsync. |
| `sendinbox.js` | Located in the screens folder, this renders the specific messages of a conversation between two users through a GET API and allows the user to send a message through a POST API. This involves retrieiving from the "chats" collection and utilizing the dependency react-native-gifted-chat to format the messages (specifically with the function GiftedChat.append). |
| `signin.js` | Located in the screens folder, this is in charge of the sign in functionality (requires the user's email and password) and connects to Firebase authentication. This, as well as the user being able to hide or show the password, is possible through different states. When catching an error with signing in, the user is alerted. |
| `signup.js` | Located in the screens folder, this is in charge of the sign up functionality (where the user inputs their name, email, and password and connects to Firebase authentication. This, as well as the user being able to hide or show the password, is possible through different states. When catching an error with signing up, the user is alerted. |
| `splash.js` | Located in the screens folder, this is the first page that the user is prompted to when opening the app and allows the user to sign in or sign up. There is also the logo of our app positioned in the center of the screen. |
| `App.js` | This contains the page navigation through a NavigationContainer, Stack.Navigator, and Stack.Screen and first initializes the splash screen. |


---

## Flow Chart

![flowchart](./docs/flowchart.png)

---

[Back to the Top](#deeper)

