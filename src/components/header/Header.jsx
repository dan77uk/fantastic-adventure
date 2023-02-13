import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  return (
    <header className={styles.header}>
      <section>
        <h1>
          <Link to="/">whatKnot</Link>
        </h1>
        <div className={styles.userPanel}>
          {!user && <Link to={"/login"}>Login</Link>}
          {user && (
            <>
              <img
                src={user.photoURL}
                alt="user avater"
                referrerPolicy="no-referrer"
              />
              <Link to={"/dashboard"}>Dashboard</Link>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </>
          )}
        </div>
      </section>
    </header>
  );
}
