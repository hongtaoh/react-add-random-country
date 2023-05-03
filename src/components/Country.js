import React from 'react';

import { Card } from 'react-bootstrap';

function Country(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.flag} />
      <p>{props.officialName}</p>
      <p>Code: {props.shortCode}</p>
      <p>Capital: {props.capital}</p>
      
    </Card>
  );
}

export default Country;
