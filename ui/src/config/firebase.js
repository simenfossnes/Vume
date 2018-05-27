import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const shroomsRef = databaseRef.child("shrooms");
export const commentsRef = databaseRef.child("comments");
export const reactionsRef = databaseRef.child("reactions");