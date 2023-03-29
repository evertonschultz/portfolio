import styles from './styles.module.scss';

interface TechnologiesProps {
  tech: string;
  handleSelectTech: (tech: string) => void;
  selected: boolean;
}

export function FilterProjetcsButton({ tech, handleSelectTech, selected }: TechnologiesProps) {

  return (
    <button
      type="button"
      className={styles.techButton}
      onClick={() => handleSelectTech(tech)}
      style={
        {
          background: selected ? '#61dafb' : '#1f2729',
          color: selected ? '#fff' : '#e1e1e6',
        }
      }
    >
      {tech}
    </button>
  )
}