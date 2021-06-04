import React, { Component } from 'react';
import RepoCard from "react-repo-card"; //https://github.com/dawsonbooth/react-repo-card


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return null //this.props.children; 
  }
}

class Portfolio extends Component {
  render() {

    if(this.props.data){
      /*
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return  <div className="github-repo-wrapper">
                    <RepoCard username="matbun" repository="CovidApplication" />
                </div>   
      })
      */
      var projects = this.props.data.ghrepos.map(function(repoName){
        //var projectImage = 'images/portfolio/'+projects.image;
        return  <div className="github-repo-wrapper">
                  <RepoCard username="matbun" repository={repoName} />
                </div>   
      })
    }
    /* 
    <div className="github-repo-wrapper">
                    <RepoCard username="matbun" repository="CovidApplication" />
                </div>    
    
    */

    /*
    // Old projects template
    <div key={projects.title} className="columns portfolio-item">
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
    */
    return projects && projects.length > 0 ? (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 className="projects-title" >Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects} 
            </div>
          </div>
      </div>
   </section>
    ): "";
  }
}

export default Portfolio;
