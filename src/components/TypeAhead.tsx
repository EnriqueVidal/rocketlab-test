import * as React from 'react';
import styled from 'styled-components';
import { useToggle } from '../hooks/useToggle';
import { useFilteredList } from '../hooks/useFilteredList';
import { useSearch, SearchState } from '../hooks/useSearch';

interface Props {
  onChange?: (option: string) => void;
  options: string[];
  placeholder: string;
}

interface ListProps {
  show: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const SearchInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 0;
`;

const OptionList = styled.ul`
  margin: 0px !important;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  box-shadow: 0 4px 10px 4px #ddd;
  display: ${({ show }: ListProps) => (show ? 'block' : 'none')};
  position: relative;
`;

const SelectableItem = styled.li`
  box-sizing: content-box;
  cursor: pointer;
  list-style: none;
  margin: 0px !important;
  padding: 5px 10px 5px;
  user-select: none;

  &:hover {
    background-color: rgb(50, 115, 220);
    color: #fff;
  }
`;

const SearchIcon = styled.i`
  content: "";
  user-select: none;
`;


const defaultInputs: SearchState = {
  term: '',
  selected: '',
};

const TypeAhead = ({ onChange, options, placeholder }: Props) => {
  const { focused, toggle } = useToggle();
  const { items, filter, reset } = useFilteredList(options);
  const { inputs, search, select } = useSearch(defaultInputs);

  const handleSelect = (event) => {
    const { innerText: value } = event.target;
    select(value);
    toggle();
    reset();

    if (typeof onChange === 'function') onChange(value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    search(value);
    filter(value);
  };

  return (
    <Wrapper className="control has-icons-right">
      <SearchInput
        className="input"
        onChange={handleChange}
        onFocus={toggle}
        placeholder={placeholder}
        type="text"
        value={focused ? inputs.term : inputs.selected}
      />
      <span className="icon is-small is-right">
        <SearchIcon className="material-icons"> search </SearchIcon>
      </span>
      <OptionList show={focused}>
        {items.map((value: string) => (
          <SelectableItem key={value} onClick={handleSelect}>
            {value}
          </SelectableItem>
        ))}
      </OptionList>
    </Wrapper>
  );
};

TypeAhead.defaultProps = {
  placeholer: '',
};


export default TypeAhead;