//Ismael Rodriguez, ismaro.394 at gmail dot com
//Hackathon list component
import React, { Component } from 'react';
import './PageHackathons.css';
import Hackathons from '../data/hackathons.js';

const data = Hackathons;
class PageHackathons extends Component {

  render() {


    const rows = [];
    data.forEach((hackathon,index) => {
      rows.push(
          <tr key={index}>
            <th>{hackathon.date}</th>
            <th><a target='_blank' href={hackathon.url}>{hackathon.name}</a></th>
            <th>{hackathon.place}</th>
            <th><a target='_blank' href={hackathon.projectUrl}>{hackathon.project}</a></th>
          </tr>
      );
    });

    return (
      <div>
        <h1 className="text-center"><strong>Hackathons</strong></h1>
        <div id="hackathonsText">
          Here's a list of hackathons I've attended
        </div>
        <table className="table table-striped table-responsive" id="hackathonsTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Hackathon</th>
              <th>Place</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
      </div>
      
    );

  }
}

export default PageHackathons;
