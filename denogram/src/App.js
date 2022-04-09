import React, { useState, useEffect, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

import client from "./config/apollo";
import Auth from "./pages/Auth";
import { getToken } from "./utils/token";
import AuthContext from "./context/AuthContext";

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    // Check if user is logged in
    const token = getToken();
    if (token) setAuth(token);
  }, []);

  const logout = () => {

  };

  const setUser = (user) => {
    setAuth(user);
  };

  // useMemo prevents for something to re-render if the value of the function is the same
  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser      
    }), [auth] // if auth changes, re-render
  )

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
        />
        {!auth ? <Auth /> : <h1>logged</h1>}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
