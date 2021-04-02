import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCq5HVo-GVm5D2dPdxFFze3n-Uu88eQV9M",
    authDomain: "the-game-library-project.firebaseapp.com",
    projectId: "the-game-library-project",
    storageBucket: "the-game-library-project.appspot.com",
    messagingSenderId: "394826555986",
    appId: "1:394826555986:web:8aaeff2760b2ab7fe7758b"
  };

  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();