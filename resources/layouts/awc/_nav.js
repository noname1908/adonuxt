export default {
  items: [
    {
      name: 'Dashboard',
      url: '/awc/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements'
    },
    {
      name: 'Components',
      url: '/awc/account',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buttons',
          url: '/awc/account',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/awc/account',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/awc/account',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/awc/account',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/awc/account',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/awc/account',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/awc/account',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Icons',
      url: '/awc/account',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/awc/account',
          icon: 'icon-star'
        },
        {
          name: 'Simple Line Icons',
          url: '/awc/account',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/awc/account',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/awc/account',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/awc/account',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/awc/account',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/awc/account',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/awc/account',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/awc/account',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
