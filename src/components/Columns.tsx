import * as React from 'react';

interface Props {
  children: React.ReactNode;
 }

const Columns = ({ children }: Props) => {
  const wrapped = React.Children.map(
    children,
    (child) => <div className="column">{child}</div>,
  );

  return (
    <div className="columns">
      {wrapped}
    </div>
  );
};

export default Columns;
