'use client';

const { signIn } = require("next-auth/react")

export default function SignIn(){
    return (<div><button onClick={()=>signIn("github")}>Sign In </button></div>)
}