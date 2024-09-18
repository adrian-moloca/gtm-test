import { FirebaseApp, initializeApp } from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export { firebaseApp, analytics };
