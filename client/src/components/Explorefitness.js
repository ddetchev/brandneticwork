import React, {Component} from "react";

import '.././App.css';
//import React from 'react';


import explore1 from './images/explore1.jpg';
import explore2 from './images/explore2.jpg';
import explore3 from './images/explore3.jpg';
import explore4 from './images/explore4.jpg';
import explore5 from './images/explore5.jpg';
import explore6 from './images/explore6.jpg';
import explore7 from './images/explore7.jpg';
import explore8 from './images/explore8.jpg';
import axios from 'axios';
import {NavLink} from "react-router-dom";



class Explorefitness extends Component {
    
    state = {
        profilePicture: '',
        tags: '',
        posts: []
    };

    componentDidMount = () => {
        this.getUser();
    };

    getUser = () => {
        fetch('/api/users/showfitness')
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            this.setState({
                posts: response
            })
        });
        
    }

    displayUsers = (posts) => {
        if (posts) {
            if (!posts.length) {
                // alert('fail');
                return null;
            }

            return posts.map((post) => (
                <div id = "list" class = "section">
             <div class="item3"><NavLink exact activeClassName="current" to='/contract'>
             <img src={post.profilePicture} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
             <button variant = "primary" onClick={() => {navigator.clipboard.writeText(post.publicKey)}}>Copy key to clipboard</button>
             </div>
             ));
       } 
    };
    

    handleReality() {
        window.location.href='/Explorereality';
    }

    handleReality2() {
        window.location.href = '/Exploreyoutube'
    }

    handleReality3() {
        window.location.href = '/Exploreblog'
    }

    handleReality4() {
        window.location.href='/Exploremicroinfluencer';
    }

    handleReality5() {
        window.location.href = '/Explorebeauty'
    }

    handleReality6() {
        window.location.href = '/Explorelifestyle'
    }

    handleReality7() {
        window.location.href='/Explorefashion';
    }

    handleReality8() {
        window.location.href = '/Exploresmallbusiness'
    }

    handleReality9() {
        window.location.href = '/Explorefood'
    }

    handleReality10() {
        window.location.href='/Exploresustainablebusiness';
    }

    handleReality11() {
        window.location.href = '/Exploretravel'
    }

    handleReality12() {
        window.location.href = '/Explorefitness'
    }

    

    render() {

    return (<div class="container">
    <input class="input input1" type="text" placeholder="Search.."></input>
    <p></p>
    <button onClick = {this.handleReality} class="button button1">Reality TV</button>
    <button onClick = {this.handleReality2} class="button button1">Youtubers</button>
    <button onClick = {this.handleReality3} class="button button1">Bloggers</button>
    <button onClick = {this.handleReality4} class="button button1">Microinfluencers</button>
    <button onClick = {this.handleReality5} class="button button1">Beauty</button>
    <button onClick = {this.handleReality6} class="button button1">Lifestyle</button>
    <button onClick = {this.handleReality7} class="button button1">Fashion</button>
    <button onClick = {this.handleReality8} class="button button1">Small Businesses</button>
    <button onClick = {this.handleReality9} class="button button1">Food</button>
    <button onClick = {this.handleReality10} class="button button1">Sustainable Businesses</button>
    <button onClick = {this.handleReality11} class="button button1">Travel</button>
    <button style = {{background: '#2ab7a9'}} onClick = {this.handleReality12} class="button button1">Fitness</button>
    <p></p>

    {this.displayUsers(this.state.posts)}
    
        </div>
    );
    }
}


export default Explorefitness;    