import * as React from 'react';
import styled from 'styled-components';
import { useToggle } from '../hooks/useToggle';
import { useFilteredList } from '../hooks/useFilteredList';
import { useSearch } from '../hooks/useSearch';

interface Props {
  className?: string;
  id: string;
  onChange?: (option: string) => void;
  options: string[];
  placeholder?: string;
  value: string;
}

interface ListProps {
  show: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
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

const TypeAhead = ({
  className, id, onChange, options, placeholder, value,
}: Props) => {
  const { focused, toggle } = useToggle();
  const { items, filter, reset } = useFilteredList(options);
  const { inputs, search, select } = useSearch({ term: '', selected: value });

  const handleSelect = (event) => {
    const { innerText } = event.target;
    select(innerText);
    toggle();
    reset();

    if (typeof onChange === 'function') onChange(innerText);
  };

  const handleChange = (event) => {
    const { value: text } = event.target;
    search(text);
    filter(text);
  };

  return (
    <Wrapper className="control has-icons-right">
      <input
        className={className}
        id={id}
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
        {items.map((item: string) => (
          <SelectableItem key={item} onClick={handleSelect}>
            {item}
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
