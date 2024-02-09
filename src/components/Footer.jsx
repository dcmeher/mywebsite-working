import React from 'react';
import './Footer.css'; // Import your CSS styles if you have any

function Footer() {
  return (
    <footer className="Footer">
      <div>
      <div>
  <p>&copy; {new Date().getFullYear()} Dhrubameher. All rights reserved. | Contact me: <a href="mailto:dhruba.meher@gmail.com">dhruba.meher@gmail.com</a></p>
</div>
      </div>
      <div>
        <p>Follow me:
        <a href="https://www.linkedin.com/in/dhrubameher" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a> </p>
      </div>
    </footer>
  );
}

export default Footer;
