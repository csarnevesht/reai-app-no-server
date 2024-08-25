// Import necessary Firebase modules
// import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseAuth, googleProvider, facebookProvider } from '../firebase';
import { useEffect, useState, createContext, useContext, ReactNode } from 'react';

console.log('calling createContext() ');
// Define the AuthContext and AuthProvider
const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user: User | null) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const loginWithFacebook = () => {
    signInWithPopup(firebaseAuth, facebookProvider);
  };

  const signupWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loginWithGoogle, loginWithFacebook, signupWithEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
