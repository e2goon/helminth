import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAq3iddFYAd_QzHpgu1J9v4RPTKJEQEtIU',
  projectId: 'helminth-fd0cf'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export function firestore() {
  return firebase.firestore()
}
