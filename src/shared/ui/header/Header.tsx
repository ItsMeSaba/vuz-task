import { ReactComponent as MortalKombatLogo } from "shared/assets/svgs/mortal-kombat-logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <MortalKombatLogo className={styles.logo} />
    </header>
  );
}
