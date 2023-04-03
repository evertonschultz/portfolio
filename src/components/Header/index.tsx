import { ActiveLink } from '../ActiveLink';

import { SeeGitHubButton } from '../SeeGitHubButton';

import styles from './styles.module.scss';

import logo from '@/../public/logo.png'
import Image from 'next/image';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Image
            src={logo}
            alt="Everton Schultz - Dev React"
            width={200}
            height={80}
          />
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