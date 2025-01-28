import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import QuizCreation from "./QuizCreation";
import QuizList from "./QuizList";
import QuizTaking from "./QuizTaking";
import QuizResults from "./QuizResults";
import Auth from "./Auth";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Online Quiz Maker</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Quiz</Link>
            <Link to="/quizzes">Take Quiz</Link>
            <Link to="/auth">Login</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<QuizCreation />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizTaking />} />
          <Route path="/results" element={<QuizResults />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to the Online Quiz Maker</h2>
      <p>Create and take quizzes easily!</p>
      <Link to="/create" className="btn btn-primary">Create a Quiz</Link>
      <Link to="/quizzes" className="btn btn-secondary">Take a Quiz</Link>
    </div>
  );
}

export default App;
