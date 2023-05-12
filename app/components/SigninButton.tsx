"use client"

import { signIn, signOut, useSession } from "next-auth/react";


const SigninButton = () => {

  const { data: session } = useSession();

  console.log(session?.user);

  if (session && session.user) {
    return (
      <button className="btn btn-outline btn-accent" onClick={() => signOut()}>Sign Out</button>
    );
  }

  return (
    <button className="btn btn-outline btn-primary" onClick={() => signIn()}>Sign In</button>
  );
}

export default SigninButton;