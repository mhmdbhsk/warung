import * as firebaseAdmin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const projectId = process.env.FIREBASE_PROJEC_ID;
const databaseURL = process.env.FIREBASE_DATABASE_URL;

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

console.log(privateKey);

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey,
      clientEmail: clientEmail,
      projectId: projectId,
    }),
    databaseURL: databaseURL,
  });
}

export { firebaseAdmin };
