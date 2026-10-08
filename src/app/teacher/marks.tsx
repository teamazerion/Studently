import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { marks, saveData, students } from "../../data/store";

export default function TeacherMarksPage() {
  const [values, setValues] = useState<
    Record<string, { internal1: string; internal2: string; assignment: string }>
  >({});

  const updateValue = (
    studentId: string,
    field: "internal1" | "internal2" | "assignment",
    value: string
  ) => {
    setValues((current) => ({
      ...current,
      [studentId]: {
        internal1: current[studentId]?.internal1 ?? "",
        internal2: current[studentId]?.internal2 ?? "",
        assignment: current[studentId]?.assignment ?? "",
        [field]: value,
      },
    }));
  };

  const saveMarks = async () => {
    students.forEach((student) => {
      const value = values[student.id];

      if (!value) return;

      marks[student.id] = {
        internal1: Number(value.internal1) || 0,
        internal2: Number(value.internal2) || 0,
        assignment: Number(value.assignment) || 0,
      };
    });

    await saveData();

    Alert.alert(
      "Marks Saved",
      "Student marks have been updated."
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.title}>Marks</Text>
        <Text style={styles.subtitle}>
          Enter academic marks
        </Text>

        {students.map((student) => {
          const value = values[student.id] ?? {
            internal1: "",
            internal2: "",
            assignment: "",
          };

          return (
            <View key={student.id} style={styles.card}>
              <Text style={styles.name}>{student.name}</Text>
              <Text style={styles.id}>{student.studentId}</Text>

              <TextInput
                value={value.internal1}
                onChangeText={(text) =>
                  updateValue(
                    student.id,
                    "internal1",
                    text
                  )
                }
                placeholder="Internal 1 / 20"
                placeholderTextColor="#777B91"
                keyboardType="numeric"
                style={styles.input}
              />

              <TextInput
                value={value.internal2}
                onChangeText={(text) =>
                  updateValue(
                    student.id,
                    "internal2",
                    text
                  )
                }
                placeholder="Internal 2 / 20"
                placeholderTextColor="#777B91"
                keyboardType="numeric"
                style={styles.input}
              />

              <TextInput
                value={value.assignment}
                onChangeText={(text) =>
                  updateValue(
                    student.id,
                    "assignment",
                    text
                  )
                }
                placeholder="Assignment / 10"
                placeholderTextColor="#777B91"
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          );
        })}

        <Pressable
          style={styles.saveButton}
          onPress={saveMarks}
        >
          <Text style={styles.saveText}>
            SAVE MARKS
          </Text>
        </Pressable>
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
    padding: 22,
    paddingTop: 60,
    paddingBottom: 40,
  },

  back: {
    color: "#8D87FF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 24,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
  },

  subtitle: {
    color: "#777B91",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#111522",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#292D46",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  id: {
    color: "#777B91",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 15,
  },

  input: {
    height: 50,
    backgroundColor: "#090C18",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#282C41",
    color: "#FFFFFF",
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 14,
  },

  saveButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#635BFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
