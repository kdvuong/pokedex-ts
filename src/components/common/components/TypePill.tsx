import React, { FunctionComponent } from "react";
import { Type } from "enums";
import styled from "styled-components";
import { getTypePillColor, getTypeName } from "utils/TypeFilter";

const Background = styled.div<{ type: Type; size: number }>`
  width: auto;
  height: ${(props) => `${props.size}px`};
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => getTypePillColor(props.type)};
  flex-direction: row;
`;

const Icon = styled.img<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  margin: 0 0.75rem;
`;

const TypeName = styled.span`
  margin-right: 0.75rem;
  text-transform: uppercase;
  color: white;
`;

interface IProps {
  type: Type;
  size: number;
}

const TypePill: FunctionComponent<IProps> = ({ type, size }) => {
  return (
    <Background type={type} size={size * 2}>
      <Icon src={require(`assets/icons/svg/${type}-icon.svg`)} alt={`${type}-icon`} size={size} />
      <TypeName>{getTypeName(type)}</TypeName>
    </Background>
  );
};

export default TypePill;
