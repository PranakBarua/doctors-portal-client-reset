import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-5 active">
              <a class="nav-link" href="/home
              ">Home <span class="sr-only">(current)</span></a> 
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link text-white" href="/dashboard/appointment">Dashboard</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link text-white" href="/appointment">Appointment</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link text-white" href="#">Blogs</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link text-white" href="#">Contact Us</a>
            </li>
            
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;