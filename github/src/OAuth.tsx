import React from "react";
import {useState, useEffect} from 'react';
import {supabase} from './client'

function OAuth() {
    const [user, setUser]:any = useState(null);
    const[userName,setUserName] = useState("");

    useEffect(()=>{
        checkUser();
        window.addEventListener('hashchange', function(){
            checkUser();
        })
    },[])
    async function checkUser() {
        const user = supabase.auth.user();
        const token:any = supabase.auth.session();
        setUser(user);
        setUserName(token.user.identities[0].identity_data.user_name)
    }

    async function signInWithgithub() {
       await supabase.auth.signIn({
        provider: 'github'
       });
       
    }

    async function signOut() {
    await supabase.auth.signOut();
        setUser(null);            
    }

if(user){
   return(
    <>
    <h1>Hello,{user.email}</h1>
      <br />
      <button onClick={signOut}>Sign Out</button>
    </>
   )
}
return(
    <>
    <h1>Hello！</h1>
      <br />
      <p>↓there sing in</p>
      <br />
      <button onClick={signInWithgithub}>Sign In</button>
    </>
   )

}

export default OAuth;
