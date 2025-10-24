import { Ability, Character } from "shared/types/global";

const getAbilityScore = (
  character: Character,
  abilityName: Ability
): number => {
  const ability = character.abilities.find(
    (a) => a.abilityName === abilityName
  );

  return ability?.abilityScore ?? 0;
};

export function getAbilityScores(
  character: Character
): Record<Ability, number> {
  return Object.values(Ability).reduce((acc, ability) => {
    acc[ability] = getAbilityScore(character, ability);
    return acc;
  }, {} as Record<Ability, number>);
}
