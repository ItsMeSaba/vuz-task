import { useAppSelector } from "app/store/hooks";
import { useMemo } from "react";

export function useCharacterTags() {
  const { data } = useAppSelector((state) => state.characters);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();

    for (const character of data) {
      if (Array.isArray(character.tags)) {
        for (const tag of character.tags) {
          if (tag.tag_name) tagSet.add(tag.tag_name);
        }
      }
    }

    return Array.from(tagSet);
  }, [data]);

  return tags;
}
