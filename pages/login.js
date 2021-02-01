import { useEffect } from "react";
import Router from "next/router";

import Nav from "../components/Nav";

import useUser from "../mocks/use-user";
import { login } from "../libs/auth";

export default function App() {
  const { user, mutate } = useUser();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user) {
      Router.replace("/dashboard");
    }
  }, [user]);

  return (
    <div className="homepage">
      <Nav title="ACME" />
      <main>
        <h1>ACME!</h1>
        <p>Build Something Brilliant</p>
        <br />
        <button
          onClick={() => {
            login();
            mutate(); // after logging in, we revalidate the SWR
          }}
        >
          Login To Continue
        </button>
      </main>
    </div>
  );
}
