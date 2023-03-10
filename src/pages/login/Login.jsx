import styles from "./login.module.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.code);
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSignUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error code: ", error.code);
        console.log("error message: ", error.message);
      });
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" ref={emailRef} type="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              minLength="6"
              ref={passwordRef}
            />
          </div>
          <button>Sign Up</button>
        </form>
        <div className={styles.buttonContainer}>
          <button onClick={googleLogIn}>
            <FcGoogle size={28} />
            Sign up with Google
          </button>
          <button onClick={githubLogIn}>
            <FaGithub size={28} />
            Sign up with GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
