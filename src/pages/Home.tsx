import * as React from 'react';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import Bar from '../components/Bar';
import Field from '../components/Field';
import Footer from '../components/Footer';
import HorizontalField from '../components/HorizontalField';
import Modal from '../components/Modal';
import ThinButton from '../components/ThinButton';
import TypeAhead from '../components/TypeAhead';
import { states } from '../data/au-states';

const CancelModal = ({ show, onClose }) => (
  <Modal show={show} onClose={onClose}>
    {(close) => (
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Are you sure?</p>
        </header>
        <section className="modal-card-body">
          <p>You&apos;re about to cancel, this will clear out your form</p>
        </section>
        <footer className="modal-card-foot">
          <ThinButton primary disabled>Reset</ThinButton>
          <ThinButton primary inverted onClick={close}>Cancel</ThinButton>
        </footer>
      </div>
    )}
  </Modal>
);

const Home = () => {
  const [showCancel, setCancel] = React.useState(false);
  const toggleCancel = () => setCancel((show) => !show);

  const uniformHeading = classname(
    'subtitle',
    'has-text-primary',
    'has-text-weight-normal',
    'is-size-4',
  );

  const squaredInput = classname(
    'input',
    'is-radiusless',
  );

  return (
    <div className="page">
      <Helmet defaultTitle="Create Account" />
      <Bar title="Create Contact">
        <div className="buttons is-right">
          <ThinButton primary inverted onClick={toggleCancel}>Cancel</ThinButton>
          <ThinButton primary>Save</ThinButton>
        </div>
      </Bar>
      <CancelModal show={showCancel} onClose={toggleCancel} />
      <div className="section">
        <div className="containter is-fluid">
          <form className="form">
            <div className="content">
              <h2 className={uniformHeading}>Contact Information</h2>
              <HorizontalField>
                <Field htmlFor="firstName" label="First Name">
                  <input className={squaredInput} id="firstName" placeholder="John" />
                </Field>
                <Field htmlFor="lastName" label="Last Name">
                  <input className={squaredInput} id="lastName" placeholder="Smith" />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="accountName" label="Account Name">
                  <input className={squaredInput} id="accountName" placeholder="John's Joinery" />
                </Field>
                <Field htmlFor="companyName" label="Company Name (optional)">
                  <input className={squaredInput} id="companyName" />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="phone" label="Phone">
                  <input className={squaredInput} id="phone" placeholder="02 123 456 78" />
                </Field>
                <Field htmlFor="fax" label="Fax (optional)">
                  <input className={squaredInput} id="fax" placeholder="02 123 456 79" />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="title" label="Title (optional)">
                  <input className={squaredInput} id="title" placeholder="Owner" />
                </Field>
                <Field htmlFor="email" label="Email">
                  <input className={squaredInput} id="email" type="email" placeholder="some@email.com" />
                </Field>
              </HorizontalField>

              <div className="field">
                <label className="checkbox">
                  Email Opt Out
                  {' '}
                  <input type="checkbox" />
                </label>
              </div>
            </div>

            <div className="content">
              <h2 className={uniformHeading}>Address Information</h2>
              <HorizontalField>
                <Field htmlFor="street" label="Street No. & Street">
                  <input className={squaredInput} id="street" placeholder="1, Elizabeth Stret" />
                </Field>
                <Field htmlFor="city" label="City">
                  <input className={squaredInput} id="city" placeholder="Sidney" />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="states" label="State">
                  <TypeAhead id="states" options={states} placeholder="Search State or Territory" />
                </Field>

                <Field htmlFor="postcode" label="Postcode">
                  <input className={squaredInput} id="postcode" placeholder="2000" />
                </Field>
              </HorizontalField>
            </div>

            <div className="content">
              <h2 className={uniformHeading}>Description Information</h2>
              <Field htmlFor="description" label="Description">
                <textarea className="textarea" rows={10} />
              </Field>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
