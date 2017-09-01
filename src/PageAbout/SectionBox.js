import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SectionBox extends Component {
  render() {

    let result = <span></span>
    if (this.props.target) {
      
          result = <NavLink to={this.props.target} className="card border-default bg-light sectionBox">
             <div className="card-block">
              <h3 className="card-title text-center">{this.props.title}</h3>
              { this.props.icon && <p className="section-icon text-center"><i className={'fa ' + this.props.icon}/></p>}
              { this.props.image && <img className="section-image" src={this.props.image}/> }
           </div>
          </NavLink>;
          
      
    }

    if (this.props.link) {
       result = <a href={this.props.link} className="card border-default bg-light sectionBox">
             <div className="card-block">
              <h3 className="card-title text-center">{this.props.title}</h3>
              { this.props.icon && <p className="section-icon text-center"><i className={'fa ' + this.props.icon}/></p>}
              { this.props.image && <img className="section-image" src={this.props.image}/> }
           </div>
          </a>;
    }


    return result;


    
  }
}

export default SectionBox;
