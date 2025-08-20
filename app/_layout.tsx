import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    LoraRegular: require("../assets/fonts/Lora-Regular.ttf"),
    LoraBold: require("../assets/fonts/Lora-Bold.ttf"), // if you have more weights
  });
  return <Stack screenOptions={{ headerShown: false }} />;
}
