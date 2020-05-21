import * as React from 'react';

export const useToggle = (initialSate = false) => {
  const [focused, setFocus] = React.useState(initialSate);
  const toggle = () => setFocus((currentState) => !currentState);

  return {
    focused,
    toggle,
  };
};
