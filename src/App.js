//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/aboutus";
import ApplicationForm from "./pages/applicationform";
import StudentsData from "./pages/studentsdata";
import Contact from "./pages/contactus";
//import Helloworld from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/applicationform" element={<ApplicationForm />} />
        <Route path="/studentsdata" element={<StudentsData />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

  // const StudentsData = [
  //   {
  //     id: 1,
  //     name: "John Obi",
  //     state: "Lagos",
  //     stack: "React",
  //     description: "John is a React developer",
  //     jobTitle: "Software Engineer",
  //   },
  //   {
  //     id: 2,
  //     name: "Oladipo Olu",
  //     state: "Ca",
  //     stack: "Node",
  //     description: "Olu is a Node developer",
  //     jobTitle: "Software Engineer",
  //   },
  //   {
  //     id: 3,
  //     name: "Aneal Emeka",
  //     state: "Osun",
  //     stack: "FullStack",
  //     description: "Emeka is a FullStack developer",
  //     jobTitle: "Software Engineer",
  //   },
  //   {
  //     id: 4,
  //     name: "Austin Jane",
  //     state: "Texas",
  //     stack: "Backend",
  //     description: "Austin is a Backend developer",
  //     jobTitle: "Software Engineer",
  //   },
  //   {
  //     id: 5,
  //     name: "Emmanuel Ife",
  //     state: "Oyo",
  //     stack: "Vue",
  //     description: "Ife is a Vue developer",
  //     jobTitle: "Software Engineer",
  //   },
  //   {
  //     id: 6,
  //     name: "John Obi",
  //     state: "Lagos",
  //     stack: "React",
  //     description: "John is a React developer",
  //     jobTitle: "Software Engineer",
  //   },
  // ];
  // console.log(StudentsData);
}

export default App;
