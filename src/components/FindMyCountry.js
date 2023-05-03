import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Country from './Country.js';

// https://restcountries.com/#endpoints-latest-added-enpoint

function getRandomInt(min, max) {
  // https://stackoverflow.com/a/1527820
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FindMyCountry() {
  let randomNum = getRandomInt(0, 249);

  const [countries, setCountries] = useState([]);

  const addACountry = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((res) => {
        const country = res[randomNum];
        const newCountry = {
          officialName: country.name.official,
          shortCode: country.cca3,
          capital: country.capital[0],
          flag: country.flags.png,
        };

        setCountries((oldCountries) => [newCountry, ...oldCountries]);
      });
  };

  const deleteAll = () => {
    setCountries([]);
  };

  useEffect(() => addACountry(), []);

  return (
    <div>
      <h1>Random Country/Region Information</h1>
      <Button variant="primary" onClick={addACountry}>
        Add A Country/Region
      </Button>
      <Button variant="secondary" onClick={deleteAll}>
        Reset
      </Button>
      <Container>
        <Row>
          {countries.map((country) => {
            return (
              <Col
                xs={3}
                key={country.shortCode}
                style={{ marginBottom: '1rem' }}
              >
                <Country {...country} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default FindMyCountry;
