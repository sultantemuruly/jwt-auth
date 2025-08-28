import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthForm } from "./components/auth-form";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
