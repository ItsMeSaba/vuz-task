import { VerticalSeparator } from "shared/ui/vertical-separator/VerticalSeparator";
import styles from "./styles.module.scss";

interface Props {
  stats: {
    power: number;
    mobility: number;
    technique: number;
    survivability: number;
    energy: number;
  };
}

const statColumns = [
  { type: "data", label: "Power", value: "power" },
  { type: "data", label: "Mobility", value: "mobility" },
  { type: "separator" },
  { type: "data", label: "Technique", value: "technique" },
  { type: "separator" },
  { type: "data", label: "Survivability", value: "survivability" },
  { type: "data", label: "Energy", value: "energy" },
];

export function Stats({ stats }: Props) {
  return (
    <div className={styles.stats}>
      <div className={styles.statsContainer}>
        {statColumns.map((stat) =>
          stat.type === "separator" ? (
            <VerticalSeparator key={stat.value} />
          ) : (
            <StatItem
              key={stat.value}
              label={stat.label!}
              value={stats[stat.value as keyof typeof stats]}
            />
          )
        )}
      </div>

      <p className={styles.footnote}>* Totals as average for squad</p>
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: number;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>{value.toFixed(2)}</div>
    </div>
  );
}
