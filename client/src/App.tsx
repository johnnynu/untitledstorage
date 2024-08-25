import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import LandingPage from "./components/Landing";
import Dashboard from "./components/Dashboard";
import { Provider } from "jotai";

const AppRoutes = () => {
  /*
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, [signOut]);
*/
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <Provider>
      <AuthProvider>
        <Router>
          <div className="App">
            <AppRoutes />
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
