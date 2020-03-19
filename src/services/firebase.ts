import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export function firestore() {
  return firebase.firestore()
}
