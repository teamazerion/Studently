import { router } from "expo-router";
import { useState } from "react";
import { classes, saveData } from "../../data/store";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function CreateClassPage() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [code, setCode] = useState("");

  const createClass = async () => {
  if (!className || !subject || !semester || !code) {
    Alert.alert("Missing Details", "Please fill in all fields.");
    return;
  }

  const newClass = {
    id: `class-${Date.now()}`,
    name: className,
    subject,
    semester,
    code,
    studentIds: [],
  };

  classes.push(newClass);

  Alert.alert(
    "Class Created",
    `${className} • ${subject}\nClass Code: ${code}`,
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
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.small}>CLASS MANAGEMENT</Text>
        <Text style={styles.title}>Create Class</Text>
        <Text style={styles.subtitle}>
          Set up a new academic class
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>CLASS NAME</Text>
          <TextInput
            value={className}
            onChangeText={setClassName}
            placeholder="B.Tech CSE S3"
            placeholderTextColor="#666B82"
            style={styles.input}
          />

          <Text style={styles.label}>SUBJECT</Text>
          <TextInput
            value={subject}
            onChangeText={setSubject}
            placeholder="Digital Logic"
            placeholderTextColor="#666B82"
            style={styles.input}
          />

          <Text style={styles.label}>SEMESTER</Text>
          <TextInput
            value={semester}
            onChangeText={setSemester}
            placeholder="3"
            placeholderTextColor="#666B82"
            keyboardType="number-pad"
            style={styles.input}
          />

          <Text style={styles.label}>CLASS CODE</Text>
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="5678"
            placeholderTextColor="#666B82"
            keyboardType="number-pad"
            maxLength={6}
            style={styles.input}
          />

          <Pressable style={styles.button} onPress={createClass}>
            <Text style={styles.buttonText}>CREATE CLASS</Text>
          </Pressable>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Class Code</Text>
          <Text style={styles.infoText}>
            Share this code with your students so they can join the class.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070914",
  },
  content: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 40,
  },
  back: {
    color: "#8F8AFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 28,
  },
  small: {
    color: "#777C96",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 6,
  },
  subtitle: {
    color: "#85899F",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#111426",
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "#292D46",
  },
  label: {
    color: "#9296AA",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
    marginTop: 8,
  },
  input: {
    height: 53,
    borderRadius: 14,
    backgroundColor: "#090C18",
    borderWidth: 1,
    borderColor: "#282C41",
    color: "#FFFFFF",
    paddingHorizontal: 16,
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    height: 55,
    borderRadius: 15,
    backgroundColor: "#635BFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
  infoBox: {
    backgroundColor: "#0D1020",
    borderRadius: 18,
    padding: 18,
    marginTop: 16,
  },
  infoTitle: {
    color: "#8F8AFF",
    fontSize: 13,
    fontWeight: "800",
  },
  infoText: {
    color: "#777C96",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },
});
