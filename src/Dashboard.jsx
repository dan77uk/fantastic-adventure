import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h2>Loading...</h2>;
  if (!user) return <Navigate to="/login" replace={true} />;
  if (user)
    return (
      <section>
        <h3>{user.displayName}</h3>
      </section>
    );
}
