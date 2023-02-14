import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) return <h2>Loading...</h2>;

  return (
    <section>
      <h3>Dashboard</h3>
    </section>
  );
}
