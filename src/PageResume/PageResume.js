//Ismael Rodriguez, ismaro.394 at gmail dot com
//Resume page component
import React, { Component } from 'react';
import './PageResume.css';

class PageResume extends Component {

  render() {

    return (
      <div>
        <h1 className="text-center"><strong>Curriculum Vitae</strong></h1>
        <div id="cvDownload"> 
        <a href="/IsmaelRodriguez_CV_EN.pdf">Download PDF</a>
        </div>
        <a href="/IsmaelRodriguez_CV_EN.pdf"><img id="cvImg" src={process.env.PUBLIC_URL + '/images/cv.png'}/></a>
      </div>
      
    );

  }
}

export default PageResume;
