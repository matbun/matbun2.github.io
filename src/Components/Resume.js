import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var softskillMessage = this.props.data.softskillsMessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })

      var softSkills = this.props.data.softskills.map(function(softskills){
        var className = 'bar-expand '+softskills.name.toLowerCase();
        return <li key={softskills.name}><span style={{width:softskills.level}}className={className}></span><em>{softskills.name}</em></li>
      })

      var languages = this.props.data.languages.map(function(languages){
        return <div key={languages.name}><h3>{languages.name}</h3>
        <p className="info">{languages.grade} <span>&bull;</span><em className="date">{languages.date}</em></p>
        <p>{languages.certification}</p></div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



    <div className="row education">

      <div className="three columns header-col">
          <h1><span>Coding</span></h1>
      </div>

      <div className="nine columns main-col">

          

        <div className="bars">
          <ul className="skills">
            {skills}
          </ul>
        </div>

        <p>{skillmessage}</p>
        

      </div>    
      </div>

      <div className="row education">

        <div className="three columns header-col">
            <h1><span>Soft Skills</span></h1>
        </div>

        <div className="nine columns main-col">

            

          <div className="bars">
            <ul className="skills">
              {softSkills}
            </ul>
          </div>

          <p>{softskillMessage}</p>
          

        </div>    
      </div>


    <div className="row skills">
         <div className="three columns header-col">
            <h1><span>Languages</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {languages}
               </div>
            </div>
         </div>
    </div>


   </section>
    );
  }
}

export default Resume;
