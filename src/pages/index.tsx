import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FilterProjetcsButton } from '@/components/FilterProjectsButton'
import { useEffect, useState } from 'react'
import { ProjectsGrid } from '@/components/ProjectsGrid'

import styles from '@/styles/Home.module.scss'

import react from '@/../public/react.svg'
import goFinances from '@/../public/covers/reactnative/go-finances.png'
import habts from '@/../public/covers/reactnative/habits.png'
import nlwCopa from '@/../public/covers/reactnative/nlw-copa.png'
import nlwESports from '@/../public/covers/reactnative/nlw-esports.png'
import nlwGamePlay from '@/../public/covers/reactnative/nlw-game-play.png'

import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

type Repos = {
  id: string;
  cover_url: string;
  html_url: string;
  description: string;
  language: string;
}[]

type ReposProps = {
  repos: {
    react_js: Repos,
    react_native: Repos,
    node_js: Repos
  }
}

export default function Home({repos}: ReposProps) {
  const techs = ['ReactJS', 'React Native', 'Node.js'];
  const [techSelected, setTechSelected] = useState(techs[0]);
  const [repoShow, setRepoShow] = useState<Repos>([])

  useEffect(() => {
    if(techSelected === 'ReactJS') {
      setRepoShow(repos.react_js)
    }else if(techSelected === 'React Native') {
      setRepoShow(repos.react_native)
    }else if(techSelected === 'Node.js') {
      setRepoShow(repos.node_js)
    }
  }, [techSelected, repos.react_js, repos.react_native, repos.node_js])

  return (
    <>
      <Head>
        <title>MY - WEBSITE</title>
        <meta name="description" content="my website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.contentContainer} >
        <div className={styles.content}>
          <section className={styles.hero}>
            <span>👏 Hey, welcome</span>
            <h1>My website with <span>React</span> projects.</h1>
            <p>
              There are more than 50 projects on GitHub <br />
              <span>See some of them here</span>
            </p>
          </section>

          <Image
            src={react}
            alt="desk codding"
          />
        </div>

        <div className={styles.techs}>
          {techs.map(tech => {
            return (
              <FilterProjetcsButton
                key={tech}
                tech={tech}
                handleSelectTech={setTechSelected}
                selected={tech === techSelected}
              />
            )
          })}
        </div>

        <ProjectsGrid repos={repoShow} />
        
      </main>
      <footer className={styles.footer}>
        <strong>Éverton Schultz - DEV FULLSTACK - React</strong>
      </footer>
    </>
  )
}

import server from '@/pages/api/server.json'

export const getStaticProps: GetStaticProps = async () => {
  const { repos } = server

  return {
    props: {
      repos
    }
  }
}
