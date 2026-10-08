import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { students } from "../../data/store";

export default function TeacherStudentsPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={styles.back}
          onPress={() => router.back()}
        >
          ‹ Back
        </Text>

        <Text style={styles.title}>Students</Text>

        <Text style={styles.subtitle}>
          {students.length} student
          {students.length === 1 ? "" : "s"} registered
        </Text>

        {students.map((student) => (
          <View key={student.id} style={styles.card}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {student.name.charAt(0).toUpperCase()}
                </Text>
              </View>

              <View style={styles.headerInfo}>
                <Text style={styles.name}>
                  {student.name}
                </Text>

                <Text style={styles.studentId}>
                  {student.studentId}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Info label="Roll Number" value={student.rollNumber} />
            <Info label="Email" value={student.email} />
            <Info label="Department" value={student.department} />
            <Info label="Semester" value={student.semester} />
          </View>
        ))}

        {students.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>
              No students yet
            </Text>

            <Text style={styles.emptyText}>
              Add your first student from the Teacher Dashboard.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "—"}</Text>
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
    marginBottom: 25,
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
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#292D46",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#635BFF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
  },

  headerInfo: {
    marginLeft: 14,
    flex: 1,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  studentId: {
    color: "#8D87FF",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#292D46",
    marginVertical: 17,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  },

  label: {
    color: "#777B91",
    fontSize: 13,
  },

  value: {
    color: "#E8E9F0",
    fontSize: 13,
    fontWeight: "600",
    maxWidth: "60%",
    textAlign: "right",
  },

  empty: {
    backgroundColor: "#111522",
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: "#292D46",
    alignItems: "center",
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  emptyText: {
    color: "#777B91",
    fontSize: 13,
    textAlign: "center",
    marginTop: 7,
  },
});
