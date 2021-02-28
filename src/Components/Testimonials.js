import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return ( 
        <li key={testimonials.user}>
            <blockquote>
               <div className="quote-corpus-container">
                  <p className="quote-background" >{testimonials.text}</p>
               </div>
               <cite className="quote-background" >{testimonials.user}</cite>
            </blockquote>
         </li>
      )
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
