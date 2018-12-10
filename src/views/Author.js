import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div className="view">
        <h1>Author</h1>
        <div className="content">
          <div className="content--inner">
            <p className="content--excerpt">This project was made by Jeremias Menichelli</p>
            <p>Born and raised in Argentina, and currently living in Barcelona, his interest for web development started back when he opened a website for the first time as a child and asked himself why it was so slow.</p>
            <p>He initially worked in content based web and marketing sites for companies like Microsoft and State Farm, and later helped build and maintain large applications for start ups based in the United States with a focus on testing and scalability.</p>
            <p>Previous to his current position, he worked for Jam3 agency building rich animated web experiences for clients like Pixar, Google, Oreo and Facebook.</p>
            <p>He is currently part of the Design System team at Typeform and member of webpack documentation team. He also enjoys writing articles and talks to share his learnings along the way.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Author
