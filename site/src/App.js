import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section id="summary" title="Summary">
        <p>Information technology professional with 20 years of experience in various roles...</p>
      </Section>
      <Section id="skills" title="Skills">
        <ul>
          <li>IT Operations</li>
          <li>Incident Response</li>
          <li>Fraud Detection</li>
          {/* Add more skills here */}
        </ul>
      </Section>
      <Section id="experience" title="Experience">
        <article>
          <h3>TELUS</h3>
          <p>Sr. Business Systems Analyst</p>
          <p>September 2019 - Present</p>
          <p>Managed high-risk migrations and medium-sized projects...</p>
        </article>
        {/* Add more experience here */}
      </Section>
      <Section id="education" title="Education">
        <p>Ryerson University, ITM Curriculum (2005 - 2006)</p>
        <p>Sheridan College, Systems Analysis (1999 - 2003)</p>
      </Section>
    </div>
  );
}

export default App;