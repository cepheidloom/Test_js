const firebase = require("firebase/app");
const { getDatabase } = require('firebase/database');
require("firebase/analytics");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyBfnIi2V2Q24NwKEuT2NX6DoaAHdi-dp0U",
  authDomain: "pet-finder-a55bf.firebaseapp.com",
  databaseURL: "https://pet-finder-a55bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pet-finder-a55bf",
  storageBucket: "pet-finder-a55bf.appspot.com",
  messagingSenderId: "123046708378",
  appId: "1:123046708378:web:6b93ab4de0c46a466d8b23",
  measurementId: "G-TQ6L018E3L"
};

greet();

const app1 = firebase.initializeApp(firebaseConfig);
const db = getDatabase();

var founderName = document.querySelector("#founderName");
var founderPhone = document.querySelector("#founderPhone");
var petName = document.querySelector("#petName")
var foundLocation = document.querySelector("#foundLocation");
var foundDate = document.querySelector("#foundDate");
var petDescription = document.querySelector("#petDescription");

var submitBtn = document.querySelector('input[type="submit"]');

