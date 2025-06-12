import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./KYP_Queston/home.jsx";
import Cit from "./KYP_Queston/cit.jsx";
import Cls from "./KYP_Queston/cls.jsx";
import Css from "./KYP_Queston/css.jsx";
import Cssquestion from "./KYP_Queston/css_question.jsx";
import Clsquestion from "./KYP_Queston/cls_question.jsx";
import Citquestion from "./KYP_Queston/cit_question.jsx";
import Loginpage from "./components/login/login.jsx";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Wrapper Components
const CssQuestionWrapper = () => {
  const navigate = useNavigate();
  return <Cssquestion navigateToHome={() => navigate("/")} />;
};

const ClsQuestionWrapper = () => {
  const navigate = useNavigate();
  return <Clsquestion navigateToHome={() => navigate("/")} />;
};

const CitQuestionWrapper = () => {
  const navigate = useNavigate();
  return <Citquestion navigateToHome={() => navigate("/")} />;
};

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Loginpage />}
          />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/cit" element={<ProtectedRoute><Cit /></ProtectedRoute>} />
          <Route path="/cls" element={<ProtectedRoute><Cls /></ProtectedRoute>} />
          <Route path="/css" element={<ProtectedRoute><Css /></ProtectedRoute>} />
          <Route path="/css_question" element={<ProtectedRoute><CssQuestionWrapper /></ProtectedRoute>} />
          <Route path="/cls_question" element={<ProtectedRoute><ClsQuestionWrapper /></ProtectedRoute>} />
          <Route path="/cit_question" element={<ProtectedRoute><CitQuestionWrapper /></ProtectedRoute>} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;