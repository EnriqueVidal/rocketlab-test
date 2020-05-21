import { renderHook, act } from '@testing-library/react-hooks';
import { useFilteredList } from './useFilteredList';
import { states } from '../data/au-states';

describe('useFilteredList hook', () => {
  const { result } = renderHook(() => useFilteredList(states));

  test('list should not be filtered if no search triggered', () => {
    expect(result.current.items).toEqual(states);
  });

  test('triggering filter limits the items', () => {
    act(() => result.current.filter('tasm'));
    expect(result.current.items).toEqual(['Tasmania']);
  });

  test('resetting resets the list', () => {
    act(() => result.current.reset());
    expect(result.current.items).toEqual(states);
  });
});
