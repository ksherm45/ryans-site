import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ProfessionalCareerPage from "./pages/ProfessionalCareerPage/ProfessionalCareerPage";
import CollegeCareerPage from "./pages/CollegeCareerPage/CollegeCareerPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PrivateTrainingPage from "./pages/ServicesPage/PrivateTrainingPage";
import SmallGroupPage from "./pages/ServicesPage/SmallGroupPage";
import LargeGroupPage from "./pages/ServicesPage/LargeGroupPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/professionalcareer" element={<ProfessionalCareerPage />} />
        
        <Route path="/collegecareer" element={<CollegeCareerPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privatetraining" element={<PrivateTrainingPage/>} />

        <Route path="/smallgroup" element={<SmallGroupPage />} />

        <Route path="/largegroup" element={<LargeGroupPage />} />



        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
