var express = require('express'),
  router = express(),
  firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAwhVc2xm2sVPJJ5WwzYB_5xY4zVsBU_sk",
  authDomain: "social-tech-app.firebaseapp.com",
  databaseURL: "https://social-tech-app.firebaseio.com",
  projectId: "social-tech-app",
  storageBucket: "social-tech-app.appspot.com",
  messagingSenderId: "1063863987369"
};

module.exports = function (app) {
  firebase.initializeApp(config);
  console.log("Connection to Firebase established")
  app.use('/', router);
};

router.get('/test', function (req, res) {
  console.log("Hello World");
  res.end();
});
