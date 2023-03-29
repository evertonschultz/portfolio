import { ActiveLink } from '../ActiveLink';

import { SeeGitHubButton } from '../SeeGitHubButton';

import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <span>Éverton Schultz</span>
          <nav className={styles.headerNav}>
            <ActiveLink activeClassName={styles.active} href="/">
              <span>Home</span>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/about">
              <span>About</span>
            </ActiveLink>
          </nav>

          <SeeGitHubButton />
        </div>
      </header>
      <header className={styles.headerContainerMobile}>
        <div className={styles.headerContentMobile}>
          <nav className={styles.headerNav}>
            <ActiveLink activeClassName={styles.active} href="/">
              <span>Home</span>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/about">
              <span>About</span>
            </ActiveLink>
          </nav>
          <SeeGitHubButton />
        </div>
      </header>
    </>
  )
}