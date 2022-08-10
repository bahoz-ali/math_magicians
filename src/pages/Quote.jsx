import React from 'react';
import './quote_style.css'

const Quote = () => {
  return (
    <section className='quote_section'>
      <p>
        Mathematics is not about the numbers, equations, computations, or
        algorithms: its is about understanding.
        <span className="author"> __William Paul Thurston</span>
      </p>
    </section>
  );
};

export default Quote;
