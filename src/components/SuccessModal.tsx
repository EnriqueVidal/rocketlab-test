import * as React from 'react';
import styled from 'styled-components';
import classname from 'classnames';
import Modal from './Modal';
import Columns from './Columns';

const ExitButton = styled.button`
  background-color: #fff;
  border: 0;
  content: "";
  margin: 0;
`;

interface Fields {
  firstName: string;
  lastName: string;
  accountName: string;
  companyName: string;
  phone: string;
  fax: string;
  title: string;
  email: string;
  optOut: boolean;
  street: string;
  city: string;
  state: string;
  postcode: string;
  description: string;
 }

interface Props {
 fields: Fields;
 onClose: () => void;
 show: boolean;
 }

const SuccessModal = ({ fields, onClose, show }: Props) => (
  <Modal show={show} onClose={onClose}>
    {(close) => {
      const sectionHeader = classname(
        'subtitle',
        'has-text-primary',
        'has-text-navy-blue',
        'has-text-weight-normal',
        'is-size-6',
      );

      const subTitleClass = classname(
        'subtitle',
        'is-size-6',
        'has-text-grey',
      );

      const labelClass = classname(
        'label',
        'has-text-weight-normal',
        'has-text-grey',
        'has-text-right-tablet',
      );
      const fieldClass = 'has-text-navy-blue';

      return (
        <div className="box is-radiusless">
          <ExitButton className="is-pulled-right" aria-label="close" onClick={close}>
            <span className="icon">
              <i className="material-icons">clear</i>
            </span>
          </ExitButton>
          <div className="section">
            <header className="content">
              <h2 className="title has-text-weight-normal is-size-4">
                Saved
                {' '}
                <span className="icon has-text-success">
                  <i className="material-icons">done</i>
                </span>
              </h2>
              <p className={subTitleClass}>The contact details have been saved</p>
            </header>

            <div className="content is-first">
              <h2 className={sectionHeader}>Contact Information</h2>
              <Columns>
                <label className={labelClass}>First Name</label>
                <p className={fieldClass}>{fields.firstName}</p>
                <label className={labelClass}>Last Name</label>
                <p className={fieldClass}>{fields.lastName}</p>
              </Columns>
              <Columns>
                <label className={labelClass}>Account Name</label>
                <p className={fieldClass}>{fields.accountName}</p>
                <label className={labelClass}>Company Name</label>
                <p className={fieldClass}>{fields.companyName}</p>
              </Columns>
              <Columns>
                <label className={labelClass}>Phone</label>
                <p className={fieldClass}>{fields.phone}</p>
                <label className={labelClass}>Fax</label>
                <p className={fieldClass}>{fields.fax}</p>
              </Columns>
              <Columns>
                <label className={labelClass}>Title</label>
                <p className={fieldClass}>{fields.title}</p>
                <label className={labelClass}>Email</label>
                <p className={fieldClass}>{fields.email}</p>
              </Columns>
              <div className="columns">
                <div className="column is-one-quarter">
                  <label className={labelClass}>Email Opt Out</label>
                </div>
                <div className="column is-one-quarter">
                  <p className={fieldClass}>{fields.optOut ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>

            <div className="content">
              <h2 className={sectionHeader}>Address Information</h2>
              <Columns>
                <label className={labelClass}>Street No. & Street</label>
                <p className={fieldClass}>{fields.street}</p>
                <label className={labelClass}>City</label>
                <p className={fieldClass}>{fields.city}</p>
              </Columns>
              <Columns>
                <label className={labelClass}>State</label>
                <p className={fieldClass}>{fields.state}</p>
                <label className={labelClass}>Postcode</label>
                <p className={fieldClass}>{fields.postcode}</p>
              </Columns>
            </div>

            <div className="content">
              <h2 className={sectionHeader}>Description Information</h2>
              <div className="columns">
                <div className="column is-one-quarter">
                  <label className={labelClass}>Description</label>
                </div>
                <div className="column">
                  <p className={fieldClass}>{fields.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </Modal>
);

export default SuccessModal;
