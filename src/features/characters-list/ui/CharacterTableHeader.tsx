import styles from "./styles.module.scss";

const headers = [
  "Character",
  "Tags",
  "Power",
  "Mobility",
  "Technique",
  "Survivability",
  "Energy",
];

export function CharacterTableHeader() {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}
