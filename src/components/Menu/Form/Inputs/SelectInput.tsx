import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    border-radius: 3px;
    display: inline-block;
    margin-right: 5px;
    padding: 5px;
    width: 208px;
    background-color: #d3d3d35e;
    border: 1px solid transparent;
  }
`;

const SelectInput = props => {
  return (
    <Select onChange={props.select}>
      <option value=''>Type - All</option>
      {props.types.map(tip => (
        <option key={tip} value={tip}>
          {tip}
        </option>
      ))}
    </Select>
  );
};

export default SelectInput;
