import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { attendance, saveData, students } from "../../data/store";

export default function AttendancePage() {
  const [status, setStatus] = useState<Record<string, boolean>>({});

  const toggleStudent = (studentId: string) => {
    setStatus((current) => ({
      ...current,
      [studentId]: !(current[studentId] ?? true),
    }));
  };

  const saveAttendance = async () => {
    students.forEach((student) => {
      const isPresent = status[student.id] ?? true;

      const previous = attendance[student.id] ?? {
        present: 0,
        total: 0,
      };

      attendance[student.id] = {
        present: previous.present + (isPresent ? 1 : 0),
        total: previous.total + 1,
      };
    });

    await saveData();

    Alert.alert(
      "Attendance Saved",
      "Today's attendance has been recorded."
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.title}>Attendance</Text>
        <Text style={styles.subtitle}>
          Mark today's attendance
        </Text>

        {students.map((student) => {
          const isPresent = status[student.id] ?? true;

          return (
            <View key={student.id} style={styles.card}>
              <View style={styles.info}>
                <Text style={styles.name}>{student.name}</Text>
                <Text style={styles.id}>{student.studentId}</Text>
              </View>

              <Pressable
                style={[
                  styles.statusButton,
                  isPresent
                    ? styles.present
                    : styles.absent,
                ]}
                onPress={() => toggleStudent(student.id)}
              >
                <Text style={styles.statusText}>
                  {isPresent ? "PRESENT" : "ABSENT"}
                </Text>
              </Pressable>
            </View>
          );
        })}

        <Pressable
          style={styles.saveButton}
          onPress={saveAttendance}
        >
          <Text style={styles.saveText}>
            SAVE ATTENDANCE
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
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#292D46",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  info: {
    flex: 1,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  id: {
    color: "#777B91",
    fontSize: 12,
    marginTop: 5,
  },

  statusButton: {
    minWidth: 92,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  present: {
    backgroundColor: "#243A31",
  },

  absent: {
    backgroundColor: "#3A252D",
  },

  statusText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
  },

  saveButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#635BFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
