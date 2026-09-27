'use client'
import { Anchor, Button, Checkbox, Divider, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslations } from 'next-intl'
import { ClientLink } from '@/shared/lib/nextExtended'

export default function SignupPage() {
  const t = useTranslations('auth.signup')
  const tCommon = useTranslations('common')

  const form = useForm({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
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
                label={tCommon('fullName')}
                placeholder="Seyed Mojtaba Shadab"
                {...form.getInputProps('fullName')}
              />

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

              <PasswordInput
                label={tCommon('confirmPassword')}
                placeholder="••••••••••••"
                {...form.getInputProps('confirmPassword')}
              />

              <Checkbox
                mt={4}
                label={t('acceptTerms')}
                {...form.getInputProps('acceptTerms', { type: 'checkbox' })}
              />

              <Button type="submit" color="dark">
                {t('submit')}
              </Button>
            </Stack>
          </form>

          <Text ta="center" fz="sm" mt="md">
            {t('haveAccount')}
            {' '}
            <Anchor component={ClientLink} href="/auth/signin" c="dimmed" fw={600}>
              {t('signinLink')}
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
