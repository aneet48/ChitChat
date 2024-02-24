import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';

type userData = {
  email: string;
  password: string;
  name: string;
};

class FirebaseService {
  private auth: FirebaseAuthTypes.Module;

  constructor() {
    this.auth = auth();
  }

  async signUp(userData: userData) {
    const {email, password} = userData;
    const usersRef = firebase.firestore().collection('users');
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        usersRef.doc(`${userCredential.user.uid}`).set({
          ...userData,
          uid: userCredential.user.uid,
        });
      });
  }

  async login(userData: Omit<userData, 'name'>) {
    const {email, password} = userData;
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        console.log('---userCredential', userCredential);
      })
      .catch(err => {
        console.log('---err', err);
      });
  }

  async logout() {
    try {
      await this.auth.signOut();
      return {success: true};
    } catch (error) {
      return {success: false};
    }
  }
}

export default new FirebaseService();
