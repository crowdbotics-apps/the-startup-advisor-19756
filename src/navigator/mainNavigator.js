import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile93860Navigator from '../features/UserProfile93860/navigator';
import Tutorial93859Navigator from '../features/Tutorial93859/navigator';
import NotificationList93831Navigator from '../features/NotificationList93831/navigator';
import Settings93830Navigator from '../features/Settings93830/navigator';
import Settings93822Navigator from '../features/Settings93822/navigator';
import UserProfile93820Navigator from '../features/UserProfile93820/navigator';
import UserProfile93789Navigator from '../features/UserProfile93789/navigator';
import Tutorial93788Navigator from '../features/Tutorial93788/navigator';
import NotificationList93760Navigator from '../features/NotificationList93760/navigator';
import Settings93759Navigator from '../features/Settings93759/navigator';
import Settings93751Navigator from '../features/Settings93751/navigator';
import UserProfile93749Navigator from '../features/UserProfile93749/navigator';
import Settings93713Navigator from '../features/Settings93713/navigator';
import Settings93696Navigator from '../features/Settings93696/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile93860: { screen: UserProfile93860Navigator },
Tutorial93859: { screen: Tutorial93859Navigator },
NotificationList93831: { screen: NotificationList93831Navigator },
Settings93830: { screen: Settings93830Navigator },
Settings93822: { screen: Settings93822Navigator },
UserProfile93820: { screen: UserProfile93820Navigator },
UserProfile93789: { screen: UserProfile93789Navigator },
Tutorial93788: { screen: Tutorial93788Navigator },
NotificationList93760: { screen: NotificationList93760Navigator },
Settings93759: { screen: Settings93759Navigator },
Settings93751: { screen: Settings93751Navigator },
UserProfile93749: { screen: UserProfile93749Navigator },
Settings93713: { screen: Settings93713Navigator },
Settings93696: { screen: Settings93696Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
