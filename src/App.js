import './App.css';
import React from 'react'
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitSquare} from "react-icons/fa";

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
        <li><a href="/" className="site-title">About Me</a></li>
      </ul>
      <ul>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
        <a href="/skills">Skills</a>
        </li>
      </ul>
    </nav>
  )
}

function Skills() {
  return ( 
    <React.Fragment>
      <div>
      <h2>Skills</h2>
      <p>Here is a showcase of all my technical skills I have built through the development of my projects.</p>
      </div>
      <h2>Languages</h2>
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
        <h2>Technical Experience</h2>
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
        <h2>Languages</h2>
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
        <h2>My Work</h2>
        <p>Here is a showcase of all my projects from beginning to end. My interests are primarily in web development, machine learning and hardware electronics and how we can synthesize them together.</p>
        <h2>Awards and Certifications</h2>
        <p>
          <ul>
            <li>2nd place in The 2022 <a id="pLink" href="https://devpost.com/software/propel-r52yae">Queens University Summer Computing Challenge</a></li>
            <li>Silver medalist in the 2023 TDSB skills competition <br/> within the coding subcategory</li>
          </ul>
        </p>
        <h2>Projects</h2>
      </div> 
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Card title</h2>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
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
