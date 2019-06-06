import React from 'react';
import TextInput from './Inputs/TextInput';
import SelectInput from './Inputs/SelectInput';
import ButtonInput from './Inputs/ButtonInput';
import styled from 'styled-components';

const Bar = styled.div`
  display: inline-block;
  background-color: #d3d3d35e;
  height: 25px;
  width: 1px;
  padding: 5px 0;
  position: absolute;
`;

const Form = props => {
  return (
    <div>
      <TextInput search={props.search} searchHandler={props.searchHandler} />
      <SelectInput types={props.types} select={props.select} />
      <ButtonInput isLine={true} changeDisplay={props.changeDisplay} List>
        {props.children}
      </ButtonInput>
      <Bar />
      <ButtonInput isLine={false} changeDisplay={props.changeDisplay}>
        {props.children}
      </ButtonInput>
    </div>
  );
};

export default Form;
