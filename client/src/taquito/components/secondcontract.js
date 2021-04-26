import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateContracts } from "../../actions/authActions";
import classnames from "classnames";
// Configuring the database
class SecondContract extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      desc: "",
      recipient: "",
      amount: ""
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newContract = {
      email: this.state.email,
      desc: this.state.desc,
      recipient: this.state.recipient,
      amount: this.state.amount
    };
this.props.updateContracts(newContract, this.props.history); 

  };
render() {
return (
      <div className="container">
            <form noValidate onSubmit={this.onSubmit}>
              <div style = {{marginTop: 10 + 'em'}} className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.desc}
                  id="desc"
                  type="text"
                />
                <label htmlFor="desc">Contract Description</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.recipient}
                  id="recipient"
                  type="text"
                />
                <label htmlFor="recipient">Recipient</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.amount}
                  id="amount"
                  type="text"
                />
                <label htmlFor="amount">Amount</label>
              </div>
  

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  
                >
                  Complete Contract
                </button>
              </div>
            </form>
          </div>
    );
  }
}

SecondContract.propTypes = {
  updateContracts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { updateContracts }
)(withRouter(SecondContract));