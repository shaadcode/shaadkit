'use client';
import { Anchor, Button, Paper, Stack, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ClientLink } from '@/shared/lib/nextExtended';

export default function ForgotPasswordPage() {
  const t = useTranslations('auth.forgotPassword');
  const tCommon = useTranslations('common');
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    setSubmitted(true);
  };

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

        {submitted
          ? (
              <Stack gap="md">
                <Text ta="center" c="dimmed" fz="sm">
                  {t('success')}
                </Text>

                <Button component={ClientLink} td="none" href="/auth/signin" color="dark">
                  {t('backToSignin')}
                </Button>
              </Stack>
            )
          : (
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <TextInput
                    label={tCommon('email')}
                    placeholder={tCommon('emailPlaceholder')}
                    {...form.getInputProps('email')}
                  />

                  <Button type="submit" color="dark">
                    {t('submit')}
                  </Button>
                </Stack>
              </form>
            )}

        <Text ta="center" fz="sm" mt="md">
          {t('rememberPassword')}
          {' '}
          <Anchor component={ClientLink} href="/auth/signin" c="dimmed" fw={600}>
            {t('signinLink')}
          </Anchor>
        </Text>

        <Text ta="center" fz="xs" c="dimmed" mt={60}>
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
  );
}
