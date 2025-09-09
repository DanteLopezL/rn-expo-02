import { styles } from "@/assets/styles/feed.styles";
import { COLORS } from "@/assets/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleSignOut = () => {
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Spotlight</Text>
        <TouchableOpacity onPress={() => handleSignOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
