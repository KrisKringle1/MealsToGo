import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user);
      setIsLoading(false);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsLoading(false);
      setError(e.toString());
      console.log("login error", e);
    });
};
