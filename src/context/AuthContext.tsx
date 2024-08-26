// Import necessary Firebase modules
// import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseAuth, googleProvider, facebookProvider } from '../firebase';
import React, { useEffect, createContext, useContext, useState, ReactNode } from 'react';

console.log('calling createContext() ');
// Define the AuthContext and AuthProvider
const AuthContext = createContext<any>(null);
console.log('after calling createContext() ');


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  console.log('AuthProvider');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      console.log('onAuthStateChanged');
      console.log('user: ' + user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = () => {
    console.log('loginWithGoogle');
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const loginWithFacebook = () => {
    console.log('loginWithFacebook');
    signInWithPopup(firebaseAuth, facebookProvider);
  };

  const signupWithEmail = (email: string, password: string) => {
    console.log('signupWithEmail');
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  console.log('returning AuthContext.Provider');
  console.log('currentUser: ' + currentUser);
  return (
    <AuthContext.Provider value={{ currentUser, loginWithGoogle, loginWithFacebook, signupWithEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  console.log('useAuth');
  return useContext(AuthContext);
};
