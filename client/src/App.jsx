import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/DashBoard";
import Auth from "./pages/auth/Auth";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/auth" element={<Auth></Auth>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
