import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import '../../App.css';
import profilepic from '../images/profilepic.png';
import explore5 from '../images/explore5.jpg';
import rating from '../images/stars.png';
import insta from '../images/instagram.png';
import tiktok from '../images/tiktok.png';
import youtube from '../images/youtube.jpg';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
    <div>
      <div style = {{marginLeft: 60 + 'em'}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: ".5em",
                marginRight: "3em"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

<div class="userprofilecolumn1">
<img style = {{marginRight: 75}} src={profilepic} width="70%" id="userpic"></img>
<div class="profiletext">John Doe<br></br>
<img src={rating} width="40%"></img><br></br>
<div class="profiletextsmaller"> Rating: 4.08<p></p> </div>
<img src={insta} width="50px" id="pic"></img>
<img src={youtube} width="65px" id="pic"></img>
<img src={tiktok} width="60px" id="pic"></img> <p></p>
<div class="profiletext">User Media Stats<br></br></div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    dolore magna aliqua. 
</div>
</div>
<div class="userprofilecolumn2">
<div class = "timelineText">Past Collaborations</div>
<div class="contract">
<img src={rating} width="20%" id="miniprofilepic" align="left"></img>
  <div class = "timelineinnerText">
    <img src={explore5} id="usercontent" style={{borderRadius: "16px"}} width="80%" height="75%"></img>
    <p></p>
    <div class="usercontenttext">
    <div class="usercontenttext2">John Doe</div> <br></br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    dolore magna aliqua.
    <p></p>
    </div>
    <p></p>
  </div>
</div>
<div class="contract">
<img src={rating} width="20%" id="miniprofilepic" align="left"></img>
  <div class = "timelineinnerText">
    <img src={explore5} id="usercontent" style={{borderRadius: "16px"}} width="80%" height="75%"></img>
    <p></p>
    <div class="usercontenttext">
    <div class="usercontenttext2">John Doe</div> <br></br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    dolore magna aliqua.
    <p></p>
    </div>
    <p></p>
  </div>
</div>
</div>
</div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);