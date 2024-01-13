// Handle Font AWesome Icons for export

import { Label } from "@mui/icons-material";


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
                key: 'todo',
                level: '2',
                label: 'TODO List',
                path: '/#',
            },
            {
                key: 'radius',
                level: '2',
                label: 'Border Radius Preview',
                path: '/page/BinToDec',
            }
        ]
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