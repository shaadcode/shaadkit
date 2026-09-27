import enAuthMessages from './auth.json'
import enCommonMessages from './common.json'
import enDashboardMessages from './dashboard.json'
import enProfileMessages from './profile.json'

const enMessages = {
  common: enCommonMessages,
  auth: enAuthMessages,
  dashboard: enDashboardMessages,
  profile: enProfileMessages,
} as const

export default enMessages
