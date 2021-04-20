import '.././App.css';
//import React from 'react';
import React, {Component} from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import profilepic from './images/profilepic.png';
import explore1 from './images/explore1.jpg';
import explore5 from './images/explore5.jpg';


function Connect() {
    return <div>
    <div class = "connectleft" style = {{marginRight: 43 + 'em'}}>Timeline</div>
    <div class = "connectright">Connections</div>
    
    <div class = "timeline">
      <img src={profilepic} width="55px" id="miniprofilepic" align="left"></img>
      <div class = "timelineinnerText">
        John Doe <p></p>
        <img src={explore5} style={{borderRadius: "16px"}} width="330px" height="200px"></img><p></p>
      </div>
      <img src={profilepic} width="55px" id="miniprofilepic" align="left"></img>
      <div class = "timelineinnerText"> John Doe <br/> </div>
        <div class="timelineinnerText2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat
        </div>
      <img src={profilepic} width="55px" id="miniprofilepic" align="left"></img>
      <div class = "timelineinnerText">
        John Doe <p></p>
        <img src={explore1} style={{borderRadius: "16px"}} width="330px" height="300px"></img><p></p>
      </div>

    </div>
    <div class = "pendingContracts">
    <div class = "timelineText">Current Active Contracts</div><br></br>
      <div class="contract">
        Contract
        <div class ="contractinner">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br></br><p></p>
        Amount: $xxx
        </div>
        <button class="button button3">Finish</button>
      </div>
      <div class="contract">
        Contract
        <div class ="contractinner">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br></br><p></p>
        Amount: $xxx
        </div>
        <button class="button button3">Finish</button>
      </div>
      <div class="contract">
        Contract
        <div class ="contractinner">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <br></br><p></p>
        Amount: $xxx
        </div>
        <button class="button button3">Finish</button>
      </div>
    </div>
    <div class="connectioncolumn">
    <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
      <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
      <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
      <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
      <NavLink exact activeClassName="current" to='/contract'>
    <button class="button button2">
       <img src={profilepic} width="55px" id="miniprofilepic"></img>John Doe
      </button></NavLink>
    </div>

  </div>
}

export default Connect;