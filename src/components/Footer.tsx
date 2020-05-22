import * as React from 'react';
import classname from 'classnames';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinkClass = classname(
    'has-text-grey-dark',
    'has-around-padding',
  );

  return (
    <footer className="footer has-text-centered">
      <div className="columns">
        <div className="column">
          <p>{`Ⓒ ${new Date().getFullYear()} Crunch Accounting. All right reseved.`}</p>
        </div>
        <div className="column">
          <Link className={footerLinkClass} to="/privacy">
            Privacy Policy
          </Link>
          {' '}
          <Link className={footerLinkClass} to="/terms">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
