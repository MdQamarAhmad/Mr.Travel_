import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import unknown from './DP/unknown.png'; // Adjust the path as needed
export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      isfacebook: false,
      isGoogle: false,
      isNavigate: false
    }
  }
  facebook1 = () => {
    this.setState({
      isfacebook: true
    })
  }
  facebook2 = () => {
    this.setState({
      isfacebook: false
    })
  }
  google1 = () => {
    this.setState({
      isGoogle: true
    })
  }
  google2 = () => {
    this.setState({
      isGoogle: false
    })
  }
  cong = () => {
    let colorRed = document.getElementById('colorRed');
    let disappear = document.getElementById('disappear');
    let colorRed1 = document.getElementById('colorRed1');
    let inputVal = document.getElementById('email').value;
    let inputVall = inputVal.length;
    if (inputVall <= 0) {
      colorRed.style.color = 'red';
      colorRed.style.fontSize = '15px';
      disappear.style.display = 'block';
      colorRed1.style.display = 'block';
    }
    else {
      colorRed.style.color = 'black';
      disappear.style.display = 'none';
      this.setState({ isNavigate: true });
    }
  }
  render() {
    if (this.state.isNavigate) {
      return <Navigate to='/Login1' />;
    }
    const facebook = {
      width: '60%',
      height: '4.5vh',
      backgroundColor: this.state.isfacebook ? 'blue' : 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '7px',
      border: '1px solid blue',
      color: this.state.isfacebook ? 'white' : 'blue'
    }
    const google = {
      width: '60%',
      height: '4.5vh',
      display: "flex",
      alignItems: 'center',
      padding: '7px',
      color: this.state.isGoogle ? 'white' : 'blue',
      backgroundColor: this.state.isGoogle ? 'blue' : 'white',
      border: '1px solid blue'
    }

    return (
      <div className='mother'>
        <header style={{ backgroundColor: 'white', height: '40px', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}> <h4 className='logo1' >Mr.Travel</h4></Link>
        </header>
        <br />
        <h3 id='welcome'>Welcome to Mr.Travel !</h3><br />
        <p>Please Login/Register using your Email/Mobile to continue</p><br />
        <div style={{ width: '50vw', height: '70vh', backgroundColor: 'red', display: 'flex' }}>
          <div className="login1" style={{ width: '50%', height: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '35px' }}>
            <img src={unknown} alt="error" style={{ width: '120px', height: '120px', marginTop: '10px' }} />
            <br />
            <h3 id='colorRed' style={{ display: 'flex' }}><span id="disappear" style={{ display: 'none', color: 'red', marginRight: '7px' }}>INVALID</span> EMAIL ID/MOBILE NUMBER</h3>
            <input id='email' style={{ marginTop: '10px', width: '100%', height: '4.5vh', boxSizing: 'border-box', outline: 'none', borderRadius: '4px', border: '2px solid #aaa', padding: '6px' }} type="text" name="Email" placeholder='Email ID/Mobile Number' />
            <p id='colorRed1' style={{ fontSize: "12px", marginTop: '8px', color: 'red', display: 'none' }}>Please enter your Email Id/ Mobile Number</p>
            <br />
            <div onClick={this.cong} style={{ width: '100%', height: '4.5vh', backgroundColor: 'red', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>Continue</div>
            <p style={{ lineHeight: '20px', marginTop: '10px', fontSize: '12px' }}>By proceeding, you agree with our <span style={{ color: 'blue' }}>Term of Service, Privacy Policy</span>&<span style={{ color: 'blue' }}>Master User Agreement.</span></p>
            <br /><br />
            <div onMouseEnter={this.facebook1} onMouseLeave={this.facebook2} style={facebook}><i style={{ fontSize: '25px', marginRight: '7px' }} class="fa-brands fa-square-facebook"></i> <h4 style={{ fontSize: '12px' }}>Sign in with Facebook</h4></div>
            <br />
            <div onMouseEnter={this.google1} onMouseLeave={this.google2} style={google}><i style={{ fontSize: '20px', marginRight: '7px' }} class="fa-brands fa-google"></i><h4 style={{ fontSize: '12px' }}>Sign in with Google</h4></div>
          </div>
          <div className="login2" style={{ width: '60%', height: '100%', backgroundColor: 'green' }}>
            <div style={{ height: '100%', width: '100%', backgroundColor: '#5f5f5f', padding: '18px' }}>
              <div style={{ width: '93.4%', padding: '10px', backgroundColor: '#4f4f4f' }}>Logged in/Registered users get MORE!</div><br />
              <p style={{ fontSize: '15px' }}><span>View/Cancel/Reschedule</span>booking</p><br />
              <p style={{ fontSize: '15px' }}>Book faster with <span>Pre-Filled Forms,</span>saved<span>Travellers & Saved Cards</span></p><br />
              <p style={{ fontSize: '15px' }}>Use Mr.Travel aCash to get discount</p><br />
              <p style={{ fontSize: '15px' }}>Transfer eCash to your Family/Friends</p><br />
              <p style={{ fontSize: '15px' }}>Convert eCash to Shopping Coupons from Amazon, BookMyShow,etc</p><br />
              <p style={{ fontSize: '15px' }}>Do you have GST number? Additional Benefits of Free Meals, Low Cancellation Fee, Free Rescheduling for SME business customers</p><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}