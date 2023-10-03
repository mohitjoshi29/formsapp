import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

export default function Learnroute() {
  return (
    <div>
        <ul>
            <Link to="/"><li>home</li></Link>
            <Link to="/about"><li>about</li></Link>
            <Link to="/contact"><li>contact</li></Link>
       </ul>
    </div>
  )
}
