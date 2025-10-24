import { AbilityName, Character } from "@/shared/types/global";

export function calculateAverageStats(characters: Character[]) {
  if (characters.length === 0) {
    return {
      power: 0,
      mobility: 0,
      technique: 0,
      survivability: 0,
      energy: 0,
    };
  }

  const totals = characters.reduce(
    (acc, character) => {
      character.abilities.forEach((ability) => {
        const key = ability.abilityName.toLowerCase() as Lowercase<AbilityName>;
        acc[key] += ability.abilityScore;
      });
      return acc;
    },
    { power: 0, mobility: 0, technique: 0, survivability: 0, energy: 0 }
  );

  const count = characters.length;
  return {
    power: totals.power / count,
    mobility: totals.mobility / count,
    technique: totals.technique / count,
    survivability: totals.survivability / count,
    energy: totals.energy / count,
  };
}
