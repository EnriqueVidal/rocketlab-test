import { renderHook, act } from '@testing-library/react-hooks';
import { useSearch } from './useSearch';

describe('useSearch hook', () => {
  const initialValue = '';
  const { result } = renderHook(() => useSearch(initialValue));

  test('searching does not affect selection', () => {
    const term = 'some term';

    act(() => result.current.search(term));
    expect(result.current.inputs.term).toBe(term);
  });

  test('selecting an option will make the search term the same as selected field', () => {
    const selection = 'some selection';
    const currentTerm = 'some term';

    expect(result.current.inputs.term).toBe(currentTerm);

    act(() => result.current.select(selection));

    expect(result.current.inputs.selected).toBe(selection);
    expect(result.current.inputs.term).toBe(selection);
  });

  test('clear with no argument will reset both search and term', () => {
    act(() => result.current.clear());
    expect(result.current.inputs.selected).toBe(initialValue);
    expect(result.current.inputs.term).toBe(initialValue);
  });

  test('clear with argument will reset both search and term to new value', () => {
    const newValue = 'foo';

    act(() => result.current.clear(newValue));

    expect(result.current.inputs.selected).toBe(newValue);
    expect(result.current.inputs.term).toBe(newValue);
  });
});
