'use client'
import { Anchor, Button, Checkbox, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslations } from 'next-intl'
import { ClientLink } from '@/shared/lib/nextExtended'

export default function SigninPage() {
  const t = useTranslations('auth.signin')
  const tCommon = useTranslations('common')
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <Stack px="md" mih="100dvh" justify="center" align="center">
      <Paper w="100%" maw={420} p={0} withBorder={false}>
        <Stack align="center" gap="xs" mb="xl">
          <Title order={3} ta="center">
            {t('title')}
          </Title>
          <Text c="dimmed" ta="center">
            {t('description')}
          </Text>
        </Stack>

        <Stack gap="sm">
          <Button component={ClientLink} td="none" href="#" variant="default">
            {t('google')}
          </Button>

          <Button component={ClientLink} td="none" href="#" variant="default">
            {t('github')}
          </Button>

          <Divider label={tCommon('or')} />

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                label={tCommon('email')}
                placeholder={tCommon('emailPlaceholder')}
                {...form.getInputProps('email')}
              />

              <PasswordInput
                label={tCommon('password')}
                placeholder="••••••••••••"
                {...form.getInputProps('password')}
              />

              <Group justify="space-between" mt={4}>
                <Checkbox
                  label={tCommon('rememberMe')}
                  {...form.getInputProps('remember')}
                />
                <Anchor href="/auth/forgot-password" fz="sm" c="dimmed">
                  {t('forgotPassword')}
                </Anchor>
              </Group>

              <Button type="submit" color="dark">
                {tCommon('continue')}
              </Button>
            </Stack>
          </form>

          <Text ta="center" fz="sm" mt="xs">
            {t('noAccount')}
            {' '}
            <Anchor component={ClientLink} href="/auth/signup" c="dimmed" fw={600}>
              {t('signupLink')}
            </Anchor>
          </Text>
        </Stack>
        <Text ta="center" fz="xs" c="dimmed" mt={60}>
          By continuing, you agree to our
          {tCommon.rich('termsNotice', {
            terms: chunks => (
              <Anchor textWrap="nowrap" inherit fw={600} href="#">
                {chunks}
              </Anchor>
            ),
            privacy: chunks => (
              <Anchor textWrap="nowrap" inherit fw={600} href="#">
                {chunks}
              </Anchor>
            ),
          })}
        </Text>
      </Paper>
    </Stack>
  )
}
