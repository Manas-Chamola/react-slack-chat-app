# Slack Chat Application

## Details
This application is build with the help of React and Redux and utilizes some of their core features.
It has a Login page, Logout page and a Chat page which has multiple panels.
It has features similar to live chat applications. 
It uses firebase database to store all the data. 

## Screenshots

![alt text](https://github.com/Manas-Chamola/react-slack-chat-app/blob/master/demo_images/Chat_Page.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/react-slack-chat-app/blob/master/demo_images/Avatar.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/react-slack-chat-app/blob/master/demo_images/Search.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/react-slack-chat-app/blob/master/demo_images/Typing.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/react-slack-chat-app/blob/master/demo_images/Emoji.jpg?raw=true)

## Features

* Authentication
* Multiple Channels
* Direct Message
* Image Upload
* Different themes
* Online/Offline Users
* Avatar
* New messages notification
* Emojis
* Search
* Favourite Channel
* Typing Notification
* Top Poster

## Demo: [Click Here](https://react-slack-app-e4588.web.app/)

## Setup

### 1.
```
git clone https://github.com/Manas-Chamola/react-slack-chat-app.git
``` 

### 2.
Create a new Firebase Project

### 3.
Create an `firebase.js` file in src folder, add your firebase credentials like this

```
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: [API_KEY],
  authDomain: [AUTH_DOMAIN],
  databaseURL: [DATABASE_URL],
  projectId: [PROJECT_ID],
  storageBucket: [STORAGE_BUCKET],
  messagingSenderId: [MESSAGING_SENDER_ID],
  appId: [AUTH_DOMAIN]
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

```

### 4.

```
npm start

or

yarn start
```

