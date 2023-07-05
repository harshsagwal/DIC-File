import React from 'react';
import "./App.css";
import NavigationBar from './component/navigationbar'; 
import Admissions from './component/week1admissions'; 
import About from './component/week1about';
import Courses from './component/week1courses';
import Contact from './component/week1contact';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      
      
    </Router>
  );
}

const Home = () => {
  return (
    <>
    <body className="homepage">
      <div className="containertop">
        <img src="./projectimages/collegelogo.jpg" id="logo" height="100px" />

        <p>
          Shri Ram Engineering College <br />
          Chandigarh, India<br />
          Since 1955
        </p>
      </div>

      <div className="herobanner">
        <h3>
          Its all starts with the like minded.<br />
          <a href="./week1admissions.html">Choose your Stream</a>
        </h3>
      </div>

      <h2 className="campustourhead">Campus Tour</h2>

      <div className="image-grid">
        <ul>
          <img src="./projectimages/campus1.jpg" />
          <img src="./projectimages/campus2.jpg" />
          <img src="./projectimages/campus3.jpg" />
          <img src="./projectimages/campus4.jpg" />
          <img src="./projectimages/campus5.jpg" />
          <img src="./projectimages/campus6.jpg" />
          <img src="./projectimages/campus7.jpg" />
          <img src="./projectimages/campus8.jpg" />
          <img src="./projectimages/campus9.jpg" />
          <img src="./projectimages/campus10.jpg" />
        </ul>
      </div>

      <div className="social">
        <h3 className="socialHeading">Connect with us on social media</h3>
        <div className="handles">
          <a href="instagram.com" className="insta">
            <img src="./projectimages/insta.jpeg" alt="" />
          </a>
          <a href="facebook.com" className="facebook">
            <img src="./projectimages/facebook.jpeg" alt="" />
          </a>
          <a href="twitter.com" className="twitter">
            <img src="./projectimages/twitter.png" alt="" />
          </a>
        </div>
      </div>

      <div className="stats">
        <h2>Our Stats For Last 10 Years</h2>
        <table>
          <tr>
            <th>Year</th>
            <th>Enrollment</th>
            <th>Graduates</th>
            <th>Employment Rate</th>
            <th>Publications</th>
          </tr>
          <tr>
            <td>2018</td>
            <td>1000</td>
            <td>500</td>
            <td>85%</td>
            <td>50</td>
          </tr>
          <tr>
        <td>2019</td>
        <td>1200</td>
        <td>600</td>
        <td>90%</td>
        <td>60</td>
        
      </tr>
      <tr>
        <td>2020</td>
        <td>1500</td>
        <td>700</td>
        <td>92%</td>
        <td>70</td>
        
      </tr>
      <tr>
        <td>2021</td>
        <td>1800</td>
        <td>800</td>
        <td>95%</td>
        <td>80</td>
       
      </tr>
      <tr>
        <td>2022</td>
        <td>2000</td>
        <td>900</td>
        <td>96%</td>
        <td>90</td>
       
      </tr>
      <tr>
        <td>2023</td>
        <td>2200</td>
        <td>1000</td>
        <td>98%</td>
        <td>100</td>
      
      </tr>
      <tr>
        <td>2024</td>
        <td>2400</td>
        <td>1100</td>
        <td>95%</td>
        <td>110</td>
        
      </tr>
      <tr>
        <td>2025</td>
        <td>2600</td>
        <td>1200</td>
        <td>92%</td>
        <td>120</td>
        
      </tr>
      <tr>
        <td>2026</td>
        <td>2800</td>
        <td>1300</td>
        <td>90%</td>
        <td>130</td>
        
      </tr>
      <tr>
        <td>2027</td>
        <td>3000</td>
        <td>1400</td>
        <td>88%</td>
        <td>140</td>
        
      </tr>
      <tr>
        <td>2028</td>
        <td>3200</td>
        <td>1500</td>
        <td>87%</td>
        <td>150</td>
        
      </tr>
         
        </table>
      </div></body>
    </>
  );
};

export default App;
