import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
