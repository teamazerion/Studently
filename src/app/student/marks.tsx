import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { marks, students } from "../../data/store";

export default function StudentMarksPage() {
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

  const record = marks[student.id] ?? {
    internal1: 0,
    internal2: 0,
    assignment: 0,
  };

  const total =
    record.internal1 +
    record.internal2 +
    record.assignment;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={styles.back}
          onPress={() => router.back()}
        >
          ‹ Back
        </Text>

        <Text style={styles.title}>My Marks</Text>

        <Text style={styles.subtitle}>
          {student.name} • {student.studentId}
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Internal 1</Text>
            <Text style={styles.value}>
              {record.internal1} / 20
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Internal 2</Text>
            <Text style={styles.value}>
              {record.internal2} / 20
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Assignment</Text>
            <Text style={styles.value}>
              {record.assignment} / 10
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL</Text>
            <Text style={styles.total}>
              {total} / 50
            </Text>
          </View>
        </View>

        {total === 0 && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              No marks yet
            </Text>

            <Text style={styles.emptyText}>
              Your teacher has not entered your marks yet.
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

  card: {
    backgroundColor: "#111522",
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "#292D46",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },

  label: {
    color: "#85899F",
    fontSize: 15,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  divider: {
    height: 1,
    backgroundColor: "#292D46",
    marginVertical: 8,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
  },

  totalLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  total: {
    color: "#8D87FF",
    fontSize: 22,
    fontWeight: "900",
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
