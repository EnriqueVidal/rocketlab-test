import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const Button = styled.button`
  border-radius: 2px;
  height: 32px;
  padding: 0 24px;
`;

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  primary: boolean;
  inverted: boolean;
}

const ThinButton = ({
  children, className, inverted, onClick, primary,
}: Props) => {
  const buttonClass = classnames(
    'button',
    className,
    {
      'is-primary': primary,
      'is-inverted': inverted,
    },
  );

  return (
    <Button className={buttonClass} onClick={onClick}>
      {children}
    </Button>
  );
};

ThinButton.defaultProps = {
  primary: false,
  inverted: false,
};

export default ThinButton;
