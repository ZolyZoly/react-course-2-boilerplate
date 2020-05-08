import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'lOGIN',
    uid 
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'lOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};