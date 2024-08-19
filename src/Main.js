import React, { Component } from 'react';
import './App.css';
import india from './icon/india.png';
import US from './icon/united-states.png';
import russia from './icon/russia.png';
import spain from './icon/spain.png';
import indiaImg from './img/Mumbai-India-at-night.jpg';
import usa from './img/usa.jpg';
import russiaImg from './img/sanpitersburg.jpg';
import spainImg from './img/barcelona.jpg';
import lotus from './img/lotus_temple.jpg';
import burjkhalifa from './img/burjkhlifa.jpg';
import mountain from './img/mountain.jpg';
import piramids from './img/piramids.jpg';
import photo1 from './DP/photo1.jpg';
import photo2 from './DP/photo2.jpg';
import photo3 from './DP/photo3.jpg';
import photo4 from './DP/photo4.jpg';
import photo5 from './DP/photo5.jpg';
import photo6 from './DP/photo6.jpg';
import photo7 from './DP/photo7.jpg';
import free from './img/hidden-game.jpg';
import family from './img/family.jpg';
import foodArticle from './img/food-article.jpg';
import bugetTravel from './img/budget-travel.jpg';
import tips from './img/tips.jpg';
import plane1 from './img/Main_plan.png';
import { Link } from 'react-router-dom';
import user from './DP/user.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      isRotate: false,
      isRotate1: false,
      isRotate2: false,
      isPressed: false,
      isPressed1: false,
      isPressed2: false,
      isPressed3: false,
      isPressed4: false,
      isPressed5: false,
      isPressed6: false,
      isPressed7: false,
      isPressed8: false,
      isToDo: false,
      val: false
    }
  }
  toDoFun = () => {
    if (!this.state.val) {
      this.setState({
        isToDo: true,
        val: true
      })
    }
    else {
      this.setState({
        isToDo: false,
        val: false
      })
    }
  }
  onRotate = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        isRotate: true
      })
    }
    else
      this.setState({
        isRotate: false
      })
  }
  onRotate1 = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        isRotate1: true
      })
    }
    else
      this.setState({
        isRotate1: false
      })
  }
  onRotate2 = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        isRotate2: true
      })
    }
    else
      this.setState({
        isRotate2: false
      })
  }
  render() {
    const item1 = {
      width: '50vw',
      height: 'auto',
      padding: '30px',
      paddingTop: '60px',
      color: 'white'
    }
    const buttonF11 = {
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'black',
      padding: '10px 16px 10px 16px',
      border: this.state.isPressed ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px',
    }
    const buttonF1 = {
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'black',
      padding: '10px 16px 10px 16px',
      border: this.state.isPressed1 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const buttonF2 = {
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'black',
      padding: '8px 16px 8px 16px',
      border: this.state.isPressed2 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const buttonF3 = {
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'black',
      padding: '0px 14px 0px 14px',
      fontSize: '10px',
      border: this.state.isPressed3 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const buttonF4 = {
      cursor: 'pointer',
      color: 'white',
      padding: '0px 14px 0px 14px',
      fontSize: '10px',
      backgroundColor: 'black',
      border: this.state.isPressed4 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const buttonF5 = {
      cursor: 'pointer',
      color: 'white',
      padding: '0px 14px 0px 14px',
      fontSize: '10px',
      backgroundColor: 'black',
      border: this.state.isPressed5 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const buttonF6 = {
      cursor: 'pointer',
      color: 'white',
      padding: '0px 14px 0px 14px',
      fontSize: '10px',
      backgroundColor: 'black',
      border: this.state.isPressed6 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const buttonF7 = {
      cursor: 'pointer',
      color: 'white',
      padding: '4px',
      fontSize: '10px',
      backgroundColor: 'black',
      border: this.state.isPressed7 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '100%'
    }
    const buttonF8 = {
      cursor: 'pointer',
      color: 'white',
      padding: '5px 18px 5px 18px',
      fontSize: '20px',
      backgroundColor: 'black',
      border: this.state.isPressed8 ? '1px solid #2f2f2f' : 'none',
      borderRadius: '38px'
    }
    const toDo = {
      display: this.state.isToDo ? 'block' : 'none',
      zIndex: '24',
      backgroundColor: 'white',
      position: 'absolute',
      borderRadius: '18px',
      left: '45%'
    }
    const appear = {
      display: this.state.isHovered ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '100px',
      height: '95px',
      fontSize: '15px',
      position: 'absolute',
      right: '15px',
      top: '15px',
      zIndex: '23'
    }
    const Rotate = {
      transform: this.state.isRotate ? 'rotate(180deg)' : 'rotate(0deg)'
    }
    const Rotate1 = {
      transform: this.state.isRotate1 ? 'rotate(180deg)' : 'rotate(0deg)'
    }
    const Rotate2 = {
      transform: this.state.isRotate2 ? 'rotate(180deg)' : 'rotate(0deg)'
    }
    const userr = {
      width: '30px', height: '30px',
      display: this.state.isUser ? 'block' : 'none'
    }
    return (
      <>
        <div className="container">
          <div style={toDo} >
            <ul style={{ listStyle: 'none', padding: '12px', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
              <li><a className='liOne' href="#">Discover</a></li><br />
              <li><a className='liTwo' href="#">Community</a></li><br />
              <li><a className='liThree' href="#">Special Deals</a></li><br />
              <li><a className='liFour' href="#">About Us</a></li><br />
              <li> < button type="button"
                onMouseDown={() => {
                  this.setState({
                    isPressed: true
                  })
                }}
                onMouseUp={() => {
                  this.setState({
                    isPressed: false
                  })
                }}
                style={buttonF11}>Register</button>
              </li>
            </ul></div>
          <nav>
            <h4 className='logo'>Mr.travel</h4>
            <div className='ulButOne'>
              <ul >
                <li><a className='liOne' href="#">Discover</a> </li>
                <li><a className='liTwo' href="#">Community</a> </li>
                <li><a className='liThree' href="#">Special Deals</a> </li>
                <li><a className='liFour' href="#">About Us</a> </li>
              </ul>
              <div style={{ width: '60px', backgroundColor: 'whitesmoke', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                <img onMouseEnter={() => {
                  this.setState({
                    isHovered: true
                  })
                }}
                  style={{ width: '30px', height: '30px' }} src={user} alt='error' />
              </div> </div>
            <svg onClick={this.toDoFun} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="try bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </nav>
          <div style={appear} onMouseLeave={() => {
            this.setState({
              isHovered: false
            })
          }}>
            <Link to='/Login' style={{ color: 'black' }}><div style={{ width: '86%', height: 'auto', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#6f6f6f', padding: '7px', borderRadius: '9px' }}>Login</div></Link>
            <Link to='/Login' style={{ color: 'black' }}><div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'white', padding: '7px', borderRadius: '9px' }}>Sign Up</div>  </Link>
          </div>
          <div className='imgFit' >
            <div className='item1' style={item1}>
              <h3 className='item11' style={{ lineHeight: '56px' }}>The right destination for you and your family</h3><br /><br />
              <p style={{ fontSize: '15px' }}>Creative taglines have the capability of capturing the attention of potential custumer.</p>
              <br />
              <div style={{ height: '5vh', display: 'inline-block' }}>
                <button type="button"
                  onMouseDown={() => {
                    this.setState({
                      isPressed1: true
                    })
                  }}
                  onMouseUp={() => {
                    this.setState({
                      isPressed1: false
                    })
                  }}
                  style={buttonF1}>Start your Search</button>
              </div>
            </div>
            <div className='item2'>
              <div className="item21"><h4 >Location <span><i style={Rotate} className="fa-solid fa-angle-up"></i></span></h4>
                <input onChange={this.onRotate} type="text" placeholder='Enter your destination' className='inOne' />
              </div>
              <div className="item21"><h4 >Date <span><i style={Rotate1} className="fa-solid fa-angle-up"></i></span></h4>
                <input onChange={this.onRotate1} className='inOne' type="date" /></div>
              <div className="item21"><h4 >People <span><i style={Rotate2} className="fa-solid fa-angle-up"></i></span></h4>
                <input onChange={this.onRotate2} className='inOne' type="number" name="people" placeholder='Enter the number of people' /></div>
              <div style={{ height: '5vh', width: '9vw', grid: 'span 2' }}><button type="button"
                onMouseDown={() => {
                  this.setState({
                    isPressed2: true
                  })
                }}
                onMouseUp={() => {
                  this.setState({
                    isPressed2: false
                  })
                }}
                style={buttonF2}>Explore Now</button></div>
            </div>
            <div style={{ position: 'relative', zIndex: '22', top: '15px', width: '92%', margin: '0 auto', textAlign: 'center' }}><p>Countries to travel</p><div style={{ width: '200px', margin: '0 auto' }}><hr></hr></div></div>
            <div className='one'>
            </div>

            <div className='itemHead' >
              <div className="itemOne"><div><h4 className='item21'>INDIA <img src={india} alt="Error" style={{ width: '20px', height: 'auto', position: 'relative', top: '5px' }} /></h4></div>
                <img src={indiaImg} alt="Error" style={{ width: '234.1px', height: '124px', borderRadius: '2px' }} />
                <div className='itemOneOne' style={{ display: 'flex', justifyContent: 'space-between' }}><button type="button"

                  onMouseDown={() => {
                    this.setState({
                      isPressed3: true
                    })
                  }}
                  onMouseUp={() => {
                    this.setState({
                      isPressed3: false
                    })
                  }}
                  style={buttonF3}>Explore Now</button> <div><p className='oneP'>Mumbai Central</p><h4 style={{ fontSize: '15px' }}>$460</h4></div></div></div>
              <div className="itemOne"><div><h4 className='item21'>UNITED STATE<img src={US} alt="Error" style={{ width: '20px', height: 'auto', position: 'relative', top: '5px', marginLeft: '5px' }} /></h4></div>
                <img src={usa} alt="Error" style={{ width: '234.1px', height: '124px', borderRadius: '2px' }} />
                <div className='itemOneOne' style={{ display: 'flex', justifyContent: 'space-between' }}><button type="button"
                  onMouseDown={() => {
                    this.setState({
                      isPressed4: true
                    })
                  }}
                  onMouseUp={() => {
                    this.setState({
                      isPressed4: false
                    })
                  }}
                  style={buttonF4}>Explore Now</button> <div><p className='oneP'>Newyork </p><h4 style={{ fontSize: '15px' }}>$870</h4></div></div></div>
              <div className="itemOne"><div><h4 className='item21'>RUSSIA<img src={russia} alt="Error" style={{ width: '20px', height: 'auto', position: 'relative', top: '5px', marginLeft: '5px' }} /></h4></div>
                <img src={russiaImg} alt="Error" style={{ width: '234.1px', height: '124px', borderRadius: '2px' }} />
                <div className='itemOneOne' style={{ display: 'flex', justifyContent: 'space-between' }}><button type="button"
                  onMouseDown={() => {
                    this.setState({
                      isPressed5: true
                    })
                  }}
                  onMouseUp={() => {
                    this.setState({
                      isPressed5: false
                    })
                  }}
                  style={buttonF5}>Explore Now</button> <div><p className='oneP' >Sanpitersburg </p><h4 style={{ fontSize: '15px' }}>$660</h4></div></div></div>
              <div className="itemOne"><div><h4 className='item21'>SPAIN<img src={spain} alt="Error" style={{ width: '20px', height: 'auto', position: 'relative', top: '5px', marginLeft: '5px' }} /></h4></div>
                <img src={spainImg} alt="Error" style={{ width: '234.1px', height: '124px', borderRadius: '2px' }} />
                <div className='itemOneOne' style={{ display: 'flex', justifyContent: 'space-between' }}><button type="button"
                  onMouseDown={() => {
                    this.setState({
                      isPressed6: true
                    })
                  }}
                  onMouseUp={() => {
                    this.setState({
                      isPressed6: false
                    })
                  }}
                  style={buttonF6}>Explore Now</button> <div><p className='oneP'>Barcelona</p><h4 style={{ fontSize: '15px' }}>$730</h4></div></div></div>
            </div>
            <div className="userVoice" >
              <div style={{ lineHeight: '60px', textAlign: 'center', color: 'white' }}><h1>Adventurer's Voices</h1>
                <p>Real Stories from Our Adventureous Community</p>
              </div>
              <div className="userText">
                <div className='userOne'>
                  <div className='one1' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='div1'><img style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover' }} src={photo1} alt="Error" /></div>
                    <div className='div2' style={{ marginLeft: '15px' }}>
                      <h4>Marvin Davin</h4>
                      <p style={{ fontWeight: '350' }}>Traveler</p></div></div>
                  <div className='one2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae rerum, ducimus perspiciatis necessitatibus impedit consectetur ut maxime aliquid ?</div>
                </div>
                <div className='userOne'>
                  <div className='one1' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='div1'><img style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover' }} src={photo2} alt="Error" /></div>
                    <div className='div2' style={{ marginLeft: '15px' }}>
                      <h4>Marvin Davin</h4>
                      <p style={{ fontWeight: '350' }}>Traveler</p></div></div>
                  <div className='one2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae rerum, ducimus perspiciatis necessitatibus impedit consectetur ut maxime aliquid ?</div>
                </div>
                <div className='userOne'>
                  <div className='one1' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='div1'><img style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover' }} src={photo3} alt="Error" /></div>
                    <div className='div2' style={{ marginLeft: '15px' }}>
                      <h4>Marvin Davin</h4>
                      <p style={{ fontWeight: '350' }}>Traveler</p></div></div>
                  <div className='one2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae rerum, ducimus perspiciatis necessitatibus impedit consectetur ut maxime aliquid ?</div>
                </div>
                <div className='userOne'>
                  <div className='one1' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='div1'><img style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover' }} src={photo4} alt="Error" /></div>
                    <div className='div2' style={{ marginLeft: '15px' }}>
                      <h4>Marvin Davin</h4>
                      <p style={{ fontWeight: '350' }}>Traveler</p></div></div>
                  <div className='one2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae rerum, ducimus perspiciatis necessitatibus impedit consectetur ut maxime aliquid ?</div>
                </div>
                <div className='userOne'>
                  <div className='one1' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='div1'><img style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover' }} src={photo5} alt="Error" /></div>
                    <div className='div2' style={{ marginLeft: '15px' }}>
                      <h4>Marvin Davin</h4>
                      <p style={{ fontWeight: '350' }}>Traveler</p></div></div>
                  <div className='one2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae rerum, ducimus perspiciatis necessitatibus impedit consectetur ut maxime aliquid ?</div>
                </div>
                <div className="userOne">
                  <div className='one1' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div className='div1'><img style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover' }} src={photo6} alt="Error" /></div>
                    <div className='div2' style={{ marginLeft: '15px' }}>
                      <h4>Marvin Davin</h4>
                      <p style={{ fontWeight: '350' }}>Traveler</p></div></div>
                  <div className='one2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae rerum, ducimus perspiciatis necessitatibus impedit consectetur ut maxime aliquid ?</div>
                </div>
              </div>
            </div>
            <div className='main01'><br /><br /><br /><br /><br />
              <div className="child02" style={{ display: 'flex', marginLeft: '90px', marginRight: '90px', justifyContent: 'center' }}>
                <div className="child011" style={{ marginRight: '12px', position: 'relative', top: '-65px' }}>
                  <p style={{ marginBottom: '10px', fontWeight: '350' }}>RESOURCES</p>
                  <h2 style={{ marginBottom: '10px' }}>Latest Article</h2>
                  <div className='child0122' >
                    <img src={free} alt="Error" style={{ width: '350px', height: '200px', objectFit: 'cover', borderRadius: '3px' }} />
                  </div>
                  <p style={{ fontWeight: '350', fontSize: '15px', marginTop: '10px', marginBottom: '8px' }}>Destination Discovery</p>
                  <h4 style={{ marginBottom: '10px' }}>10 Must-Visit Hidden Game In Southeast Asia</h4>
                  <div style={{ display: 'flex', alignItems: 'center' }}><img src={photo7} alt="error" style={{ borderRadius: '100px', width: '30px', height: '30px', objectFit: 'cover', marginRight: '8px' }} />
                    <p style={{ fontWeight: '350', fontSize: '15px' }}>Sandy Aldiansyah - 9 Min Read</p>
                  </div>
                </div>
                <div className="child012" style={{ width: 'auto' }}>
                  {/* 1 */}
                  <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }} ><img style={{ width: '90px', height: '70px', objectFit: 'cover', borderRadius: '3px' }} src={family} alt="Error" /> </div>
                    <div style={{ padding: '11px', fontSize: '12px' }}><h4>Travelling With Kids: Tips For Stress-Free Family
                      Adventures
                    </h4>
                      <p style={{ fontWeight: '350' }}>Food and Travel - 5 Min Read</p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }} ><img style={{ width: '90px', height: '70px', objectFit: 'cover', borderRadius: '3px' }} src={foodArticle} alt="Error" /> </div>
                    <div style={{ padding: '11px', fontSize: '12px' }}><h4>Culinary Adventure:Exploring World Cuisines On Your Travels
                    </h4>
                      <p style={{ fontWeight: '350' }}>Food and Traves- 7 Min Read</p>
                    </div>
                  </div>
                  {/* 3 */}
                  <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }} ><img style={{ width: '90px', height: '70px', objectFit: 'cover', borderRadius: '3px' }} src={bugetTravel} alt="Error" /> </div>
                    <div style={{ padding: '11px', fontSize: '12px' }}><h4>Traveling On Budget: Tips For Affordable Advne
                    </h4>
                      <p style={{ fontWeight: '350' }}>Budget Travel - 7 Min Read</p>
                    </div>
                  </div>
                  {/* 4 */}
                  <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }} ><img style={{ width: '90px', height: '70px', objectFit: 'cover', borderRadius: '3px' }} src={tips} alt="Error" /> </div>
                    <div style={{ padding: '11px', fontSize: '12px' }}><h4>Travelling With Kids: Tips For Stress-Free Family
                      Adventures
                    </h4>
                      <p style={{ fontWeight: '350' }}>Family Travel - 7 Min Read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', height: '24vh', top: '-80px' }}>
              <h2 style={{ margin: '0 auto', lineHeight: '20px' }}>Best tour Package offers for you</h2>
              <p style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', fontWeight: '350' }}>choose your next destination</p>
            </div>
            <div className="bdaDbba" display='flex'>
              <div className="chotaDbba" style={{ margin: 'auto', fontSize: '14px' }}>
                <div className='oneone'>
                  <div className='onetwo'>Lotus-Delhi</div></div>
                <img src={lotus} alt="Error" className='imgOne' />
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', top: '-5px', width: 'auto', fontSize: '12px', alignItems: 'center', backgroundColor: '#4B4B4B' }}>
                  <div style={{ display: 'flex' }}><div style={{ marginRight: '5px' }}><div>86415<i style={{ color: 'red' }} className="fa-solid fa-heart"></i></div>More Info</div>
                    <div><div>4586<i style={{ color: 'dodgerblue' }} className="fa-solid fa-comment"></i></div>$2848</div></div>
                  <div style={{ width: '40px', height: '40px', position: 'relative', top: '5px', right: '-5px' }}><button type='button'
                    onMouseDown={() => {
                      this.setState({
                        isPressed7: true
                      })
                    }}
                    onMouseUp={() => {
                      this.setState({
                        isPressed3: false
                      })
                    }}
                    style={buttonF7}>5 day <br />India</button></div>
                </div>
              </div>
              <div className="chotaDbba" style={{ margin: 'auto', fontSize: '14px' }}>
                <div className='oneone'>
                  <div className='onetwo'>Burj Khalifa-DXB</div></div>
                <img src={burjkhalifa} alt="Error" className='imgOne' />
                <div style={{ backgroundColor: '#4B4B4B', display: 'flex', justifyContent: 'space-between', position: 'relative', top: '-5px', width: 'auto', fontSize: '12px', alignItems: 'center' }}>
                  <div style={{ display: 'flex' }}><div style={{ marginRight: '5px' }}><div>86415<i style={{ color: 'red' }} className="fa-solid fa-heart"></i></div>More Info</div>
                    <div><div>4586<i style={{ color: 'dodgerblue' }} className="fa-solid fa-comment"></i></div>$2848</div></div>
                  <div style={{ width: '40px', height: '40px', position: 'relative', top: '5px', right: '-5px' }}><button type='button'
                    onMouseDown={() => {
                      this.setState({
                        isPressed7: true
                      })
                    }}
                    onMouseUp={() => {
                      this.setState({
                        isPressed7: false
                      })
                    }}
                    style={buttonF7}>5 day <br />India</button></div>
                </div>
              </div>
              <div className="chotaDbba" style={{ margin: 'auto', fontSize: '14px' }}>
                <div className="oneone"> <div className="onetwo">Piramids-Egypt</div>
                </div>
                <img src={piramids} alt="Error" className='imgOne' />
                <div style={{ backgroundColor: '#4B4B4B', display: 'flex', justifyContent: 'space-between', position: 'relative', top: '-5px', width: 'auto', fontSize: '12px', alignItems: 'center' }}>
                  <div style={{ display: 'flex' }}><div style={{ marginRight: '5px' }}><div>86415<i style={{ color: 'red' }} className="fa-solid fa-heart"></i></div>More Info</div>
                    <div><div>4586<i style={{ color: 'dodgerblue' }} className="fa-solid fa-comment"></i></div>$2848</div></div>
                  <div style={{ width: '40px', height: '40px', position: 'relative', top: '5px', right: '-5px' }}><button type='button'
                    onMouseDown={() => {
                      this.setState({
                        isPressed7: true
                      })
                    }}
                    onMouseUp={() => {
                      this.setState({
                        isPressed7: false
                      })
                    }}
                    style={buttonF7}>5 day <br />India</button></div>
                </div>
              </div>
              <div className="chotaDbba" style={{ margin: 'auto', fontSize: '14px' }}>
                <div className="oneone"><div className='onetwo'> Mountain-Vietnam</div></div>
                <img src={mountain} alt="Error" className='imgOne' />
                <div style={{ backgroundColor: '#4B4B4B', display: 'flex', justifyContent: 'space-between', position: 'relative', top: '-5px', width: 'auto', margin: 'auto', fontSize: '12px', alignItems: 'center' }}>
                  <div style={{ display: 'flex' }}><div style={{ marginRight: '5px' }}><div>86415<i style={{ color: 'red' }} className="fa-solid fa-heart"></i></div>More Info</div>
                    <div><div>4586<i style={{ color: 'dodgerblue' }} className="fa-solid fa-comment"></i></div>$2848</div></div>
                  <div style={{ width: '40px', height: '40px', position: 'relative', top: '5px', right: '-5px' }}><button type='button'
                    onMouseDown={() => {
                      this.setState({
                        isPressed7: true
                      })
                    }}
                    onMouseUp={() => {
                      this.setState({
                        isPressed7: false
                      })
                    }}
                    style={buttonF7}>5 day <br />India</button></div>
                </div>
              </div>
            </div>
            <br /><br /><br />
            <div className="bdadibba1" style={{ display: 'flex' }}>
              <div className="chotadibba1"><h4>Our Destination</h4>
                <div style={{ fontSize: '13px', lineHeight: '22px' }}>
                  <p>choose your next Destination</p>
                  <p>India</p>
                  <p>Dubai</p>
                  <p>USA</p>
                  <p>Vietnam</p>
                  <p>Russia</p>
                  <p>Brazil</p>
                  <br />
                  <p>Included:Air ticket,Hotel,Breakfast,<br />Tours,Airport transfer</p>
                </div>
                <br />
                <button
                  type='button'
                  onMouseDown={() => {
                    this.setState({
                      isPressed8: true
                    })
                  }}
                  onMouseUp={() => {
                    this.setState({
                      isPressed8: false
                    })
                  }}
                  style={buttonF8}
                >More INFO</button>
              </div>
              <div className="chotadibba2"><div className='chotadibba2Img'> <img src={plane1} alt="error" style={{ width: '300px', height: '310px', display: 'none' }} /></div></div>
            </div>
            <br /><br />
            <div className='subscribe01' style={{ display: 'grid', placeItems: 'center' }}>
              <div style={{ display: 'grid', placeItems: 'center' }}><h3>Subscribe & </h3><h3>get special discount</h3>
                <div style={{ lineHeight: '22px' }}>Lorem ipsum,dolor sit amet consectetur adipisicing elit,</div><div>Incidunt neque animi.</div>
              </div>
            </div>
            <br />
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <div className='subscribe' >
                <div style={{ display: 'grid', placeItems: 'center', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }}><input style={{ padding: '8px', border: 'none' }} type='email' placeholder='Enter your Email Address' /></div>
                <div style={{ display: 'grid', placeItems: 'center', color: 'white', backgroundColor: 'black', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', padding: '8px' }}>Subscribe</div></div></div>
            <br /><br />
            <div className='footer' >
              <div className="one1" style={{ padding: '20px', lineHeight: '22px', textAlign: 'center' }}><h5>7823</h5><hr /><p>Years serving the <br />travel Industry</p></div>
              <div className="one2" style={{ padding: '20px', lineHeight: '22px', textAlign: 'center' }}><h5>6374</h5><hr /><p>Global<br />Patnership</p></div>
              <div className="one3" style={{ padding: '20px', lineHeight: '22px', textAlign: 'center' }}><h5>1496</h5><hr /><p>Industry Awards <br />Since 2022</p></div>
              <div className="one4" style={{ padding: '20px', lineHeight: '22px', textAlign: 'center' }}><h5>5658</h5><hr /><p>Subscribe</p></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
