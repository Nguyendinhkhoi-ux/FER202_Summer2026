import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About React Router</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p className="lead text-center mb-4">
            React Router is a standard library for routing in React applications.
          </p>
          <p>
            React Router enables the navigation among views of various components in a React Application,
            allows changing the browser URL, and keeps the UI in sync with the URL.
          </p>
          <h4 className="mt-4">Key Features:</h4>
          <ul>
            <li>Declarative routing</li>
            <li>Dynamic route matching</li>
            <li>Nested routes</li>
            <li>Navigation control</li>
            <li>History management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
