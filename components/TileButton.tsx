import { Pressable, StyleSheet, Text } from "react-native";

type TileButtonProps = {
    children: React.ReactNode;
    onPress?: () => void;
};

export default function TileButton({ children, onPress }: TileButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
        //fontWeight: "bold",
    },
})