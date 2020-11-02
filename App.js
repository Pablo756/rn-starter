import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ComponentsScreen } from "./src/screens/ComponentsScreen";
import { ListScreen } from "./src/screens/ListScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { ColorScreen } from "./src/screens/ColorScreen";
import { RgbScreen } from "./src/screens/RgbScreen";
import { TextScreen } from "./src/screens/TextScreen";
import { PasswordScreen } from "./src/screens/PasswordScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Rgb: RgbScreen,
    Text: TextScreen,
    Password: PasswordScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
