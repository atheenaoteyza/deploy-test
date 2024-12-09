import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase/config";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { PrivateRoute } from "./pages/PrivateRoute";

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  );
};

export default App;
