import styles from "./styles.module.scss";
import { ReactComponent as Checkmark } from "shared/assets/svgs/checkmark.svg";

interface Props {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function Checkbox({ checked, onChange, disabled }: Props) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span>{checked && <Checkmark />}</span>
    </label>
  );
}
