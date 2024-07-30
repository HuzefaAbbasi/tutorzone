import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./views/authentication/splashscreen";
import SignUp from "./views/authentication/signup";
import Login from "./views/authentication/login";
import ForgotPasswordEmailEnter from "./views/authentication/forgot-password-enter-email";
import ForgotPasswordMailSent from "./views/authentication/forgot-password-mail-sent";
import ForgotPasswordSetNew from "./views/authentication/forgot-password-set-new";
import PasswordChanged from "./views/authentication/password-changed";
import SelectOption from "./views/select-option";
import CreateProfilePhoto from "./views/create-profile/createprofile-photo";
import Home from "./views/home";
import Notifications from "./views/notifications";
import Messages from "./views/messages";
import Profile from "./views/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SelectOption" component={SelectOption} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={DrawerNavigation} />
      <Stack.Screen name="CreateProfilePhoto" component={CreateProfilePhoto} />
      <Stack.Screen
        name="ForgotPasswordEmailEnter"
        component={ForgotPasswordEmailEnter}
      />
      <Stack.Screen
        name="ForgotPasswordMailSent"
        component={ForgotPasswordMailSent}
      />
      <Stack.Screen
        name="ForgotPasswordSetNew"
        component={ForgotPasswordSetNew}
      />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
    </Stack.Navigator>
  );
};

function DrawerContent(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        name="home"
        size={30}
        color="black"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Icon
        name="user"
        size={30}
        color="black"
        onPress={() => props.navigation.navigate("Profile")}
      />
    </View>
  );
}

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeBar"
      screenOptions={({ route }) => ({
        headerShown: false,
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "HomeBar") {
            iconName = "home";
          } else if (route.name === "Notifications") {
            iconName = "bell";
          } else if (route.name === "Messages") {
            iconName = "envelope-o";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? "blue" : "gray"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeBar" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
