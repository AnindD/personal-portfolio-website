import './App.css';
import React from 'react'
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitSquare, FaBuffer, FaHammer, FaGrinAlt, FaFileAlt} from "react-icons/fa";
//import Card from 'react-bootstrap/Card';



function App() {
  let Component; 
  switch (window.location.pathname) {
    case "/":
      Component = <Home></Home> 
      break; 
    case "/Projects":
      Component = <Projects></Projects> 
      break;
    case "/skills":
      Component = <Skills></Skills>
      break  
  }
  return (
    <>
    <Navbar /> 
    {Component}
    </>
  );
}

function Navbar() { 
  return (
    <nav className="nav">
      <ul>
        <li><a href="/" className="site-title"><FaGrinAlt/> About Me</a></li>
      </ul>
      <ul>
        <li>
          <a href="/Projects"><FaBuffer/> Projects</a>
        </li>
        <li>
        <a href="/skills"><FaHammer/> My Skills</a>
        </li>
        <li>
          <a href="/Resume"><FaFileAlt/> Résumé</a>
        </li>
      </ul>
    </nav>
  )
}

function Skills() {
  return ( 
    <React.Fragment>
      <div>
      <br/>
      <h7>Skills</h7>
      <p>Here is a showcase of all my technical skills I have built through the development of my projects.</p>
      </div>
      <h7>Languages</h7>
      <div>
      <p>
        <ul>
          <li>4 years of experience in Python <FaPython /></li>
          <li>3 years experience in HTML, CSS and JavaScript <FaJs/></li>
          <li>2 years experience in Java <FaJava/></li>
          <li>Project experience working with SQL <FaDatabase/></li>
          <li>Currently learning C++/C</li>
        </ul>
      </p>
      </div>
      <div>
        <h7>Technical Experience</h7>
        <p>
          <ul>
            <li>Git and Version Control Procedures <FaGitSquare/></li>
            <li>Web Development</li>
            <ul>
              <li>Frontend Frameworks - ReactJS <FaReact/></li>
              <li>Backend Frameworks - Django</li>
            </ul>
            <li>Data Structures</li>
            <ul>
              <li>Arrays & Hashmaps</li>
              <li>Stacks & Queues</li>
              <li>Singly Linked Lists</li>
            </ul>
            <li>Algorithms</li>
            <ul>
              <li>Big O Analysis and Algorithmic Complexity</li>
              <li>Linear and Binary Search</li>
              <li>Insertion, Bubble, Quick, etc. Sorting Algorithms</li>
            </ul>
            <li>Programming Paradigms</li>
            <ul> 
              <li>Object Oriented Programming</li>
              <li>Functional Programming</li>
            </ul>
            <li>Basic arduino commands</li>
            <li>Basic understanding of computer networks (i.e. TCP/IP Protocol)</li>
        </ul>
        </p>
      </div>
      <div>
        <h7>Languages</h7>
        <p id="bottomP">
          <ul>
            <li>Native in oral and written English</li>
            <li>Native in oral Chakma</li>
            <li>Intermediate/working proficiency in oral Bangla</li>
            <li>Intermediate/working proficiency in oral and written French</li>
          </ul>
        </p>
      </div>

    </React.Fragment>
  )
}

function Projects() { 
  return ( 
    <React.Fragment>
      <div>
        <br/>
        <h7>My Work</h7>
        <p>Here is a showcase of all my projects from beginning to end. My interests are primarily in web development, machine learning and hardware electronics and how we can synthesize them together.</p>
        <h7>Awards and Certifications</h7>
        <p>
          <ul>
            <li>2nd place in The 2022 <a id="pLink" href="https://devpost.com/software/propel-r52yae">Queens University Summer Computing Challenge</a></li>
            <li>Silver medalist in the 2023 TDSB skills competition <br/> within the coding subcategory</li>
          </ul>
        </p>
        <h7>Projects</h7>
      </div> 
    </React.Fragment>
  )
}

function Home() {
  return (
    <p>Welcome to Anindit's Personal Portfolio!</p>
  )
}


export default App;
