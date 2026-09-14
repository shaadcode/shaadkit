import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles['page']}>

      <main className={styles['main']}>
        <Image
          className={styles['logo']}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles['intro']}>
          <h1>
            <code className={styles['code']}>ShaadKit</code>
            {' '}
            — your Next.js starting point
          </h1>
          <p>
            A modern, batteries-included Next.js frontend boilerplate - ready for production.
            {' '}
            <a
              href="https://github.com/shaadcode/shaadkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
            {' '}
            to get started.
          </p>
        </div>
        <div className={styles['ctas']}>
          {/* <a
            className={styles['primary']}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles['logo']}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a> */}
          <a
            className={styles['secondary']}
            href="https://github.com/shaadcode/shaadkit"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github
          </a>
        </div>
      </main>
    </div>
  )
}
