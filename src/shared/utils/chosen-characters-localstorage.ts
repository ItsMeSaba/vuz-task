const STORAGE_KEY = "chosenCharacters";

export function toggleChosenCharacterLocalStorage(characterId: number) {
  let chosen: number[] = [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) chosen = JSON.parse(stored);
  } catch {
    console.warn("Invalid chosenCharacters data in localStorage — resetting");
    chosen = [];
  }

  const index = chosen.indexOf(characterId);

  if (index !== -1) {
    chosen.splice(index, 1);
  } else {
    chosen.push(characterId);
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chosen));
  } catch (err) {
    console.error("Failed to update localStorage:", err);
  }
}

export function getChosenCharactersLocalStorage() {
  let chosen: number[] = [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) chosen = JSON.parse(stored);
  } catch {
    console.warn("Invalid chosenCharacters data in localStorage — resetting");
    chosen = [];
  }

  return chosen;
}
