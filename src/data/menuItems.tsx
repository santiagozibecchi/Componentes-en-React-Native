import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
     {
          name: 'animation 101',
          icon: 'car-sport-outline',
          component: 'Animation101Screen',
     },
     {
          name: 'animation 102',
          icon: 'business-outline',
          component: 'Animation102Screen',
     },
     {
          name: 'Switches',
          icon: 'toggle-outline',
          component: 'SwitchScreen',
     },
     {
          name: 'Alert',
          icon: 'alert-circle-outline',
          component: 'AlertScreen',
     },
     {
          name: 'TextInputs',
          icon: 'document-text-outline',
          component: 'TextInputScreen',
     },
     {
          name: 'Pull To Refresh',
          icon: 'refresh-circle-outline',
          component: 'PullToRefreshScreen',
     },
     {
          name: 'Section List',
          icon: 'list-circle-outline',
          component: 'CustomSectionListScreen',
     },
     {
          name: 'Modal Screen',
          icon: 'copy-outline',
          component: 'ModalScreen',
     },
     {
          name: 'Infinite Scroll',
          icon: 'swap-vertical-outline',
          component: 'InfiniteScrollScreen',
     },
     {
          name: 'Slides',
          icon: 'book-outline',
          component: 'SlidesScreen',
     },
     {
          name: 'Themes',
          icon: 'brush-outline',
          component: 'ChangeThemeScreen',
     },
];

