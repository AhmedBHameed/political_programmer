const NAVIGATION_ROUTES = {
  login: {
    exact: true,
    path: '/login',
  },
  signup: {
    exact: true,
    path: '/signup',
  },
  help: {
    exact: true,
    path: '/help',
  },
  resetPassword: {
    exact: true,
    path: '/password/reset',
  },
  forgotPassword: {
    exact: true,
    path: '/password/forgotten',
  },
  blog: {
    strict: true,
    path: '/blog',
  },
  patients: {
    strict: true,
    path: '/patients',
  },
  orderAnalysis: {
    strict: true,
    path: '/order-analysis',
  },
  orderSteps: {
    strict: true,
    path: '/order-analysis/steps',
  },
  orderConfirmed: {
    strict: true,
    path: '/order-analysis/confirmed',
  },
  profileAccount: {
    strict: true,
    path: '/profile/account',
  },
  profileSettings: {
    strict: true,
    path: '/profile/account',
  },
};

export default NAVIGATION_ROUTES;
