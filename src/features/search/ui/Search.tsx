import { ReactComponent as SearchIcon } from "shared/assets/svgs/search.svg";
import { setQuery } from "app/store/slices/characters.slice";
import { useDebounce } from "shared/hooks/use-debounce";
import { useDispatch } from "react-redux";

import styles from "./styles.module.scss";

export function Search() {
  const dispatch = useDispatch();

  const onSearchChange = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuery(e.target.value));
    },
    500
  );

  return (
    <div className={styles.searchContainer}>
      <div className={styles.line} />

      <div className={styles.search}>
        <SearchIcon />

        <input
          type="text"
          placeholder="Search Characters..."
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
