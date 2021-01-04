import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen116782Navigator from '../features/CopyOfBlankScreen116782/navigator';
import BlankScreen116781Navigator from '../features/BlankScreen116781/navigator';
import BlankScreen016765Navigator from '../features/BlankScreen016765/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen116782: { screen: CopyOfBlankScreen116782Navigator },
BlankScreen116781: { screen: BlankScreen116781Navigator },
BlankScreen016765: { screen: BlankScreen016765Navigator },

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
