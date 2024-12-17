import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Auth from './screens/auth/index';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import Chat from './screens/chat/index';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import {COLORS} from './utils/constants/colors';
import {useAppSelector} from './store/hooks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList, RootStackParamList} from './types/navigationTypes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Settings from './screens/settings';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();
const Main = () => {
  const auth = useAppSelector(state => state.auth);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  const authStackHeaderStyle: NativeStackNavigationOptions = {
    headerShown: false,
    headerTintColor: COLORS.textDark,
    headerTitle: '',
    headerShadowVisible: false,
  };
  return (
    <NavigationContainer>
      {!auth?.uid ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: COLORS.white,
            },
          }}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen
            name="Login"
            options={authStackHeaderStyle}
            component={Login}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={authStackHeaderStyle}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown:false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName = 'chatbubble-ellipses-outline';
              let IconComponent = Ionicons;

              if (route.name === 'Settings') {
                iconName = 'settings-outline';
              } else if (route.name === 'Calls') {
                IconComponent = Feather;
                iconName = 'phone-call';
              } else if (route.name === 'Contacts') {
                IconComponent = AntDesign;
                iconName = 'user';
              }

              return (
                <IconComponent name={iconName} size={size} color={color} />
              );
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.lightgray3,
            tabBarStyle: {height: 80, paddingBottom: 10, paddingTop: 10},
          })}>
          <Tab.Screen name="Message" component={Chat} />
          {/* <Tab.Screen name="Calls" component={Chat} />
          <Tab.Screen name="Contacts" component={Chat} /> */}
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
