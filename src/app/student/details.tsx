import { router, useLocalSearchParams } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { students } from "../../data/store";

export default function StudentDetailsPage() {
  const { studentId } = useLocalSearchParams<{ studentId: string }>();

  const student = students.find((item) => item.id === studentId);

  if (!student) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Student not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.small}>STUDENT PROFILE</Text>
        <Text style={styles.title}>My Details</Text>
        <Text style={styles.subtitle}>
          Your registered academic information
        </Text>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {student.name.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.id}>{student.studentId}</Text>
        </View>

        <View style={styles.card}>
          <Detail label="Full Name" value={student.name} />
          <Detail label="Student ID" value={student.studentId} />
          <Detail label="Roll Number" value={student.rollNumber} />
          <Detail label="Email" value={student.email} />
          <Detail label="Department" value={student.department} />
          <Detail label="Semester" value={student.semester} />
        </View>

        <View style={styles.readOnly}>
          <Text style={styles.lock}>🔒</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.readOnlyTitle}>Read only</Text>
            <Text style={styles.readOnlyText}>
              Your details can only be changed by your teacher.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.detail}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
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
    paddingBottom: 40,
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
    marginTop: 7,
    marginBottom: 25,
  },

  profile: {
    alignItems: "center",
    backgroundColor: "#101522",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#20283B",
    padding: 24,
    marginBottom: 16,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: "#312E81",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  id: {
    color: "#A5B4FC",
    fontSize: 13,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#101522",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#20283B",
    paddingHorizontal: 18,
  },

  detail: {
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#1C2435",
  },

  label: {
    color: "#6F778C",
    fontSize: 12,
    marginBottom: 5,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  readOnly: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#101522",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#20283B",
    padding: 16,
    marginTop: 16,
  },

  lock: {
    fontSize: 20,
    marginRight: 12,
  },

  readOnlyTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  readOnlyText: {
    color: "#737B91",
    fontSize: 12,
    marginTop: 3,
  },

  error: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 100,
  },
});
