import React, { useState } from 'react';
import './style.css'

const Navbar = () => {

  return (
    <>
        <div class="menu-bar">
        <h1 class="logo">Light<span>Code.</span></h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="#">Jizzakh PS</a></li>
                        <li><a href="#">President's Welcome Message</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Vision and Mission</a></li>
                        <li><a href="#">Academic Calendar</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Pages <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-menu">
                    <ul>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li>
                        <a href="#">Team <i class="fas fa-caret-right"></i></a>
                        
                        <div class="dropdown-menu-1">
                            <ul>
                                <li><a href="#">Team-1</a></li>
                                <li><a href="#">Team-2</a></li>
                                <li><a href="#">Team-3</a></li>
                                <li><a href="#">Team-4</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Blog</a>
            </li>
            <li><a href="#">Contact us</a></li>
        </ul>
        </div>
        <div class="hero">
        &nbsp;
        </div>
    </>
  );
};

export default Navbar;