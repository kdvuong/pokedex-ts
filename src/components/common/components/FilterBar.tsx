import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledToolbar } from "components/common/styled/index.d";
import { FilterProps } from "types";
import ResponsiveSelect from "./ResponsiveSelect";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
`;

const IconContainer = styled.div`
  height: 20px;
  margin-right: 16px;
`;

interface IProps {
  filters: FilterProps[];
  filteredCount: number;
}

const FilterBar: FunctionComponent<IProps> = ({ filters, filteredCount }) => {
  return (
    <StyledToolbar>
      {/* result bar */}
      <IconContainer>
        <img
          src={require("assets/icons/svg/pokeball.svg")}
          style={{ width: 20, height: 20 }}
          alt="pokeball-icon"
        />
      </IconContainer>
      <StyledDiv>
        {filters.map((filter) => (
          <ResponsiveSelect {...filter} key={filter.filter.getName()} />
        ))}
        {/* <FilterCount>
          <span>{filteredCount} Pokemons</span>
        </FilterCount> */}
      </StyledDiv>
    </StyledToolbar>
  );
};

export default FilterBar;
