import './App.css';
import React from 'react'

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
          <li>4 years of experience in Python</li>
          <li>3 years experience in HTML, CSS and JavaScript.</li>
          <li>2 years experience in Java</li>
          <li>Project experience working with SQL</li>
          <li>Currently learning C++/C</li>
        </ul>
      </p>
      </div>
      <div>
        <h2>Technical Experience</h2>
        <p>
          <ul>
            <li>SQL commands and building basic databases (i.e. Account Systems)</li>
            <li>Web Development</li>
            <ul>
              <li>Frontend - ReactJS</li>
              <li>Backend - Django & ExpressJS</li>
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
            <li>Git and Version Control Procedures</li>
            <li>Object Oriented Programming & Markup Languages</li>
            <li>Basic arduino commands</li>
            <li>Low level understanding of computer networks (i.e. TCP/IP Protocol)</li>
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
      <div className="card-container">
        <img src="https://picsum.photos/300/200" alt="Card Image" className="card-img"/>
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">This is a card description. You can add more details about the card </p>
        <a href="cardPage" className="card-btn">Learn More</a>
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
