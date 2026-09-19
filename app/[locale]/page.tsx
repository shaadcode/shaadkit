import { Button, Code, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

export default function Home() {
  return (
    <Stack h="100%" bg="black" justify="center" align="center">
      <Stack style={{ flexDirection: 'column' }} component="main">
        <Image

          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div>
          <Title tt="capitalize">
            <Code fz={36}>ShaadKit</Code>
            {' '}
            —
            <br />
            your Next.js starting point
          </Title>
          <Text maw={400}>
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
          </Text>
        </div>
        <div>
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

            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          <Button
            variant="outline"
            radius={999}
            component="a"
            target="_blank"
            href="https://github.com/shaadcode/shaadkit"
          >
            View on Github
          </Button>
        </div>
      </Stack>
    </Stack>
  )
}
