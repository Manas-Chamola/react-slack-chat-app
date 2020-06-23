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
Create an `env.local` file, add your firebase credentials like this

```
REACT_APP_apiKey=[API_KEY]
REACT_APP_authDomain=[AUTH_DOMAIN]
REACT_APP_databaseURL=[DATABASE_URL]
REACT_APP_projectId=[PROJECT_ID]
REACT_APP_storageBucket=[STORAGE_BUCKET_ID]
REACT_APP_messagingSenderId=[MESSAGE_SENDER_ID]
REACT_APP_appId=[APP_ID]

```

### 4.

```
npm start

or

yarn start
```

