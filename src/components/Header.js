import React from 'react';
import "../components/Header.css"
import { Link } from 'react-router-dom';
import Group from "../components/Images/Group.png"
import java_3 from "../components/Images/img_3.png"
import img3 from "../components/Images/img3.png"
import img4 from "../components/Images/img4.png"
import img5 from "../components/Images/img5.png"
import img6 from "../components/Images/img6.png"
import img7 from "../components/Images/img7.png"
import img8 from "../components/Images/img8.png"
import img9 from "../components/Images/img9.png"
import cloud from "../components/Images/cloud.png"
import roundcloud from "../components/Images/round-cloud.png"
import ansible from "../components/Images/ansible.png"
import material from "../components/Images/material-symbols_cloud-done-rounded.png"
import aws from "../components/Images/aws.png"
import docker from "../components/Images/docker.png"
import git from "../components/Images/git.png"
import jenkins from "../components/Images/jenkins.png"
import js from "../components/Images/js.png"
import kubernetes from "../components/Images/kubernetes.png"
import nexus from "../components/Images/nexus.png"
import python from "../components/Images/python.png"
import react from "../components/Images/react.png"
import sonar from "../components/Images/sonar.png"
import terraform from "../components/Images/terraform.png"
import figma from "../components/Images/figma.png"
import java2 from "../components/Images/java.png"
import Email from "../components/Images/Email.gif"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from 'react-bootstrap/Card';
import newjavapipe from "../components/Images/newjavapipe.jpeg"
import quack from "../components/Images/quack.jpeg"
import simplepipe from "../components/Images/simplepipe.jpeg"
import travelguide from "../components/Images/travelguide.jpeg"
import virtuald from "../components/Images/virtuald.jpeg"
import weatherapp from "../components/Images/weatherapp.jpeg"
import Skills from "../components/Images/skillsera.gif"




