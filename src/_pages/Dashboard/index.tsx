'use client'
import { AppShell, Avatar, Burger, Group, Menu, NavLink, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBell, IconBook, IconCalendar, IconChartBar, IconClipboardList, IconHome, IconLogout, IconSettings, IconUser } from '@tabler/icons-react'
import { useLocale, useTranslations } from 'next-intl'
import { useLayoutEffect } from 'react'

import { redirect, usePathname } from '@/shared/config/nextIntl/navigation'
import { ThemeToggle } from '@/shared/lib/mantineExtended'
import { ClientLink } from '@/shared/lib/nextExtended'
import classes from './index.module.css'

export default function DashboardLayout(props: LayoutProps<'/[locale]/dashboard'>) {
  const [opened, { toggle }] = useDisclosure()
  const pathname = usePathname()
  const t = useTranslations('dashboard')
  const locale = useLocale()
  const navItems = [
    { label: t('nav.overview'), href: '/dashboard/overview', icon: IconHome },
    { label: t('nav.classes'), href: '/dashboard/classes', icon: IconBook },
    { label: t('nav.assignments'), href: '/dashboard/assignments', icon: IconClipboardList },
    { label: t('nav.calendar'), href: '/dashboard/calendar', icon: IconCalendar },
    { label: t('nav.reports'), href: '/dashboard/reports', icon: IconChartBar },
    { label: t('nav.settings'), href: '/dashboard/settings', icon: IconSettings },
  ]

  useLayoutEffect(() => {
    if (pathname === 'dashboard') {
      redirect({ href: '/dashboard/overview', locale })
    }
  })

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={4}>ShaadKit</Title>
            <ThemeToggle />
          </Group>

          <Group>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group gap="xs">
                    <Avatar color="blue" radius="xl">
                      SK
                    </Avatar>
                    <Text fz="sm" fw={500} visibleFrom="sm">
                      {t('user.name')}
                    </Text>
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>{t('user.account')}</Menu.Label>
                <Menu.Item
                  component={ClientLink}
                  href="/dashboard/profile"
                  leftSection={<IconUser size={14} />}
                >
                  {t('user.profile')}
                </Menu.Item>
                <Menu.Item leftSection={<IconBell size={14} />}>
                  {t('user.notifications')}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  color="red"
                  leftSection={<IconLogout size={14} />}
                  component={ClientLink}
                  href="/auth/signin"
                >
                  {t('user.logout')}
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="xs">
          {navItems.map(item => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              classNames={{ label: classes['nav-item-label'] }}
              variant="default"
              leftSection={<item.icon size={18} />}
            />
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        {props.children}

      </AppShell.Main>
    </AppShell>
  )
}
