import * as React from 'react';

export const useToggle = (initialSate = false) => {
  const [focused, setFocus] = React.useState(initialSate);
  const toggle = () => setFocus((focused) => !focused);

  return {
    focused,
    toggle,
  };
};
