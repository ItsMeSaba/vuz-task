import { Character } from "shared/types/global";

const getAbilityScore = (character: Character, abilityName: string): number => {
  const ability = character.abilities.find(
    (a) => a.abilityName === abilityName
  );
  console.log(ability);
  return ability?.abilityScore ?? 0;
};

enum Ability {
  Power = "Power",
  Mobility = "Mobility",
  Technique = "Technique",
  Survivability = "Survivability",
  Energy = "Energy",
}

export function getAbilityScores(
  character: Character
): Record<Ability, number> {
  return Object.values(Ability).reduce((acc, ability) => {
    acc[ability as Ability] = getAbilityScore(character, ability);
    return acc;
  }, {} as Record<Ability, number>);
}
