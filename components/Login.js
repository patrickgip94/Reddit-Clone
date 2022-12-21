import { supabase } from "../services/supabaseClient";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const style = {
  wrapper: "flex min-h-screen flex-col items-center justify-center space-y-2",
  loginbutton:
    "group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white",
  loginButtonText: "font-bold group-hover:text-black",
};

const Login = () => {
  useEffect(() => {
    const { user } = supabase.auth.getSession() || { user: null };
    console.log(user);
  }, []);

  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.wrapper}>
      <img className="h-52" src="https://i.imgur.com/SxmE4Tc.png" />

      <button onClick={signInWithGoogle} className={style.loginbutton}>
        <img className="h-10 w-10" src="https://i.imgur.com/00wtBSc.png" />
        <span className={style.loginButtonText}>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
