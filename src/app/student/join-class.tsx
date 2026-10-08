import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { classes, saveData } from "../../data/store";

export default function JoinClassPage() {
  const { studentId } = useLocalSearchParams<{ studentId: string }>();
  const [code, setCode] = useState("");

  const joinClass = async () => {
    const enteredCode = code.trim();

    if (!enteredCode) {
      Alert.alert("Missing Code", "Enter the class code.");
      return;
    }

    const classRoom = classes.find(
      (item) => item.code === enteredCode
    );

    if (!classRoom) {
      Alert.alert(
        "Invalid Code",
        "No class was found with this code."
      );
      return;
    }

    if (!studentId) {
      Alert.alert(
        "Error",
        "Student account could not be identified."
      );
      return;
    }

    if (classRoom.studentIds.includes(studentId)) {
      Alert.alert(
        "Already Joined",
        "You are already a member of this class."
      );
      return;
    }

    classRoom.studentIds.push(studentId);
    await saveData();

    Alert.alert(
      "Class Joined",
      `You joined ${classRoom.name}.`,
      [
        {
          text: "Continue",
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.small}>CLASSROOM</Text>
        <Text style={styles.title}>Join a Class</Text>

        <Text style={styles.subtitle}>
          Enter the class code given by your teacher.
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>CLASS CODE</Text>

          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="e.g. 5678"
            placeholderTextColor="#62697D"
            keyboardType="number-pad"
            maxLength={10}
            style={styles.input}
          />

          <Pressable
            style={styles.button}
            onPress={joinClass}
          >
            <Text style={styles.buttonText}>
              JOIN CLASS
            </Text>
          </Pressable>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoIcon}>i</Text>

          <Text style={styles.infoText}>
            Ask your teacher for the class code. Once you
            join, the class will appear in My Classes.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070A13",
  },

  content: {
    padding: 24,
    paddingTop: 55,
  },

  back: {
    color: "#A5B4FC",
    fontSize: 17,
    marginBottom: 30,
  },

  small: {
    color: "#818CF8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 8,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },

  subtitle: {
    color: "#8E95A7",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 28,
  },

  card: {
    backgroundColor: "#101522",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#20283B",
    padding: 20,
  },

  label: {
    color: "#737B91",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  input: {
    height: 58,
    backgroundColor: "#090C18",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#292F44",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 3,
    paddingHorizontal: 18,
    textAlign: "center",
  },

  button: {
    height: 56,
    backgroundColor: "#635BFF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 1,
  },

  info: {
    flexDirection: "row",
    backgroundColor: "#101522",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#20283B",
    padding: 16,
    marginTop: 16,
  },

  infoIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#312E81",
    color: "#A5B4FC",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "800",
    marginRight: 12,
  },

  infoText: {
    flex: 1,
    color: "#737B91",
    fontSize: 12,
    lineHeight: 19,
  },
});
