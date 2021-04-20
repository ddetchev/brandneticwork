import '.././App.css';
//import React from 'react';
import React, {Component} from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import explore1 from './images/explore1.jpg';
import explore2 from './images/explore2.jpg';
import explore3 from './images/explore3.jpg';
import explore4 from './images/explore4.jpg';
import explore5 from './images/explore5.jpg';
import explore6 from './images/explore6.jpg';
import explore7 from './images/explore7.jpg';
import explore8 from './images/explore8.jpg';

function handleReality() {
   window.location.href='/Explorereality';
}

function handleReality2() {
   window.location.href = '/Exploreyoutube'
}

function handleReality3() {
   window.location.href = '/Exploreblog'
}

function handleReality4() {
   window.location.href='/Exploremicroinfluencer';
}

function handleReality5() {
   window.location.href = '/Explorebeauty'
}

function handleReality6() {
   window.location.href = '/Explorelifestyle'
}

function handleReality7() {
   window.location.href='/Explorefashion';
}

function handleReality8() {
   window.location.href = '/Exploresmallbusiness'
}

function handleReality9() {
   window.location.href = '/Explorefood'
}

function handleReality10() {
   window.location.href='/Exploresustainablebusiness';
}

function handleReality11() {
   window.location.href = '/Exploretravel'
}

function handleReality12() {
   window.location.href = '/Explorefitness'
}

function Explore() {

    return <div class="container">
    <input class="input input1" type="text" placeholder="Search.."></input>
    <p></p>
    <button onClick = {handleReality} class="button button1">Reality TV</button>
    <button onClick = {handleReality2} class="button button1">Youtubers</button>
    <button onClick = {handleReality3} class="button button1">Bloggers</button>
    <button onClick = {handleReality4} class="button button1">Microinfluencers</button>
    <button onClick = {handleReality5} class="button button1">Beauty</button>
    <button onClick = {handleReality6} class="button button1">Lifestyle</button>
    <button onClick = {handleReality7} class="button button1">Fashion</button>
    <button onClick = {handleReality8} class="button button1">Small Businesses</button>
    <button onClick = {handleReality9} class="button button1">Food</button>
    <button onClick = {handleReality10} class="button button1">Sustainable Businesses</button>
    <button onClick = {handleReality11} class="button button1">Travel</button>
    <button onClick = {handleReality12} class="button button1">Fitness</button>
    <p></p>
	<div id="list" class="section">
    <div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item2"> <NavLink exact activeClassName="current" to='/contract'>
      <img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore5} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore6} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore7} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore8} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore5} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore6} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"> <NavLink exact activeClassName="current" to='/contract'>
      <img src={explore7} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item1"> <NavLink exact activeClassName="current" to='/contract'>
      <img src={explore8} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
	</div>
</div>
    
}

export default Explore;