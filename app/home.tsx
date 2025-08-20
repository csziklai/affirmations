import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Index() {
    const [liked, setLiked] = useState(false);

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
                    <IonIcon name="share-outline" size={30} color="d9d9d9" style={{ marginRight: 50 }} />
                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        <IonIcon name={liked ? "heart" : "heart-outline"}
                            size={30}
                            color={liked ? "#FF5A35" : "d9d9d9"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomIcons}>
                    <Link href="/categories">
                        <MaterialIcon name="category" size={30} color="d9d9d9" />
                    </Link>
                    <IonIcon name="person-outline" size={30} color="d9d9d9" />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 30,
        fontFamily: 'LoraRegular',
        lineHeight: 35
    },
    bottomIcons: {
        position: 'absolute',
        bottom: 40,        // distance from bottom of screen
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
});