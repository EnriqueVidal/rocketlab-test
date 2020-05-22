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
  disabled?: boolean;
  onClick?: () => void;
  primary: boolean;
  inverted: boolean;
}

const ThinButton = ({
  children, className, disabled, inverted, onClick, primary,
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
    <Button className={buttonClass} onClick={onClick} disabled={disabled} type="button">
      {children}
    </Button>
  );
};

ThinButton.defaultProps = {
  disabled: false,
  primary: false,
  inverted: false,
};

export default ThinButton;
