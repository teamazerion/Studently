import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "teacher" && password === "teacher") {
      router.push("/teacher");
      return;
    }

    if (username === "student" && password === "student") {
      router.push("/student");
      return;
    }

    Alert.alert("Login failed", "Invalid username or password.");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.glow} />

      <View style={styles.content}>
        <Text style={styles.logo}>STUDENTLY</Text>
        <Text style={styles.tagline}>Your academic life, organized.</Text>

        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#8b8fa3"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8b8fa3"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </Pressable>
        </View>

        <Text style={styles.demo}>Demo: student / student</Text>
        <Text style={styles.demo}>Demo: teacher / teacher</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080A14",
  },
  glow: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#5146E5",
    opacity: 0.16,
    top: -80,
    right: -80,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 3,
    textAlign: "center",
  },
  tagline: {
    color: "#969AAF",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 35,
  },
  card: {
    backgroundColor: "#121525",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#292D45",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "#858AA0",
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14,
  },
  input: {
    height: 54,
    backgroundColor: "#0B0E1A",
    borderRadius: 14,
    paddingHorizontal: 16,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#282C40",
    marginBottom: 14,
  },
  button: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#635BFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
  },
  demo: {
    color: "#62677D",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
  },
});
  title: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#8E93A8",
    fontSize: 13,
    marginTop: 7,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.055)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 28,
    padding: 22,
  },

  welcome: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "700",
  },

  description: {
    color: "#8E93A8",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
    marginBottom: 23,
  },

  label: {
    color: "#777D96",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  inputBox: {
    height: 52,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.20)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    marginBottom: 17,
    justifyContent: "center",
  },

  input: {
    color: "#FFFFFF",
    fontSize: 14,
    paddingHorizontal: 16,
  },

  forgot: {
    alignSelf: "flex-end",
    marginTop: -5,
    marginBottom: 19,
  },

  forgotText: {
    color: "#7D9FFF",
    fontSize: 12,
    fontWeight: "600",
  },

  signIn: {
    borderRadius: 15,
    overflow: "hidden",
  },

  signInGradient: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  signInText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 21,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  or: {
    color: "#656A80",
    fontSize: 10,
    marginHorizontal: 12,
  },

  googleButton: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    backgroundColor: "rgba(255,255,255,0.035)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  googleG: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginRight: 10,
  },

  googleText: {
    color: "#D7D9E2",
    fontSize: 13,
    fontWeight: "600",
  },

  footer: {
    color: "#4F5469",
    textAlign: "center",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 25,
  },
});
