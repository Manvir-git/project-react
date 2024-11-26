import React from 'react';
import '../css/Aboutus.css';
import abImage from '../images/ab.jpg';

const AboutUs = () => {
  return (
    <main>
      <section className="product-range">
        <img src={abImage} alt="About Us" />
        <div className="about">
          <div className="head">
            <h2 style={{
              color: '#555555',
              fontSize: '30px',
              backgroundColor: 'rgb(219, 219, 219)',
              margin: '0 100px'
            }}>About Us</h2>
          </div>
          <p style={{
            textAlign: 'left',
            margin: '0 150px'
          }}>
            BS Pumps, a leading manufacturer with over 46 years of experience in pump industry, has highly specialized
            in design and manufacturing know-how of water pumps. The company has an extensive distribution network
            through its authorized dealers. The product range covers a wide application such as domestic, agriculture,
            water supply to townships, industries, sewage and drainage.
            <br /><br />
            The R&D team has years of experience in pump industry and is consistently engaged in development activities.
            The team works in close proximity with the engineers appointed at the production unit and suggests them to
            redefine the existing production process up-gradation on regular basis. They have also succeeded in improving
            the efficiency of existing range of pumps and introducing new models.
            <br /><br />
            Being certified by ISO 9001, the company ensures for each and every BS product, the utmost in functional
            capability, cost effectiveness, and reliability.
            <br /><br />
            BS Pumps has always been on the process of continuous refinement and addition of new range of pumps for its
            customers.
          </p>
        </div>
        <h1 style={{
          color: '#555555',
          fontSize: '30px',
          backgroundColor: 'rgb(219, 219, 219)',
          margin: '0 100px'
        }}>PRODUCT RANGE</h1>
        <div className="z" style={{ margin: '0 110px' }}>
          <div className="a">
            <h3>A. Agricultural Pumpsets</h3>
            <ul>
              <li>100 mm (4 inch) Borewell Submersible Pumpsets</li>
              <li>125 mm (5 inch) Borewell Submersible Pumpsets</li>
              <li>150 mm (6 inch) Borewell Submersible Pumpsets</li>
              <li>175 mm (7 inch) Borewell Submersible Pumpsets</li>
              <li>200 mm (8 inch) Borewell Submersible Pumpsets</li>
              <li>250 mm (10 inch) Borewell Submersible Pumpsets</li>
              <li>Horizontal openwell Submersible Pumps</li>
            </ul>
          </div>
          <div className="a">
            <h3>B. Domestic Pumpsets</h3>
            <ul>
              <li>100 mm (4 inch) Borewell Submersible Pumpsets</li>
              <li>Horizontal Openwell Submersible Pumps</li>
              <li>Dewatering pumps</li>
              <li>Solar pumps</li>
            </ul>
          </div>
          <div className="a">
            <h3>C. Industrial Pumpsets</h3>
            <ul>
              <li>Dewatering Pumps</li>
              <li>Non-clog Sewage pumps</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
