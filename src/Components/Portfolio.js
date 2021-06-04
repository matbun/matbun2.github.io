import React, { Component } from 'react';
import RepoCard from "react-repo-card"; //https://github.com/dawsonbooth/react-repo-card


class Portfolio extends Component {
  render() {

    
    if(this.props.data){
      /*
      // form old template:
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      */
      var projects = this.props.data.ghrepos.map(function(repoName){
        return  <div className="github-repo-wrapper">
                  <RepoCard username="matbun" repository={repoName} />
                </div>   
      })

    }


    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 className="projects-title">Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;