import * as React from 'react';

const defaultFields = {
  firstName: '',
  lastName: '',
  accountName: '',
  companyName: '',
  phone: '',
  fax: '',
  title: '',
  email: '',
  optOut: false,
  street: '',
  city: '',
  state: '',
  postcode: '',
  description: '',
};

export const useContact = (initialState = defaultFields) => {
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
