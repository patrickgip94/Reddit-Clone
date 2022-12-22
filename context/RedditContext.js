import { createContext, useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const RedditContext = createContext();

export const RedditProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  useEffect(() => {
    const { user } = supabase.auth.getSession() || { user: null };
    setCurrentUser(user);

    console.log(user);

    supabase.auth.onAuthStateChange((_event, authSession) => {
      setCurrentUser(authSession.user);
    });
  }, []);

  return (
    <RedditContext.Provider
      value={{ currentUser, selectedPost, setSelectedPost, fetcher }}
    >
      {children}
    </RedditContext.Provider>
  );
};
