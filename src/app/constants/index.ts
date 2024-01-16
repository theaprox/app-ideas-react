
// SIDEBAR COMPONENT DATA
interface SidebarItems {
    key: string;
    label: string;
    level?: string;
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
        level: '1',
        label: 'Home',
        path: '/',
        icon: 'home',
    },
    {
        key: 'level',
        level: '1',
        label: 'Beginner Level',
        icon: 'level1',
        subitems:[
            {
                key: 'bin2dec',
                level: '2',
                label: 'Binary to Decilam',
                path: '/beginner/BinToDec',
            },
            {
                key: 'borderradius',
                level: '2',
                label: 'Border Radius Preview',
                path: '/beginner/BorderRadius',
            },
            {
                key: 'calculator',
                level: '2',
                label: 'Calculator',
                path: '/beginner/Calculator',
            }
        ]
    },
    {
        key: 'testpage',
        level: '1',
        label: 'TestPage',
        path: '/TestPage',
    },
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
      link: 'https://discord.gg/',
      faIcon: 'faDiscord',
    },
    {
      label: 'youtube',
      link: 'https://www.youtube.com/',
      faIcon: 'faYoutube',
    },
    {
      label: 'twitch',
      link: 'https://www.twitch.tv/',
      faIcon: 'faTwitch',
    },
    {
      label: 'twitter',
      link: 'https://www.twitter.com/',
      faIcon: 'faXTwitter',
    }
  ];