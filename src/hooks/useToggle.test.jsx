import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './useToggle';

describe('Test state toggler', () => {
  const { result } = renderHook(() => useToggle());

  test('it should start with focused off false', () => {
    expect(result.current.focused).toBe(false);
  });

  test('it should toggle focused', () => {
    act(() => result.current.toggle());
    expect(result.current.focused).toBe(true);
  });

  test('it should toggle focused back', () => {
    act(() => result.current.toggle());
    expect(result.current.focused).toBe(false);
  });
});
