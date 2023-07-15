import './App.css';
import React from 'react'
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitSquare, FaBuffer, FaHammer, FaGrinAlt, FaFileAlt, FaGithub, FaLink, FaTrophy} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SiDevpost } from "react-icons/si";



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
        <br/>
        <h2>My Work</h2>
        <p>Here is a showcase of all my projects from beginning to end. I have many interests within technology including but not limited to: web development, machine learning, computer vision, databases, and digital electronics.</p>
        <h2>Awards and Certifications</h2>
        <p>
          <ul>
            <li>2nd place in The 2022 <a id="pLink" href="https://devpost.com/software/propel-r52yae">Queens University Summer Computing Challenge</a></li>
            <li>Silver medalist in the 2023 TDSB skills competition <br/> within the coding subcategory</li>
          </ul>
        </p>
        <h2>Projects</h2>
      </div> 
      <br/>
      <div style={{display: 'flex', justifyContent: 'center', gap: '3rem'}}>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://github.com/AnindD/URL-Shortener/blob/master/FrontpageURLShortener.png?raw=true" className="img-fluid"/>
          <Card.Body>  
            <Card.Title id="ProjectTitle">URL Shortener <FaLink/></Card.Title>
            <Card.Text id="ProjectDescription">URL Shortener is my first web development project using Django. It is a website which allows users to enter URLs and shorten them. The website will save the original link into a database and create a shortened randomly generated custom link which will redirect you to the website you would like.</Card.Text>
              <Button id="ProjectButton" href="https://github.com/AnindD/URL-Shortener" variant="outline-dark">View On Github <FaGithub/></Button>
          </Card.Body>
        </Card>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/186/089/datas/gallery.jpg" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="ProjectTitle">Propel</Card.Title>
            <Card.Text id="ProjectDescription"><b>2nd Place In QSCC Hackathon 2022 <FaTrophy/></b><br/><br/>Propel is an educational gaming application designed to help children and people who suffer from the condition of dyscalculia. The application was mainly constructed using Pygame, a Python library used for game development. Things such as music, text, buttons, games, timers, etc. were made using Pygame. For the login/create account system we used MySQL, a data management system to hold and save data within the game.</Card.Text>
            <Button id="ProjectButton" href="https://github.com/AnindD/Queens-Programming-Challenge" variant="outline-dark">View on Github <FaGithub/></Button>
            <Button id="ProjectButton" href="https://devpost.com/software/propel-r52yae" variant="outline-dark">View on Devpost <SiDevpost/></Button>
          </Card.Body>
        </Card>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://www.deque.com/wp-content/uploads/2019/10/cognitive.png" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="ProjectTitle">Cognition</Card.Title>
            <Card.Text id="ProjectDescription">Cognition is a discord bot geared towards helping students with their academics and other tasks related to school.</Card.Text>
            <Button id="ProjectButton" href="https://github.com/AnindD/Mike-Anindit-s-Discord-Bot-" variant="outline-dark">View on Github <FaGithub/></Button>
          </Card.Body>
        </Card>
 
      </div>
      <p id="bottomP"></p>
    </React.Fragment>
  )
}

function Home() {
  return (
    <p>Welcome to Anindit's Personal Portfolio!</p>
  )
}


export default App;
