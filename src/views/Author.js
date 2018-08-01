import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div className="view">
        <h1>Author</h1>
        <div className="content">
          <div className="content--inner">
            <p className="content--excerpt">This project was made by Jeremias Menichelli</p>
            <p>His interest for web development started back when he opened a website for the first time as a child and asked himself why it was so slow.</p>
            <p>He is now an adult, or pretending to be one, and a self-taught front end engineer with a varied experience in different types of projects and workflows for web based solutions.</p>
            <p>He initially worked in content based web and marketing sites for companies like Microsoft, State Farm, Razorfish, NYSE and others.</p>
            <p>Later, he helped build and maintain large applications for e-commerce companies and start ups based in the United States, with focus on test driven development and scalability.</p>
            <p>Previous to his current position, he worked for Jam3 agency building rich animated web experiences for clients like Pixar, Google, Oreo, Disney and Facebook, always dangerously obsessed with performance and best practices.</p>
            <p>He is currently part of the Design System team at Typeform and he’s a member of webpack team. He enjoys writing articles and giving talks to share his learnings along the way.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Author
