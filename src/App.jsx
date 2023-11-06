import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ProfessionalCareerPage from "./pages/ProfessionalCareerPage/ProfessionalCareerPage";
import CollegeCareerPage from "./pages/CollegeCareerPage/CollegeCareerPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PrivateTrainingPage from "./pages/ServicesPage/PrivateTrainingPage";
import SmallGroupPage from "./pages/ServicesPage/SmallGroupPage";
import LargeGroupPage from "./pages/ServicesPage/LargeGroupPage";
import Headroom from "react-headroom";

import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">

<Headroom>
      <Navbar />
</Headroom>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/professionalcareer" element={<ProfessionalCareerPage />} />
        
        <Route path="/collegecareer" element={<CollegeCareerPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privatetraining" element={<PrivateTrainingPage/>} />

        <Route path="/smallgroup" element={<SmallGroupPage />} />

        <Route path="/largegroup" element={<LargeGroupPage />} />

      </Routes>


    </div>
 
  );
}
// document.addEventListener('DOMContentLoaded', function() {
//   var navs = document.getElementById('navs');
//   var page = document.getElementById('page');
//   var openMenuButton = document.getElementById('openmenu');

//   window.addEventListener('scroll', function() {
//       page.classList.remove('menuopen');
//       if (window.scrollY >= 100) {
//           navs.classList.add('sticky');
//       } else {
//           navs.classList.remove('sticky');
//       }
//   });

  // Event listener to remove the sticky class when the button is clicked
  // openMenuButton.addEventListener('click', function() {
  //     Navbar.classList.remove('sticky');
  //     page.classList.add('menuopen');
  // });

// var links = document.querySelectorAll('a[href^="#"]');

  // links.forEach(function(link) {
  //     link.addEventListener('click', function(event) {
  //         // Prevent the default action
  //         event.preventDefault();

  //         // Get the target element
  //         var targetId = this.getAttribute('href');
  //         var targetElement = document.querySelector(targetId);

  //         // Smooth scroll to target
  //         if (targetElement) {
  //             targetElement.scrollIntoView({
  //                 behavior: 'smooth'
  //             });
  //         }
  //     });
  // });
// });

export default App;
