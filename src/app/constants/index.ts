// Handle Font AWesome Icons for export


// SIDEBAR COMPONENT DATA
interface SidebarItems {
    key: string;
    label: string;
    path?: string;
    icon?: string;
    faicon?: string;
    subitems?: SidebarItems[]; // Optional array of child menu items
  }
  
  // SIDEBAR COMPONENT list to be rendered inside sidebar.
  // Will be rendered in chronological order.
  export const SIDEBAR: SidebarItems[] = [
    {
        key: 'home',
        label: 'Home',
        path: '/#',
        icon: 'HomeIcon',
    },
    {
        key: 'divider',
        label: 'Divider'
    },
    {
        key: 'bin2dec',
        label: 'Binary to Decimal',
        path: '/page/BinToDec'
    }
    // More items...
  ];
  
  // FOOTER COMPONENT DATA
  
  interface FooterItems {
    label: string;
    link: string;
    icon?: string;
    faIcon?: string; // Optional
  }
  
  export const FOOTER: FooterItems[] = [
    {
      label: 'discord',
      link: 'https://discord.gg/aprox-plays-954030958980497429',
      faIcon: 'faDiscord',
    },
    {
      label: 'youtube',
      link: 'https://www.youtube.com/@aproxplays',
      faIcon: 'faYoutube',
    },
    {
      label: 'twitch',
      link: 'https://www.twitch.tv/aproxplayz',
      faIcon: 'faTwitch',
    },
    {
      label: 'twitter',
      link: 'https://www.twitter.com/aproxplays',
      faIcon: 'faXTwitter',
    }
  ];