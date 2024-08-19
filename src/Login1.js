import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
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
        <div style={{ width: '50vw', height: 'auto', display: 'flex', justifyContent: 'center' }}>
          <form action="#" method='POST'></form>
          <div className="login1" style={{ boxShadow: '5px 5px 15px 5px rgba(50, 50, 50, .5)', width: '44%', height: '90%', backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '4%', paddingBottom: '35px' }}>
            <div style={{ height: '5vh', width: '100%', display: 'flex', alignItems: 'center', fontSize: '30px' }}><i class="fa-solid fa-arrow-left"></i></div>
            <div style={{ height: '5vh', width: '100%', display: 'flex', alignItems: 'center', fontSize: '20px' }}>EMAIL ID</div>
            <div style={{ height: '5vh', width: '100%', backgroundColor: 'orange', display: 'flex', alignItems: 'center', fontSize: '20px' }}><input className='basic' style={{ padding: '7px', width: '100%' }} type='text' placeholder='email' /></div>
            <div style={{ height: '5vh', width: '100%', display: 'flex', alignItems: 'center', fontSize: '20px' }}>MOBILE NUMBER</div>
            <div style={{ height: '5vh', width: '100%', backgroundColor: 'orange', display: 'flex', alignItems: 'center', fontSize: '20px' }}><input className='basic' style={{ padding: '7px', width: '100%' }} type='number' placeholder='Enter Mobile Number' /></div>
            <div style={{ height: '5vh', width: '100%', display: 'flex', alignItems: 'center', fontSize: '20px' }}>CREATE PASSWORD</div>
            <div style={{ height: '5vh', width: '100%', backgroundColor: 'pink', display: 'flex', alignItems: 'center', fontSize: '20px' }}><input className='basic' style={{ padding: '7px', width: '100%' }} type='number' placeholder='Enter Your Password' /></div>
            <div style={{ height: '5vh', width: '100%', display: 'flex', alignItems: 'center', fontSize: '20px' }}>FULL NAME</div>
            <div style={{ height: '5vh', width: '100%', display: 'flex', alignItems: 'center', fontSize: '20px', gap: '4px' }}>
              <select className='basic1'>
                <option value="">Title</option>
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Dr">Dr.</option>
              </select>
              {/* <div className='basic' style={{height:'5vh',width:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'13px'}}>Title <span><i class="fa-solid fa-caret-down"></i></span></div> */}
              <input className='basic' style={{ padding: '7px', width: '30%' }} type='text' placeholder='First Name' />
              <input className='basic' style={{ padding: '7px', width: '60%' }} type="text" placeholder='Last Name' /></div>
            <br /><div style={{ display: 'flex', gap: '8px' }}>
              <input type="checkbox" />
              <p>I would like to be kept informed of Special Promotions.</p></div>
            <br /><div style={{ display: 'flex', gap: '8px' }}>
              <input type="checkbox" />
              <p>I would like to get What'sApp notifications.</p></div><br />
            <div onClick={this.cong} style={{ width: '100%', height: '4.5vh', backgroundColor: 'red', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>Create Account</div>
            <p style={{ lineHeight: '20px', marginTop: '10px', fontSize: '12px' }}>By proceeding, you agree with our <span style={{ color: 'blue' }}>Term of Service, Privacy Policy</span>&<span style={{ color: 'blue' }}>Master User Agreement.</span></p>
          </div>
        </div>
      </div>

    );
  }
}