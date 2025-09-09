import { styles } from "@/assets/styles/auth.styles";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleSignOut = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSignOut()}>
        <Text style={{ color: "white" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
