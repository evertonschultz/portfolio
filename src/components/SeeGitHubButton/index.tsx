import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export function SeeGitHubButton() {

  return (
    <a
      className={styles.seeGitHubButton}
      href="https://github.com/evertonschultz"
      target="_blank"
    >
      <FaGithub color="#eba417" />
      See my Github
    </a>
  )
}