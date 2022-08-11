import React from 'react';
import './quote_style.css';

const Quote = () => {
  return (
    <section className="quote_section">
      <p>
        Mathematics is not about the numbers, equations, computations, or
        algorithms: its is about understanding.
        <br /> <span className="author"> _William Paul Thurston</span>
      </p>
    </section>
  );
};

export default Quote;
