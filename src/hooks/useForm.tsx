import * as React from 'react';

export const useForm = (initialState) => {
  const [fields, setFields] = React.useState(initialState);

  const resetFields = () => setFields(initialState);
  const setField = (name: string, value: string) => (
    setFields((currentFields) => ({ ...currentFields, [name]: value }))
  );

  return {
    fields,
    resetFields,
    setField,
  };
};
