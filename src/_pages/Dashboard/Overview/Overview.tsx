import { Card, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconBook, IconCalendar, IconChartBar, IconClipboardList } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export default function OverviewDashboardPage() {
  const t = useTranslations('dashboard')

  const stats = [
    { label: t('stats.classes'), value: '5', icon: IconBook, color: 'blue' },
    { label: t('stats.assignments'), value: '12', icon: IconClipboardList, color: 'orange' },
    { label: t('stats.calendar'), value: '3', icon: IconCalendar, color: 'green' },
    { label: t('stats.reports'), value: '8', icon: IconChartBar, color: 'violet' },
  ]
  return (
    <Stack gap="lg">
      <div>
        <Title order={3}>{t('title')}</Title>
        <Text c="dimmed" fz="sm">
          {t('description')}
        </Text>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {stats.map(stat => (
          <Card key={stat.label} withBorder padding="lg" radius="md">
            <Group justify="space-between">
              <div>
                <Text c="dimmed" fz="xs" tt="uppercase" fw={700}>
                  {stat.label}
                </Text>
                <Text fz={28} fw={700} mt={4}>
                  {stat.value}
                </Text>
              </div>
              <ThemeIcon color={stat.color} variant="light" size={48} radius="md">
                <stat.icon size={24} />
              </ThemeIcon>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
