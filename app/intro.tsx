import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TileButton from "../components/TileButton";

export default function Intro() {
    return (
        <SafeAreaView style={styles.bg}>
            <Text style={styles.heading}>What are your affirmation goals?</Text>
            <View style={styles.view}>

                <TileButton>Growth 🌱</TileButton>
                <TileButton>Practice gratitude 🙏</TileButton>
                <TileButton>Healing ❤️‍🩹</TileButton>
                <TileButton>Mindfulness 🧘‍♀️</TileButton>
                <TileButton>Self esteem 🤩</TileButton>
                <TileButton>Attract love 🥰</TileButton>
                <TileButton>Reduce anxiety & stress 😰</TileButton>
                <TileButton>Success 🏆</TileButton>
                <TileButton>Self-love 💞</TileButton>
                <TileButton>Become more motivated 📈</TileButton>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontFamily: 'LoraBold',
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 20,

    },
    button: {
        backgroundColor: "#588689",
        borderRadius: 8,
        padding: 6,
        marginLeft: 4,
        marginVertical: 4,
        alignSelf: "flex-start",
        // alignItems: "left"
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    view: {
        flexDirection: 'row',
        flexWrap: "wrap",
        gap: 8
    },
    bg: {
        backgroundColor: "#2C484A"
    }
})