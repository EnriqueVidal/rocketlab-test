import * as React from 'react';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import Bar from '../components/Bar';
import CancelModal from '../components/CancelModal';
import Field from '../components/Field';
import Footer from '../components/Footer';
import HorizontalField from '../components/HorizontalField';
import ThinButton from '../components/ThinButton';
import TypeAhead from '../components/TypeAhead';

import { states } from '../data/au-states';
import { useContact } from '../hooks/useContact';
import {
  useValidations, eitherOr, hasFormat, hasLength, isEmail, isEmpty, isPhone,
} from '../hooks/useValidations';

const rules = {
  firstName: hasLength(3),
  lastName: hasLength(3),
  accountName: hasLength(5),
  phone: isPhone,
  fax: eitherOr(isEmpty, isPhone),
  email: isEmail,
  street: hasLength(6),
  city: hasLength(6),
  postcode: hasFormat(/^\d{4,5}$/),
  description: hasLength(10),
};

const Home = () => {
  const { fields, resetFields, setField } = useContact();
  const { isInvalid, resetErrors, validate } = useValidations(rules);

  const [showCancel, setCancel] = React.useState(false);
  const toggleCancel = () => setCancel((show) => !show);

  const uniformHeading = classname(
    'subtitle',
    'has-text-primary',
    'has-text-weight-normal',
    'is-size-4',
  );

  const squaredInput = (name) => classname(
    'input',
    'is-radiusless',
    { 'is-danger': isInvalid(name) },
  );

  const resetForm = () => {
    resetErrors();
    resetFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setField(name, value);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validate(name, value);
  };

  const handleStateSelect = (value) => {
    setField('state', value);
  };

  return (
    <div className="page">
      <Helmet defaultTitle="Create Account" />
      <Bar title="Create Contact">
        <div className="buttons is-right">
          <ThinButton primary inverted onClick={toggleCancel}>Cancel</ThinButton>
          <ThinButton primary disabled>Save</ThinButton>
        </div>
      </Bar>
      <CancelModal show={showCancel} onClose={toggleCancel} onReset={resetForm} />
      <div className="section">
        <div className="containter is-fluid">
          <form className="form">
            <div className="content">
              <h2 className={uniformHeading}>Contact Information</h2>
              <HorizontalField>
                <Field htmlFor="firstName" label="First Name" isInvalid={isInvalid('firstName')}>
                  <input
                    className={squaredInput('firstName')}
                    id="firstName"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    value={fields.firstName}
                  />
                </Field>
                <Field htmlFor="lastName" label="Last Name" isInvalid={isInvalid('lastName')}>
                  <input
                    className={squaredInput('lastName')}
                    id="lastName"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Smith"
                    value={fields.lastName}
                  />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="accountName" label="Account Name" isInvalid={isInvalid('accountName')}>
                  <input
                    className={squaredInput('accountName')}
                    id="accountName"
                    name="accountName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John's Joinery"
                    value={fields.accountName}
                  />
                </Field>
                <Field htmlFor="companyName" label="Company Name (optional)">
                  <input
                    className={squaredInput('companyName')}
                    id="companyName"
                    name="companyName"
                    onChange={handleChange}
                    value={fields.companyName}
                  />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="phone" label="Phone" isInvalid={isInvalid('phone')}>
                  <input
                    className={squaredInput('phone')}
                    id="phone"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="02 123 456 78"
                    value={fields.phone}
                  />
                </Field>
                <Field htmlFor="fax" label="Fax (optional)" isInvalid={isInvalid('fax')}>
                  <input
                    className={squaredInput('fax')}
                    id="fax"
                    name="fax"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="02 123 456 79"
                  />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="title" label="Title (optional)">
                  <input
                    className={squaredInput('title')}
                    id="title"
                    name="title"
                    onChange={handleChange}
                    placeholder="Owner"
                    value={fields.title}
                  />
                </Field>
                <Field htmlFor="email" label="Email" isInvalid={isInvalid('email')}>
                  <input
                    className={squaredInput('email')}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="some@email.com"
                    type="email"
                    value={fields.email}
                  />
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
                <Field htmlFor="street" label="Street No. & Street" isInvalid={isInvalid('street')}>
                  <input
                    className={squaredInput('street')}
                    id="street"
                    name="street"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="1, Elizabeth Street"
                    value={fields.street}
                  />
                </Field>
                <Field htmlFor="city" label="City" isInvalid={isInvalid('city')}>
                  <input
                    className={squaredInput('city')}
                    id="city"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Sidney"
                    value={fields.city}
                  />
                </Field>
              </HorizontalField>

              <HorizontalField>
                <Field htmlFor="states" label="State" isInvalid={isInvalid('state')}>
                  <TypeAhead
                    className={squaredInput('state')}
                    id="states"
                    onChange={handleStateSelect}
                    options={states}
                    placeholder="Search State or Territory"
                    value={fields.state}
                  />
                </Field>

                <Field htmlFor="postcode" label="Postcode" isInvalid={isInvalid('postcode')}>
                  <input
                    className={squaredInput('postcode')}
                    id="postcode"
                    name="postcode"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="2000"
                    value={fields.postcode}
                  />
                </Field>
              </HorizontalField>
            </div>

            <div className="content">
              <h2 className={uniformHeading}>Description Information</h2>
              <Field htmlFor="description" label="Description" isInvalid={isInvalid('description')}>
                <textarea
                  className="textarea"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  rows={10}
                  value={fields.description}
                />
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
