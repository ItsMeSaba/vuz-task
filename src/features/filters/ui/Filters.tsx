import { clearFilters, toggleFilter } from "app/store/slices/characters.slice";
import { capitalizeFirstLetter } from "shared/utils/capitilize-first-letter";
import { useCharacterTags } from "shared/hooks/use-character-tags";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { PillButton } from "shared/ui/pill-button/PillButton";

import styles from "./styles.module.scss";

export function Filters() {
  const availableFilters = useCharacterTags();
  const dispatch = useAppDispatch();
  const { filters: activeFilters } = useAppSelector(
    (state) => state.characters
  );

  const allFilters = [...availableFilters, "My Team"];

  return (
    <div className={styles.filters}>
      {allFilters.map((filter) => (
        <PillButton
          key={filter}
          onClick={() => {
            dispatch(toggleFilter(filter));
          }}
          isActive={activeFilters.includes(filter)}
        >
          {capitalizeFirstLetter(filter)}
        </PillButton>
      ))}

      {activeFilters.length > 0 && (
        <button
          className={styles.clearAll}
          onClick={() => {
            dispatch(clearFilters());
          }}
        >
          Clear All
        </button>
      )}
    </div>
  );
}
