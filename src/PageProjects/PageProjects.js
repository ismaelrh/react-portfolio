//Ismael Rodriguez, ismaro.394 at gmail dot com
//Project list component
import React, { Component } from 'react';
import './PageProjects.css';
import Projects from '../data/projects.js';
import ProjectBox from './ProjectBox.js';

const data = Projects;
let currentRow = [];

class PageProjects extends Component {

  render() {


    const content = [];
  	
    let lastIndex;
  	data.forEach((project,index) => {
      lastIndex = index;

      currentRow.push(<ProjectBox key={index} project={project}/>);
  		
      if ( (index !== 0 && (index + 1) % 3 === 0) || (index===data.length-1) ) {

        if (index===data.length-1 && (lastIndex + 1) % 3 !== 0){ //If last and row is not full, fill it with empty columns.
          for(let i = 0; i <= (lastIndex + 1) % 3 ; i ++){
            currentRow.push(<div className="col-4"></div>);
          }
          
        }

          content.push(<div key={'row' + (index+1)/3}className="card-deck">{currentRow}</div>);
          currentRow = [];
      }

  	});



    return (
      <div>
       <h1 className="text-center"><strong>Projects</strong></h1>
       <div  id="projectsSubtitle">Always growing!</div>
        {content}
      </div>
    );
  }
}

export default PageProjects;
