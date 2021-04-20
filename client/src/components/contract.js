import '../App.css';
//import React from 'react';
import React, {Component} from 'react';

function Contract() {
    return <div class = "contract">
    <div class = "contractTitle">
      Creating Contract with: John Doe
    </div>
    <div class = "contractsubTitle">
      Your information will be filled using your profile. Please make sure it is correct.
    </div>
    <div class="contractText">
      Type of Content:
    <input class="input input2" type="text" placeholder="e.g Instagram Post, Tiktok Video, etc.."></input> <br></br>
      Amount for Content:
    <input class="input input2" type="text" placeholder="if none enter 0.00"></input> <br></br>
      Amount of time given to create content:
    <input class="input input2" type="text" placeholder="please enter in number of days"></input> <br></br>
     If a video, enter minimum amount of time:
    <input class="input input2" type="text" placeholder="if it's not a video, leave this blank"></input> <br></br>
    Enter any other specifcation of the content you want:
    <input class="input input2" type="text" placeholder="you can leave this blank"></input> <br></br>
    </div>
    <button class="button button3">Send</button>
  </div>
}

export default Contract;