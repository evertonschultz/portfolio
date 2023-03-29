import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

type Repos = {
  id: string;
  cover_url: string;
  html_url: string;
  description: string;
  language: string;
}[]

type RepoProps = {
  repos: Repos
}

export function ProjectsGrid({repos}: RepoProps) {
  return (
    <div className={styles.grid}>
      {repos.map(repo => {
        return (
          <Link
            key={repo.id}
            href={repo.html_url}
            className={styles.card}
            target="_blank"
          >
            <Image
              src={repo.cover_url}
              alt={repo.description}
              width={200}
              height={180}
            />

            <div className={styles.gradient} />

            <p>
              {repo.description}
            </p>
            <div>
              <span>{repo.language}</span>
              <strong>Open on GitHub</strong>
            </div>
          </Link>
        )
      })}
    </div>
  )
}