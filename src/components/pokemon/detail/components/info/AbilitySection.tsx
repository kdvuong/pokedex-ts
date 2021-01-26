import React, { FunctionComponent, useCallback } from "react";
import Section from "../shared/Section";
import AbilityInfo from "./AbilityInfo";
import styled from "styled-components";
import { PokemonAbility } from "shared/interfaces";

const AbilitiesContainer = styled.div`
  margin: 0 3rem;
`;

interface IProps {
  abilities: PokemonAbility[];
}

const AbilitySection: FunctionComponent<IProps> = ({ abilities }) => {
  const getAbilityName = useCallback((ability) => {
    const name = ability.name.replace(/-/g, " ");
    return ability.is_hidden ? `${name} (HIDDEN)` : name;
  }, []);

  const mapAbilities = useCallback(
    (abilities: PokemonAbility[]) => {
      const elems = [];
      for (let ability of abilities) {
        let abilityInfo = (
          <AbilityInfo
            name={getAbilityName(ability)}
            effect={ability.short_effect}
            id={ability.id}
            key={ability.name}
          />
        );
        if (ability.is_hidden) {
          elems.push(abilityInfo);
        } else {
          elems.unshift(abilityInfo);
        }
      }
      return elems;
    },
    [getAbilityName]
  );
  return (
    <Section title="Abilities">
      <AbilitiesContainer className="row no-gutters">
        {abilities && mapAbilities(abilities)}
      </AbilitiesContainer>
    </Section>
  );
};

export default AbilitySection;
