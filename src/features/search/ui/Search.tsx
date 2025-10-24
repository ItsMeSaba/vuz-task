import { ReactComponent as SearchIcon } from "shared/assets/svgs/search.svg";
import { setQuery } from "app/store/slices/characters.slice";
import { useDispatch } from "react-redux";

import styles from "./styles.module.scss";

export function Search() {
  const dispatch = useDispatch();

  return (
    <div className={styles.searchContainer}>
      <div className={styles.line} />

      <div className={styles.search}>
        <SearchIcon />

        <input
          type="text"
          placeholder="Search Characters..."
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      </div>
    </div>
  );
}
