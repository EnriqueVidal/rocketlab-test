import * as React from 'react';
import styled from 'styled-components';

const WarningIcon = styled.i`
  content: "";
  user-select: none;
`;

interface Props {
 children: React.ReactNode;
 htmlFor?: string;
 isInvalid?: boolean;
 label?: string;
}

const Field = ({
  children, htmlFor, isInvalid, label,
}: Props) => (
  <div className="field">
    { label ? (
      <label className="label has-text-weight-normal" htmlFor={htmlFor}>
        {label}
      </label>
    ) : null}
    <div className="control has-icons-right">
      {children}
      <span className="icon is-small is-right">
        { isInvalid ? (
          <WarningIcon className="material-icons has-text-danger">error_outline</WarningIcon>
        ) : null }
      </span>
    </div>
  </div>
);

Field.defaultProps = {
  htmlFor: '',
  isInvalid: false,
  label: null,
};

export default Field;
