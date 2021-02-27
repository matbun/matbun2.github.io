import React, { Component } from 'react';
import { saveAs } from 'file-saver';

class About extends Component {
   constructor(){
      super();
      this.downloadCV = this.downloadCV.bind(this);
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;   
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Matteo Bunino Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
						         {city} {state}, {zip}
                   </span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a onClick={this.downloadCV} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }

  downloadCV(){
   var FileSaver = require('file-saver');
   var resumeDownload = this.props.data.resumedownload;

   FileSaver.saveAs(
      process.env.PUBLIC_URL + "/cv/" + resumeDownload,
      resumeDownload);
  }
  
}

export default About;
