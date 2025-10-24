import { Character } from "@/shared/types/global";
import styles from "./styles.module.scss";

interface CharacterAvatarProps {
  character: Character;
  onRemove: (character: Character) => void;
}

export function CharacterAvatar({ character, onRemove }: CharacterAvatarProps) {
  return (
    <div className={styles.avatarWrapper}>
      <img
        src={character.thumbnail}
        alt={character.name}
        className={styles.avatar}
      />

      <button
        className={styles.removeButton}
        onClick={() => onRemove(character)}
        aria-label={`Remove ${character.name}`}
      >
        Remove
      </button>
    </div>
  );
}
