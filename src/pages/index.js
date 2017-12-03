'use strict';

import React from 'react';
import Link from 'gatsby-link';
import Background from './background.png';

let style = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
};

const IndexPage = () => (
  <div style={style}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
