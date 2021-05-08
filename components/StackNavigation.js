import { createStackNavigator } from 'react-navigation-stack';
import { DrawerComponent } from './DrawerComponent';

export const Stack = createStackNavigator({
    drawerNavigator: {
        screen: DrawerComponent,
    },
    userDetails: {
        screen: userDetails,
    },
});