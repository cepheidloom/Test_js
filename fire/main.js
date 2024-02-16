const firebase = require("firebase/app");
require("firebase/database");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

function saveData(founderName, founderPhone, foundLocation, foundDate, petDescription) {
  firebase.database().ref('found/' + founderName).set({
    founderName: founderName,
    founderPhone: founderPhone,
    foundLocation: foundLocation,
    foundDate: foundDate,
    petDescription: petDescription
  })
  .then(() => {alert("Data saved successfully")} )
  .catch((error) => {alert("Data could not be saved." + error)});
}
module.exports = saveData;