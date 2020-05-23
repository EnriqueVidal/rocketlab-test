import { renderHook, act } from '@testing-library/react-hooks';
import {
  useValidations,
  eitherOr,
  hasLength,
  hasFormat,
  isEmpty,
  isEmail,
  isPhone,
  isIncluded,
} from './useValidations';


describe('validations API', () => {
  const rules = {
    name: hasLength(3),
    email: isEmail,
    phone: eitherOr(isEmpty, isPhone),
    zipcode: hasFormat(/^\d{4,5}$/),
    fruit: isIncluded(['orange', 'apple', 'banana']),
  };

  const { result } = renderHook(() => useValidations(rules));

  test('it can validate values', () => {
    act(() => result.current.validate('name', 'a'));
    expect(result.current.isInvalid('name')).toBe(true);
  });

  test('it can reset all errors', () => {
    act(() => result.current.resetErrors());
    expect(result.current.isInvalid('name')).toBe(false);
  });

  test('fields with no rules should not be invalid', () => {
    act(() => result.current.validate('foo', 'bar'));
    expect(result.current.isInvalid('foo')).toBe(false);
  });

  test('eitherOr let\'s you combine validators but will stop one the first one is valid', () => {
    act(() => result.current.validate('phone', ''));
    expect(result.current.isInvalid('phone')).toBe(false);// empty is allowed

    act(() => result.current.validate('phone', '0123'));
    expect(result.current.isInvalid('phone')).toBe(true); // invalid format is now allowed

    act(() => result.current.validate('phone', '0123456789'));
    expect(result.current.isInvalid('phone')).toBe(false); // phone expression is just 10 digits
  });

  test('isEmail just check email format to be valid', () => {
    act(() => result.current.validate('email', ''));
    expect(result.current.isInvalid('email')).toBe(true); // empty is not allowed

    act(() => result.current.validate('email', 'foo@bar.co'));
    expect(result.current.isInvalid('email')).toBe(false); // valid email format

    act(() => result.current.validate('email', 'invalidFormat'));
    expect(result.current.isInvalid('email')).toBe(true);
  });

  test('hasFormat takes a regular expression to test against', () => {
    act(() => result.current.validate('zipcode', ''));
    expect(result.current.isInvalid('zipcode')).toBe(true); // empty is not allowed

    act(() => result.current.validate('zipcode', '92154'));
    expect(result.current.isInvalid('zipcode')).toBe(false);
  });

  test('isIncluded checks if value is included in collection', () => {
    act(() => result.current.validate('fruit', 'pear'));
    expect(result.current.isInvalid('fruit')).toBe(true);

    act(() => result.current.validate('fruit', 'banana'));
    expect(result.current.isInvalid('fruit')).toBe(false);
  });

  test('isValid is just the inverse of isInvalid', () => {
    expect(!result.current.isInvalid('fruit')).toBe(result.current.isValid('fruit'));
  });

  test('validateAll will validate an entire dictionary/form', () => {
    const form = {
      name: 'John',
      email: 'someInvalid',
      phone: '',
      zipcode: '123',
      fruit: 'apple',
    };

    act(() => result.current.validateAll(form, (allErrors) => {
      expect(allErrors).toEqual(['email', 'zipcode']);
    }));
  });
});
