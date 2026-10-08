import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { students } from "../data/store";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const enteredUsername = username.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (
      enteredUsername === "teacher" &&
      enteredPassword === "teacher"
    ) {
      router.replace("/teacher");
      return;
    }

    if (enteredPassword === "password") {
      const student = students.find(
        (item) =>
          item.studentId.toLowerCase() === enteredUsername ||
          item.name.toLowerCase() === enteredUsername
      );

      if (student) {
        router.replace({
          pathname: "/student",
          params: {
            studentId: student.id,
          },
        });
        return;
      }
    }

    Alert.alert(
      "Login Failed",
      "Check your username and password."
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.glow} />

      <View style={styles.content}>
        <Image
          source={require("../../assets/studently-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.tagline}>
          Your academic life, organized.
        </Text>

        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome back</Text>

          <Text style={styles.description}>
            Sign in to your academic workspace
          </Text>

          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#777B91"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#777B91"
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
          />

          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </Pressable>
        </View>

        <View style={styles.demoBox}>
          <Text style={styles.demoTitle}>Demo Accounts</Text>

          <Text style={styles.demoText}>
            Teacher: teacher / teacher
          </Text>

          <Text style={styles.demoText}>
            Student: Messi / password
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070914",
  },

  glow: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: "#5B5BF7",
    opacity: 0.18,
    top: -100,
    right: -100,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    width: 230,
    height: 120,
    alignSelf: "center",
    marginBottom: 5,
  },

  tagline: {
    color: "#777B91",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 35,
  },

  card: {
    backgroundColor: "#111522",
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "#292D46",
  },

  welcome: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },

  description: {
    color: "#85899F",
    fontSize: 14,
    marginTop: 7,
    marginBottom: 25,
  },

  input: {
    height: 55,
    borderRadius: 15,
    backgroundColor: "#090C18",
    borderWidth: 1,
    borderColor: "#282C41",
    color: "#FFFFFF",
    paddingHorizontal: 17,
    marginBottom: 14,
    fontSize: 15,
  },

  button: {
    height: 55,
    borderRadius: 15,
    backgroundColor: "#635BFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1.2,
  },

  demoBox: {
    alignItems: "center",
    marginTop: 22,
  },

  demoTitle: {
    color: "#666B82",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 5,
  },

  demoText: {
    color: "#555A70",
    fontSize: 11,
    marginTop: 5,
  },
});
