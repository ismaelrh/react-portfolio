//Ismael Rodriguez, ismaro.394 at gmail dot com
//Project box component
import React, { Component } from 'react';



class ProjectBox extends Component {

  render() {

    const project = this.props.project;

  	
    const badges = [];
    if (project.tags && project.tags.types) {
    	project.tags.types.forEach((tag,index) => {
    		badges.push(<span key={'typeTag' + index} className="badge badge-pill badge-danger">{tag}</span>);
    	});
    }
    if (project.tags && project.tags.languages) {
    	project.tags.languages.forEach((tag,index) => {
    		badges.push(<span key={'languageTag' +index} className="badge badge-pill badge-success">{tag}</span>);
    	});
    }
    if (project.tags && project.tags.libraries) {
    	project.tags.libraries.forEach((tag,index) => {
    		badges.push(<span key={'libraryTag' +index} className="badge badge-pill badge-primary">{tag}</span>);
    	});
    }
    if (project.tags && project.tags.others) {
    	project.tags.others.forEach((tag,index) => {
    		badges.push(<span key={'otherTag' +index} className="badge badge-pill badge-warning">{tag}</span>);
    	});
    }

  		
      return (

        <div className="card projectBox">

          <div className="card-header">
            <a target='_blank' href={project.url}><h3 className="text-center card-title">{project.title}</h3></a>
            <div className="image"><a target='_blank' href={project.url}><img src={process.env.PUBLIC_URL + '/images/project-images/' + project.image} alt={project.title} className="img-fluid"/></a></div>
          </div>

          <div className="card-block">
            { project.prize && project.prize.length > 0 && 
              <span><i className="fa fa-trophy"/>&nbsp; <i>{project.prize}</i><br/><br/></span>
            }
            <p className="description">{project.description}</p>
          </div>

          <div className="card-footer">
            { badges }
          </div>

        </div>
      );

  }
}

export default ProjectBox;
