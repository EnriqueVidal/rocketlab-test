import { renderHook, act } from '@testing-library/react-hooks';
import { useSearch } from './useSearch';

describe('useSearch hook', () => {
  const { result } = renderHook(() => useSearch({ selected: '', term: '' }));

  test('searching does not affect selection', () => {
    const term = 'some term';

    act(() => result.current.search(term));
    expect(result.current.inputs.term).toBe(term);
  });

  test('selecting an option will clear the search term', () => {
    const selection = 'some selection';
    const currentTerm = 'some term';

    expect(result.current.inputs.term).toBe(currentTerm);

    act(() => result.current.select(selection));

    expect(result.current.inputs.selected).toBe(selection);
    expect(result.current.inputs.term).toBe('');
  });
});
