import { ImageBackground } from "expo-image";
import { StyleSheet, View } from "react-native";
//import backgroungImg from '../assets/images/aura_gradient.png';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        source={require('@/assets/images/aura_gradient.png')}
        resizeMode="cover"
        style={styles.image}>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
