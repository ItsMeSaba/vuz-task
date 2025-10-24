import styles from "./styles.module.scss";
import { ReactComponent as Checkmark } from "shared/assets/svgs/checkmark.svg";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export function PillButton({ children, onClick, isActive }: Props) {
  return (
    <button
      className={styles.pillButton}
      data-has-onclick={!!onClick}
      data-is-active={!!isActive}
      onClick={onClick}
    >
      {isActive && <Checkmark />}

      {children}
    </button>
  );
}
