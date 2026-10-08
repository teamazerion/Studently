import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { attendance, students } from "../../data/store";

export default function StudentAttendancePage() {
  const { studentId } = useLocalSearchParams<{ studentId: string }>();

  const student = students.find(
    (item) => item.id === studentId
  );

  if (!student) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Student not found.</Text>
      </View>
    );
  }

  const record = attendance[student.id] ?? {
    present: 0,
    total: 0,
  };

  const percentage =
    record.total > 0
      ? Math.round((record.present / record.total) * 100)
      : 0;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={styles.back}
          onPress={() => router.back()}
        >
          ‹ Back
        </Text>

        <Text style={styles.title}>Attendance</Text>

        <Text style={styles.subtitle}>
          {student.name} • {student.studentId}
        </Text>

        <View style={styles.mainCard}>
          <Text style={styles.percentage}>
            {percentage}%
          </Text>

          <Text style={styles.label}>
            Overall Attendance
          </Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {record.present}
              </Text>
              <Text style={styles.statLabel}>
                Present
              </Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {record.total - record.present}
              </Text>
              <Text style={styles.statLabel}>
                Absent
              </Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {record.total}
              </Text>
              <Text style={styles.statLabel}>
                Total
              </Text>
            </View>
          </View>
        </View>

        {record.total === 0 && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              No attendance yet
            </Text>

            <Text style={styles.emptyText}>
              Your teacher has not recorded attendance yet.
            </Text>
          </View>
        )}
      </View>
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

  mainCard: {
    backgroundColor: "#111522",
    borderRadius: 24,
    padding: 25,
    borderWidth: 1,
    borderColor: "#292D46",
    alignItems: "center",
  },

  percentage: {
    color: "#FFFFFF",
    fontSize: 54,
    fontWeight: "900",
  },

  label: {
    color: "#85899F",
    fontSize: 14,
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: "#292D46",
    width: "100%",
    marginVertical: 25,
  },

  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  statLabel: {
    color: "#777B91",
    fontSize: 12,
    marginTop: 4,
  },

  emptyCard: {
    backgroundColor: "#111522",
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#292D46",
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  emptyText: {
    color: "#777B91",
    fontSize: 13,
    marginTop: 6,
  },

  error: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 100,
  },
});
