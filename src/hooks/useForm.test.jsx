import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './useForm';

describe('useForm hook', () => {
  const initialFields = { firstName: '', lastName: '' };
  const { result } = renderHook(() => useForm(initialFields));

  test('list should start with blank fields', () => {
    expect(result.current.fields).toEqual(initialFields);
  });

  test('it can set fields', () => {
    const firstName = 'John';

    act(() => result.current.setField('firstName', firstName));
    expect(result.current.fields.firstName).toBe(firstName);
  });

  test('it can reset all fields', () => {
    act(() => result.current.resetFields());
    expect(result.current.fields).toEqual(initialFields);
  });
});
