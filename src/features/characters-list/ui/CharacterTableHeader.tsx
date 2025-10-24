import styles from "./styles.module.scss";

export function CharacterTableHeader() {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th>Character</th>
        <th>Tags</th>
        <th>Power</th>
        <th>Mobility</th>
        <th>Technique</th>
        <th>Survivability</th>
        <th>Energy</th>
      </tr>
    </thead>
  );
}
