'use client'
import { Anchor, Button, Code, Group, SegmentedControl, Stack, Text, Title, useMantineColorScheme } from '@mantine/core'

function Hero() {
  const { setColorScheme, colorScheme } = useMantineColorScheme()
  return (
    <Stack px="sm" h="100%" justify="center" align="center">
      <Stack style={{ flexDirection: 'column' }} component="main">
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
          <Anchor
            href="https://github.com/shaadcode/shaadkit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </Anchor>
          {' '}
          to get started.
        </Text>
        <Group grow>
          <Button
            variant="outline"
            radius={999}
            component="a"
            target="_blank"
            href="https://github.com/shaadcode/shaadkit"
          >
            View on Github
          </Button>

          <Button
            radius={999}
            component="a"
            target="_blank"
            href="https://github.com/shaadcode/shaadkit/issues/new"
          >
            Report a problem
          </Button>
        </Group>
        <SegmentedControl
          value={colorScheme}
          onChange={setColorScheme}
          data={['light', 'dark', 'auto']}
        />
      </Stack>
    </Stack>
  )
}

export default Hero
