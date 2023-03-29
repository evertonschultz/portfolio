import styles from '@/styles/About.module.scss'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <Head>
        <title>MY - WEBSITE</title>
        <meta name="description" content="my website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
      <header>
        <h2>
          Olá, Tudo bem? <br />
          Você pode me chamar de Éverton.
        </h2>
        <h3>
          Vou resumir aqui minha jornada como DEV:
        </h3>

        <p>
          Sou graduado em Sistemas de Informação. Então dessa forma tive diversos ensinamentos de engenharia, análise, gestão e desenvolvimento de software. Atualmente meu foco está em desenvolvimento de aplicações utilizando Javascript/React e todo o seu ecossistema de tecnologias. Tenho certificado com carga horária estimada  de 160h em desenvolvimento ReactJS, React Native e Nodejs. Mas além disso, exerço aprendizado contínuo no Ignite da Rocketseat.
        </p>
        <p>
          <strong>Algumas hard skills: </strong>
          ReactJS (Next.js, Vite.js), React Native (CLI, Expo), Node.js, HTML, CSS (Tailwindcss, Stitches, Chackra UI), Javascript, Typescript, Linting, Axios, Fastify, Prisma, Zod, Git/Github, ContextAPI, Imutabilidade, Componentização, Formulários, SPA, Performance, Design Systems, etc.
        </p>
      </header>
      

      <div className={styles.contacts}>
          <Link
            href="mailto:evertonf.m.schultz98@gmail.com?subject=Contato via website"
            className={styles.contact}>
            <strong>
              E-mail <span className={inter.className}>-&gt;</span>
            </strong>
            <p>
              evertonf.m.schultz98@gmail.com
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/éverton-schultz-824a1612b/"
            target="_blank"
            className={styles.contact}
          >
            <strong>
              Linkedin <span className={inter.className}>-&gt;</span>
            </strong>
            <p>
              Éverton Schultz
            </p>
          </Link>
        </div>
    </main>
    </>
  )
}