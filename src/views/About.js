import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="view">
        <h1>About</h1>
        <div className="content">
          <div className="content--inner">
            Application created to showcase multiple transitions in React projects, based on the route is entering. If you want to know more about this approach check this links:
            <ul>
              <li>
                Talks where this project is mentioned:
                <ul>
                  <li>A sleek view transitions recipes for web apps<br/><em>Link coming soon...</em></li>
                  <li>Insights from building rich animated experiences in React<br/><em>Link coming soon...</em></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About
