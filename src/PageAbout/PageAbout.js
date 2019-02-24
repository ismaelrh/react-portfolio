//Ismael Rodriguez, ismaro.394 at gmail dot com
//About page component
import React, { Component } from 'react';
import './PageAbout.css';
import SectionBox from './SectionBox.js';

class PageAbout extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron personalInfoBox">
          
          
          <div className="wrapper d-none d-sm-block">
            <div className="title">
              <div id="avatarDiv">
                <img className="avatarImg" src="http://www.gravatar.com/avatar/4de8d654bf7cffcbd7bbc18fd3bc1e34?s=150"></img>
              </div>
              <div id="textDiv">
               <h1 className="text-center">Ismael Rodríguez</h1>
                <p className="lead text-center">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="d-xs-none d-sm-none"> {/**This is for little screens */}
          
              <div id="avatarDiv">
                <img className="avatarImgSmall"  src="http://www.gravatar.com/avatar/4de8d654bf7cffcbd7bbc18fd3bc1e34?s=150"></img>
              </div>
              <div id="textDiv">
               <h2 className="text-center">Ismael Rodríguez</h2>
                <p className="lead text-center">Software Engineer</p>
              </div>
  
          </div>
          

          <p className="my-4">
          I'm a Software Engineer working as a Java Backend developer at <a target="_blank" href="https://www.datumize.com">Datumize</a>.  
          I got my Bachelor’s Degree in Computer Science and Engineering in 2016 at&nbsp;<a target="_blank" href="http://www.unizar.es/university-zaragoza">University of Zaragoza</a>, and a Master's Degree in Innovation in Informatics at&nbsp;  
          <a target="_blank" href="https://www.fib.upc.edu/en/studies/masters/master-innovation-and-research-informatics">UPC Barcelona</a>.
          <br/>
          <br/>
          I'm constantly learning new languages and tools, and creating my own personal projects.
          Besides, I really enjoy attending hackathons, reading science books, and running.
          Take a look at my resume, my list of project, my blog or the hackathons I've attended to know more about me.
          <br/>
          <br/>
          Please feel free to <a href="mailto:ismaro.394@gmail.com">contact me</a>.
          </p>
          <hr/>
          
          <div className="contactMethods row"> 
            <div className="contact col-3 text-center">
              <a href="mailto:ismaro.394@gmail.com" target="_blank"><span className="contactIcon text-center"><i className="fa fa-envelope-o"/></span>
              <span className="contactText text-center">ismaro.394 at gmail dot com</span></a>
            </div>
            <div className="contact col-3 text-center">
              <a href="https://github.com/ismaro3" target="_blank"><span className="contactIcon text-center"><i className="fa fa-github"/></span>
              <span className="contactText text-center">ismaro3</span></a>
            </div>
             <div className="contact col-3 text-center">
              <a href="https://www.linkedin.com/in/ismaelrh" target="_blank"><span className="contactIcon text-center"><i className="fa fa-linkedin-square"/></span>
              <span className="contactText text-center">ismaelrh</span></a>
            </div>
             <div className="contact col-3 text-center">
              <a href="https://twitter.com/ismaro3" target="_blank"><span className="contactIcon text-center"><i className="fa fa-twitter-square"/></span>
              <span className="contactText text-center">ismaro3</span></a>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <SectionBox title='Resume / CV' icon='fa-address-card-o' target='/resume'/>
          <SectionBox title='Projects' icon='fa-th' target='/projects'/>
          <SectionBox title='Blog' icon='fa-file-text-o' link='http://blog.ismaelrh.com'/>
          <SectionBox title='Hackathons' image={process.env.PUBLIC_URL + '/images/hackathon-icon.png'} target='/hackathons'/>
        </div>
      </div>
    );
  }
}

export default PageAbout;
