import { ImageBackground } from "expo-image";
import { StyleSheet, View, Text } from "react-native";

import Icon from 'react-native-vector-icons/Feather';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CategoryIcon from '@mui/icons-material/Category';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        source={require('../assets/images/aura_gradient.jpeg')}
        contentFit="cover"
        style={styles.image}>
          <Text style={styles.text}
          >I am brave enough to make changes that will bring me happiness.</Text>

          <View style={styles.icons}>
            <Icon name="upload" size={30} color="d9d9d9" style={{ marginRight: 50 }} />
            <Icon name="heart" size={30} color="d9d9d9"/>
          </View>

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
  },
  icons: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 30,
    fontFamily: 'Lora-Regular',
  }
});
