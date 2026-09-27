'use client'
import { Avatar, Badge, Button, Card, Divider, FileButton, Group, Paper, PasswordInput, SimpleGrid, Stack, Tabs, Text, Textarea, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconDeviceFloppy, IconLock, IconMail, IconPhone, IconSchool, IconTrash, IconUpload, IconUser } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ProfilePage() {
  const t = useTranslations('profile')
  const tCommon = useTranslations('common')
  const [avatar, setAvatar] = useState<string | null>(null)

  const profileForm = useForm({
    initialValues: {
      fullName: 'Seyed Mojtaba Shadab',
      email: 'shaadcode@gmail.com',
      phone: '+98 912 000 0000',
      school: 'ShaadKit Academy',
      bio: '',
    },
  })

  const passwordForm = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const handleProfileSubmit = (values: typeof profileForm.values) => {
    // eslint-disable-next-line no-console
    console.log('profile', values)
  }

  const handlePasswordSubmit = (values: typeof passwordForm.values) => {
    // eslint-disable-next-line no-console
    console.log('password', values)
  }

  return (
    <Stack gap="lg">
      {/* Header */}
      <div>
        <Title order={3}>{t('title')}</Title>
        <Text c="dimmed" fz="sm">
          {t('description')}
        </Text>
      </div>

      {/* Profile summary card */}
      <Card withBorder padding="lg" radius="md">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Group>
            <Avatar src={avatar} size={80} radius="xl" color="blue">
              {profileForm.values.fullName.charAt(0)}
            </Avatar>
            <div>
              <Title order={4}>{profileForm.values.fullName}</Title>
              <Text c="dimmed" fz="sm">
                {profileForm.values.email}
              </Text>
              <Badge mt="xs" color="blue" variant="light">
                {t('role.student')}
              </Badge>
            </div>
          </Group>

          <Group gap="xs">
            <FileButton
              onChange={(file) => {
                if (file)
                  setAvatar(URL.createObjectURL(file))
              }}
              accept="image/png,image/jpeg"
            >
              {props => (
                <Button {...props} variant="default" leftSection={<IconUpload size={16} />}>
                  {t('actions.upload')}
                </Button>
              )}
            </FileButton>

            <Button
              variant="subtle"
              color="red"
              leftSection={<IconTrash size={16} />}
              onClick={() => setAvatar(null)}
            >
              {t('actions.remove')}
            </Button>
          </Group>
        </Group>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="general">
        <Tabs.List>
          <Tabs.Tab value="general" leftSection={<IconUser size={16} />}>
            {t('tabs.general')}
          </Tabs.Tab>
          <Tabs.Tab value="security" leftSection={<IconLock size={16} />}>
            {t('tabs.security')}
          </Tabs.Tab>
        </Tabs.List>

        {/* General tab */}
        <Tabs.Panel value="general" pt="md">
          <Paper withBorder p="lg" radius="md">
            <form onSubmit={profileForm.onSubmit(handleProfileSubmit)}>
              <Stack gap="md">
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput
                    label={tCommon('fullName')}
                    leftSection={<IconUser size={16} />}
                    {...profileForm.getInputProps('fullName')}
                  />
                  <TextInput
                    label={tCommon('email')}
                    leftSection={<IconMail size={16} />}
                    {...profileForm.getInputProps('email')}
                  />
                  <TextInput
                    label={t('fields.phone')}
                    leftSection={<IconPhone size={16} />}
                    {...profileForm.getInputProps('phone')}
                  />
                  <TextInput
                    label={t('fields.school')}
                    leftSection={<IconSchool size={16} />}
                    {...profileForm.getInputProps('school')}
                  />
                </SimpleGrid>

                <Textarea
                  label={t('fields.bio')}
                  placeholder={t('fields.bioPlaceholder')}
                  minRows={3}
                  autosize
                  {...profileForm.getInputProps('bio')}
                />

                <Group justify="flex-end">
                  <Button
                    type="submit"
                    color="dark"
                    leftSection={<IconDeviceFloppy size={16} />}
                  >
                    {tCommon('save')}
                  </Button>
                </Group>
              </Stack>
            </form>
          </Paper>
        </Tabs.Panel>

        {/* Security tab */}
        <Tabs.Panel value="security" pt="md">
          <Paper withBorder p="lg" radius="md">
            <form onSubmit={passwordForm.onSubmit(handlePasswordSubmit)}>
              <Stack gap="md" maw={480}>
                <PasswordInput
                  label={t('fields.currentPassword')}
                  {...passwordForm.getInputProps('currentPassword')}
                />
                <PasswordInput
                  label={t('fields.newPassword')}
                  {...passwordForm.getInputProps('newPassword')}
                />
                <PasswordInput
                  label={tCommon('confirmPassword')}
                  {...passwordForm.getInputProps('confirmPassword')}
                />

                <Divider />

                <Group justify="flex-end">
                  <Button type="submit" color="dark" leftSection={<IconLock size={16} />}>
                    {t('actions.updatePassword')}
                  </Button>
                </Group>
              </Stack>
            </form>
          </Paper>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  )
}
