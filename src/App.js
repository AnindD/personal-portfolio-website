import './App.css';
//import React, { useState } from 'react'

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
    <p>Here are a collection of my skills</p>
  )
}

function Projects() { 
  return ( 
    <div>
      <h2>My Work</h2>
      <p>Here is a showcase of all my projects from beginning to end. My interests are primarily in web development, machine learning and hardware electronics and how we can synthesize them together.</p>
      <h2>Awards and Certifications</h2>
      <p>
        <ul>
          <li>2nd place in The 2022 <a href="https://devpost.com/software/propel-r52yae">Queens University Summer Computing Challenge</a></li>
          <li>Silver medalist in the 2023 TDSB skills competition <br/> within the coding subcategory</li>
        </ul>
      </p>
      <h2>Projects</h2> 
    </div>
  )
}

function Home() {
  return (
    <p>Welcome to Anindit's Personal Portfolio!</p>
  )
}


export default App;
