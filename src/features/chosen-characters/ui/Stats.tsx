import { VerticalSeparator } from "shared/ui/vertical-separator/VerticalSeparator";
import styles from "./styles.module.scss";

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

interface StatsProps {
  stats: {
    power: number;
    mobility: number;
    technique: number;
    survivability: number;
    energy: number;
  };
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className={styles.stats}>
      <div className={styles.statsContainer}>
        <StatItem label="Power" value={stats.power} />
        <StatItem label="Mobility" value={stats.mobility} />
        <VerticalSeparator />
        <StatItem label="Technique" value={stats.technique} />
        <VerticalSeparator />
        <StatItem label="Survivability" value={stats.survivability} />
        <StatItem label="Energy" value={stats.energy} />
      </div>

      <p className={styles.footnote}>* Totals as average for squad</p>
    </div>
  );
}
