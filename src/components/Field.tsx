import * as React from 'react';

interface Props {
 children: React.ReactNode;
 htmlFor?: string;
 isInvalid?: boolean;
 label?: string;
}

const Field = ({
  children, htmlFor, label,
}: Props) => (
  <div className="field">
    { label ? (
      <label className="label has-text-weight-normal" htmlFor={htmlFor}>
        {label}
      </label>
    ) : null}
    <div className="control has-icons-right">
      {children}
    </div>
  </div>
);

Field.defaultProps = {
  htmlFor: '',
  isInvalid: false,
  label: null,
};

export default Field;