import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState,useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import emailjs from "@emailjs/browser";
const Header = () => {

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    const [props, set] = useSpring(() => ({
        to: async (next) => {
            while (true) {
                await next({ y: 0, config: { tension: 100, friction: 50 } });
                await next({ y: 50, config: { tension: 200, friction: 50 } });
            }
        },
        from: { y: 100 },
        config: { tension: 100, friction: 50 },
    }));


    const animation = useSpring({
        opacity: 1,
        translateY: 0,
        from: { opacity: 0, translateY: 50 },
        config: { duration: 3000 },
    });


    const animations = useSpring({
        to: {
            transform: 'rotate(360deg)',
            opacity: 1,
        },
        from: {
            transform: 'rotate(0deg)',
            opacity: 0,
        },
        config: { duration: 2000 },
    });

    



    /*your email message starts here*/

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_l65drxk",     
          "template_0tmhacr",  
          form.current,
          "cfB8DfUleyV_ZFNWy"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


    const onSubmit = () => {
             
              alert("Message Sent Sucessfully");
              setTimeout(function () {
                window.location.reload();
              }, 1000);
          
          
      };


    return (
        <div>
            <div className='mypage'>
                <div className='container-fluid'>


                    <div className='homepage' id="homepage">

                        <div className='container'>

                            <div className="row">
                                <div className="col-lg-8" >

                                    <div className="welcome_text" data-aos="fade-up" data-aos-duration="2000" >
                                        <p>
                                            Hey There,<br />
                                            I’m Saif.</p>
                                    </div>


                                    <animated.div style={animation} className="desricption_text">
                                        <div class="typewriter">
                                            <h1>I build things for Web...!</h1>
                                        </div>
                                    </animated.div>
                        

                                    <div className='tags'>
                                        <div className='row'>
                                            <div className='col-lg-3 col-3'>
                                                <div className='instgram' data-aos="flip-up" data-aos-duration="2000">
                                                    <Link to='https://www.instagram.com/saif.dp'>
                                                        <AiOutlineInstagram />
                                                    </Link>

                                                </div>

                                            </div>

                                            <div className='col-lg-3 col-3'>
                                                <div className='twitter' data-aos="zoom-in" data-aos-duration="2000">
                                                    <Link to='https://www.twitter.com/saifdp_'>
                                                        <AiOutlineTwitter />
                                                    </Link>

                                                </div>

                                            </div>
                                            <div className='col-lg-3 col-3'>
                                                <div className='github' data-aos="zoom-in" data-aos-duration="2000">

                                                    <Link to='https://www.github.com/saifdp'>
                                                        <AiFillGithub />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-3'>
                                                <div className='link' data-aos="zoom-in" data-aos-duration="2000">

                                                    <Link to='https://www.linkedin.com/in/saifdvg'>
                                                        <AiFillLinkedin />
                                                    </Link>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-lg-4'>
                                    <div className='img_blocks'>
                                        <div className='row'>
                                            <div className='first_div'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-4'>

                                                        <animated.div style={animations}>
                                                            <div className='group'>
                                                                <animated.img src={Group} className="img-fluid" alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='java'>
                                                                <animated.img src={img3} className="img-fluid " alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='img_3'>

                                                                <img src={java_3} className="img-fluid " alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='second_div'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='group'>
                                                                <img src={img4} className="img-fluid" alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='java'>
                                                                <img src={img5} className="img-fluid " alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='img_3'>

                                                                <img src={img6} className="img-fluid " alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='third_div'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='group'>
                                                                <img src={img7} className="img-fluid" alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='java'>
                                                                <img src={img8} className="img-fluid " alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                    <div className='col-lg-4 col-4'>
                                                        <animated.div style={animations}>
                                                            <div className='img_3'>

                                                                <img src={img9} className="img-fluid " alt="loading..." />
                                                            </div>
                                                        </animated.div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>



                </div>
            </div>
            <div className='Aboutpage' id="Aboutpage">
                <div className='container-fluid'>
                    <div className='second_page'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <div className='about_text' data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine">
                                        <p>About Me! </p>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-5'>
                                    <div className='cloud' data-aos="fade-left"

                                        data-aos-duration="3000">
                                        <img src={cloud} className="img-fluid " alt="loading..." />
                                    </div>
                                </div>
                            </div>

                            <div className='about_content'>
                                <div className='row'>
                                    <div className='col-lg-7'>
                                        <div className='content' data-aos="fade-up" data-aos-duration="2000">
                                            <p>
                                                Hello, and welcome to my portfolio website! I
                                                am Mohammed Saifuddin a DevOps engineer, and I
                                                am excited to share my journey and projects with you.
                                            </p>
                                        </div>

                                        < div className='contents' data-aos="fade-up" data-aos-duration="2000">
                                            <p>

                                                As a DevOps engineer, my goal is to bridge the gap
                                                between development and operations teams to streamline
                                                the software delivery process. I believe that automation,
                                                continuous integration, and continuous delivery are the key
                                                pillars of modern software development, and I am eager to learn
                                                and implement new tools and technologies to improve efficiency and quality.

                                            </p>
                                        </ div>

                                    </div>


                                    <div className='col-lg-5'>

                                        <div className='clouds' data-aos="fade-left"

                                            data-aos-duration="3000">

                                            <img src={cloud} className="img-fluid " alt="loading..." />
                                        </div>


                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className='workpage' id="workpage">
                <div className='container-fluid'>
                    <div className='third_page'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='about_text' data-aos="zoom-out-up" data-aos-duration="2000">
                                        <p>Work!</p>
                                    </div>
                                </div>
                                <div className='col-lg-6'>


                                    <div className='cloud_div' >
                                        <div className='row'>
                                            <div className='col-lg-3 col-3'>

                                                <div className='cloud_1' data-aos="zoom-in" data-aos-duration="2000">

                                                    <img src={roundcloud} className="img-fluid " alt="loading..." />

                                                </div>

                                            </div>
                                            <div className='col-lg-2 col-2'>

                                                <div className='cloud_2' data-aos="zoom-in" data-aos-duration="3000">
                                                    <img src={roundcloud} className="img-fluid " alt="loading..." />

                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-2'>
                                                <div className='cloud_3' data-aos="zoom-in" data-aos-duration="3000">
                                                    <img src={roundcloud} className="img-fluid " alt="loading..." />

                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-2'>
                                                <div className='cloud_4' data-aos="zoom-in" data-aos-duration="3000">
                                                    <img src={roundcloud} className="img-fluid " alt="loading..." />

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>


                        </div>
                    </div>



                    <div className='second_block'>

                        <div class='container-fluid'>
                            <OwlCarousel
                                className={'owl-theme'}
                                loop={true}
                                margin={10}
                                nav={true}
                                dots={false}
                                autoplay={true}
                                autoplayTimeout={3000}
                                items={4}
                                responsive={
                                    {
                                        '1': {
                                            items: 1
                                        },
                                        '300': {
                                            items: 1
                                        },
                                        '900': {
                                            items: 2
                                        },
                                        '1025': {
                                            items: 3
                                        }
                                    }

                                }
                            >

                                <div className={'item'} data-aos="zoom-in"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">

                                    <Card className="sourabh" style={{
                                        width: '18rem', height: '320px', 'borderRadius': '25px'
                                    }}>
                                        <div className='images_samll'>
                                            <Card.Img variant="top" src={newjavapipe} />
                                        </div>

                                        <Card.Body className="text-center">
                                            <Card.Title>CI/CD Pipeline for Java</Card.Title>
                                            <Card.Text>
                                                App to deploy
                                                on tomcat server
                                            </Card.Text>

                                        </Card.Body>
                                        <div className='githubs'>
                                            <Link to='https://www.github.com/saifdp'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    </Card>
                                </div>

                                <div className={'item'} data-aos="zoom-in"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                                    <Card className="sourabh" style={{ width: '18rem', height: '320px', 'borderRadius': '25px' }}>
                                        <div className='images_samll'>
                                            <Card.Img variant="top" src={simplepipe} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Automated CI/CD </Card.Title>
                                            <Card.Text>
                                                Pipeline for Django web app using AWS, Docker and Jenkins
                                            </Card.Text>

                                        </Card.Body>
                                        <div className='githubs'>
                                            <Link to='https://www.github.com/saifdp'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    </Card>
                                </div>
                                <div className={'item'} data-aos="zoom-in"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                                    <Card className="sourabh" style={{ width: '18rem', height: '320px', 'borderRadius': '25px' }}>
                                        <div className='images_samll'>
                                            <Card.Img variant="top" src={travelguide} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Travel Guide Web App</Card.Title>
                                            <Card.Text>
                                                Travel Guide is a web app developed with ReactJS which helps
                                                to find attractions .
                                            </Card.Text>

                                        </Card.Body>
                                        <div className='githubs'>
                                            <Link to='https://github.com/saifdp/travel-guide'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    </Card>
                                </div>
                                <div className={'item'} data-aos="zoom-in"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                                    <Card className="sourabh" style={{ width: '18rem', height: '320px', 'borderRadius': '25px' }}>
                                        <div className='images_samll'>
                                            <Card.Img variant="top" src={virtuald} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Virtual Drawing</Card.Title>
                                            <Card.Text>
                                                Using Machine Learning
                                            </Card.Text>

                                        </Card.Body>
                                        <div className='githubs'>
                                            <Link to='https://github.com/saifdp/virtual-drawing'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    </Card>
                                </div>

                                <div className={'item'} data-aos="zoom-in"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                                    <Card className="sourabh" style={{ width: '18rem', height: '320px', 'borderRadius': '25px' }}>
                                        <div className='images_samll'>
                                            <Card.Img variant="top" src={weatherapp} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Weather App</Card.Title>
                                            <Card.Text>
                                                Weather web app. Enter your location and get to know the weather of your city.
                                            </Card.Text>

                                        </Card.Body>
                                        <div className='githubs'>
                                            <Link to='https://github.com/saifdp/weather-react'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    </Card>
                                </div>
                                <div className={'item'} data-aos="zoom-in"

                                    data-aos-duration="500">
                                    <Card className="sourabh" style={{ width: '18rem', height: '320px', 'borderRadius': '25px' }}>
                                        <div className='images_samll'>
                                            <Card.Img variant="top" src={quack} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Quake Check</Card.Title>
                                            <Card.Text>
                                                Earthquake Alert Mobile app which shows latest earthquake
                                                activities around the world.
                                            </Card.Text>


                                        </Card.Body>
                                        <div className='githubs'>
                                            <Link to='https://github.com/saifdp/quake-check'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    </Card>
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>






                </div>

            </div>

            <div className='myfourthpage' id="myfourthpage">
                <div className='container-fluid'>
                    <div className='homepagefour'>
                        <div className='container'>



                            <div className="row">


                                <div className='col-lg-6'>
                                    <div className='skill_title' data-aos="zoom-in" data-aos-duration="2000">
                                        <p>Skills & Experience</p>
                                    </div>
 
                                    <div className='img_blocksfour'>
                                         <div className='row'>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                                <div className='text_class' data-aos="fade-up" data-aos-duration="2000">
                                                <img src={ansible } className="img-fluid " alt="loading..." /> 
                                            <p className='text'>Ansible</p>
                                                </div>
                                         
                                            </div>
                                           
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={aws  } className="img-fluid " alt="loading..." />   
                                            <p className='text'>AWS</p>  
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={docker  } className="img-fluid " alt="loading..." />  
                                            <p className='text'>Docker</p>   
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={git  } className="img-fluid " alt="loading..." />  
                                            <p className='text'>Git</p>  
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={jenkins   } className="img-fluid " alt="loading..." /> 
                                            <p className='text'>Jenkins</p>    
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={js   } className="img-fluid " alt="loading..." />  
                                            <p className='text'>JS</p>    
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={kubernetes   } className="img-fluid " alt="loading..." />
                                            <p className='text' id='tt'>Kubernetes</p> 
                                            </div>     
                                            </div>
                                             <div className='col-lg-4 col-sm-4 col-4'>
                                             <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={nexus   } className="img-fluid " alt="loading..." /> 
                                            <p className='text'>Nexus</p>  
                                            </div>   
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={python    } className="img-fluid " alt="loading..." /> 
                                            <p className='text'>Python</p>     
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={react    } className="img-fluid " alt="loading..." />   
                                            <p className='text'>React</p>
                                            </div>   
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={sonar    } className="img-fluid " alt="loading..." />  
                                            <p className='text'>Sonar</p>    
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={terraform     } className="img-fluid " alt="loading..." />
                                            <p className='text'>Terraform</p>      
                                            </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4' >
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={figma} className="img-fluid " alt="loading..." />  
                                            <p className='text'>Figma</p>   
                                            </div> 
                                            </div>
                                            <div className='col-lg-4 col-sm-4 col-4'>
                                            <div className='text_class'data-aos="fade-up" data-aos-duration="2000">
                                            <img src={java2 } className="img-fluid " alt="loading..." />     
                                            <p className='text'>Java</p> 
                                            </div>
                                            </div>
                                         </div>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6 col-6'>
                                    <div className='yellow_cloud' data-aos="zoom-in" data-aos-duration="2000">
                                        <img src={Skills} className="img-fluid " alt="loading..." />



                                    </div>
                                </div>

                            </div>




                        </div>


                    </div>



                </div>
            </div>




            <div className='messagepage' id="messagepage">
                <div className='container-fluid'>
                    <div className='homepagefour'>
                        <div className='container'>



                            <div className="row">


                                <div className='col-lg-12'>
                                    <div className='contact_text' data-aos="zoom-in" data-aos-duration="3000">
                                        <p>
                                            Contact Me!
                                        </p>
                                    </div>

                                </div>


                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='send_msg'>
                                    <form ref={form} onSubmit={sendEmail}>

                                            <div class="form-group row " data-aos="fade-up"
                                                data-aos-duration="3000">

                                                <div class="col-sm-10">
                                                    <input type="Full Name" class="form-control" id="fullName"
                                                        placeholder="Full Name" name="user_name" required />
                                                </div>
                                            </div>



                                            <div class="form-group row mt-2" data-aos="fade-up"
                                                data-aos-duration="3000">

                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="education"
                                                        placeholder="Email"name="user_email" required />
                                                </div>
                                            </div>
                                            <div class="form-group row mt-2" data-aos="fade-up"
                                                data-aos-duration="3000">

                                                <div class="col-sm-10">
                                                    <textarea class="form-control" id="message" rows="3"
                                                        placeholder="Message" name="message" required></textarea>
                                                </div>



                                            </div>

                                            <div class="form-group row mt-4 text-center" data-aos="fade-up"
                                                data-aos-duration="3000">

                                                <div class="col-lg-10">

                                                    <button type="submit"  value="Send" class="btn btn-warning" onClick={onSubmit}>Submit</button>
                                                </div>
                                            </div>



                                        </form>
                                    </div>


                                </div>

                                <div className='col-lg-6'>

                                    <div className='email'>
                                        <img src={Email} className="img-fluid " alt="loading..." />
                                    </div>

                                </div>
                            </div>
                            <div className='new_tags text-center'>
                                <div className='row'>
                                    <div className='col-lg-9'>
                                        <div className='tags_2  mb-5 '>

                                            <div className='row '>
                                                <div className='col-lg-1 col-3'>
                                                    <div className='instgram'>
                                                        <Link to='https://www.instagram.com/saif.dp'>
                                                            <AiOutlineInstagram />
                                                        </Link>

                                                    </div>

                                                </div>
                                                <div className='col-lg-1 col-3'>
                                                    <div className='twitter'>
                                                        <Link to='https://www.twitter.com/saifdp_'>
                                                            <AiOutlineTwitter />
                                                        </Link>

                                                    </div>

                                                </div>
                                                <div className='col-lg-1 col-3'>
                                                    <div className='github'>

                                                        <Link to='https://www.github.com/saifdp'>
                                                            <AiFillGithub />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='col-lg-1 col-1' >
                                                    <div className='link'>

                                                        <Link to='https://www.linkedin.com/in/saifdvg'>
                                                            <AiFillLinkedin />
                                                        </Link>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='drop_text'>
                                            <p>
                                                ©2025 HEYSAIF.COM <br />
                                                ALL RIGHTS RESERVED
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>


                    </div>



                </div>
            </div>



        </div>






    )
}

export default Header
