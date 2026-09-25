import arkenv from '@/.arkenv'
/**
 * Environment variable schema.
 * In Next.js, import the generated `arkenv` from `@/.arkenv` to validate variables.
 * Enforces client/server separation and prevents secret leaks.
 */
export const env = arkenv({
  ANALYZE: 'boolean?',
})
