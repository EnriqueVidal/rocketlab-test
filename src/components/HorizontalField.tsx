import * as React from 'react';

interface Props {
  children: React.ReactNode,
}

const HorizontalField = ({ children }: Props) => (
  <div className="field is-horizontal">
    <div className="field-body">
      {children}
    </div>
  </div>
);

export default HorizontalField;
