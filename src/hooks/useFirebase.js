import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import initializeAuthentication from "../Pages/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // checking if initial state is getting user from useAuth(). if not then loading forever untill getting value
    const [isLoading, setIsLoading] = useState(true);

    const getGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const getGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, userInfo => {
            if (userInfo && userInfo.emailVerified) {
                setUser(userInfo);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, [auth]);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setSuccess('Signed-Out successfully!');
                setError('');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
    }

    const getName = (e) => {
        setName(e.target.value);
    }
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const getEmailSignUp = () => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const getEmailSignIn = () => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const getUpdateProfile = () => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }
    const getVerifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const getResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess('Password Reset confirmation sent to your email successfully!');
                setError('');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
    }
    return {
        user,
        error,
        success,
        setUser,
        setError,
        setSuccess,
        getGoogleSignIn,
        getGithubSignIn,
        logOut,
        getName,
        getEmail,
        getPassword,
        getEmailSignUp,
        getEmailSignIn,
        getVerifyEmail,
        getUpdateProfile,
        getResetPassword,
        isLoading,
        setIsLoading,
    }
}

export default useFirebase;