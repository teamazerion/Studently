import { router } from "expo-router";
import { saveData, students } from "../../data/store";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");

  const addStudent = async () => {
  if (
    !name ||
    !studentId ||
    !rollNumber ||
    !email ||
    !department ||
    !semester
  ) {
    return;
  }

  students.push({
  id: `student-${Date.now()}`,
  name,
  studentId,
  rollNumber,
  email,
  department,
  semester,
});

  router.back();
};

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.small}>STUDENT MANAGEMENT</Text>
        <Text style={styles.title}>Add Student</Text>
        <Text style={styles.subtitle}>
          Add a student to your class.
        </Text>

        <View style={styles.card}>
          <Input
            label="Student Name"
            placeholder="Enter student name"
            value={name}
            onChangeText={setName}
          />

          <Input
            label="Student ID"
            placeholder="Example: STU001"
            value={studentId}
            onChangeText={setStudentId}
            autoCapitalize="characters"
          />

          <Input
            label="Roll Number"
            placeholder="Example: 12"
            value={rollNumber}
            onChangeText={setRollNumber}
            keyboardType="number-pad"
          />

          <Input
            label="Email"
            placeholder="student@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Department"
            placeholder="Example: CSE"
            value={department}
            onChangeText={setDepartment}
            autoCapitalize="characters"
          />

          <Input
            label="Semester"
            placeholder="Example: 3"
            value={semester}
            onChangeText={setSemester}
            keyboardType="number-pad"
          />

          <Pressable style={styles.button} onPress={addStudent}>
            <Text style={styles.buttonText}>ADD STUDENT</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  autoCapitalize,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "number-pad" | "email-address";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#686D83"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
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
    paddingTop: 60,
    paddingBottom: 40,
  },

  back: {
    color: "#8B82FF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 28,
  },

  small: {
    color: "#716AFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.8,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 7,
  },

  subtitle: {
    color: "#85899F",
    fontSize: 14,
    marginTop: 7,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#111426",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#292D45",
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    color: "#D5D7E3",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },

  input: {
    height: 54,
    backgroundColor: "#090C18",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#292D43",
    color: "#FFFFFF",
    paddingHorizontal: 16,
    fontSize: 14,
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
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
