import * as React from 'react';

const EMAIL_EXPRESSION = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PHONE_EXPRESSION = /^\d{10}$/;

export const hasLength = (min = 3) => (value: string) => value.trim().length >= min;
export const hasFormat = (expr: RegExp) => (value: string) => expr.test(value);

export const isEmpty = (value: string) => value.length === 0;
export const isEmail = hasFormat(EMAIL_EXPRESSION);
export const isPhone = hasFormat(PHONE_EXPRESSION);

export const eitherOr = (...lambdas) => (value: string) => {
  const recursive = (validations = []) => {
    if (validations.length <= 0) return false;

    const [head, ...tail] = validations;
    return head(value) ? true : recursive(tail);
  };

  return recursive(lambdas);
};

export const useValidations = (rules) => {
  const [errors, setErrors] = React.useState([]);

  const addError = (field: string) => (
    setErrors((err) => (err.includes(field) ? err : err.concat(field)))
  );

  const clearError = (field: string) => setErrors((err) => err.filter((e) => e !== field));
  const isInvalid = (field: string) => errors.includes(field);
  const resetErrors = () => setErrors([]);

  const validate = (field: string, value: string) => {
    const validator = rules[field];
    if (typeof validator !== 'function') return null;
    return validator(value) ? clearError(field) : addError(field);
  };

  return {
    isInvalid,
    resetErrors,
    validate,
  };
};
