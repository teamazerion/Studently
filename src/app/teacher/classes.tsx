import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { classes, students } from "../../data/store";

export default function TeacherClassesPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={styles.back}
          onPress={() => router.back()}
        >
          ‹ Back
        </Text>

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Classes</Text>
            <Text style={styles.subtitle}>
              {classes.length} class{classes.length === 1 ? "" : "es"} created
            </Text>
          </View>

          <Pressable
            style={styles.addButton}
            onPress={() => router.push("/teacher/create-class")}
          >
            <Text style={styles.addText}>+</Text>
          </Pressable>
        </View>

        {classes.map((classRoom) => {
          const classStudents = students.filter((student) =>
            classRoom.studentIds.includes(student.id)
          );

          return (
            <View key={classRoom.id} style={styles.card}>
              <Text style={styles.className}>
                {classRoom.name}
              </Text>

              <Text style={styles.subject}>
                {classRoom.subject}
              </Text>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Semester</Text>
                <Text style={styles.value}>
                  {classRoom.semester}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Join Code</Text>
                <Text style={styles.code}>
                  {classRoom.code}
                </Text>
              </View>

              <View style={styles.divider} />

              <Text style={styles.memberTitle}>
                Students ({classStudents.length})
              </Text>

              {classStudents.length === 0 ? (
                <Text style={styles.emptyText}>
                  No students have joined this class yet.
                </Text>
              ) : (
                classStudents.map((student) => (
                  <View key={student.id} style={styles.student}>
                    <View style={styles.avatar}>
                      <Text style={styles.avatarText}>
                        {student.name.charAt(0).toUpperCase()}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.studentName}>
                        {student.name}
                      </Text>
                      <Text style={styles.studentId}>
                        {student.studentId}
                      </Text>
                    </View>
                  </View>
                ))
              )}
            </View>
          );
        })}

        {classes.length === 0 && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              No classes yet
            </Text>

            <Text style={styles.emptyText}>
              Create your first class using the + button.
            </Text>
          </View>
        )}
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#635BFF",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "400",
    marginTop: -2,
  },

  card: {
    backgroundColor: "#111522",
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#292D46",
  },

  className: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },

  subject: {
    color: "#8D87FF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 17,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  label: {
    color: "#777B91",
    fontSize: 13,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  code: {
    color: "#8D87FF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },

  divider: {
    height: 1,
    backgroundColor: "#292D46",
    marginVertical: 17,
  },

  memberTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 12,
  },

  student: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#090C18",
    borderRadius: 14,
    padding: 11,
    marginBottom: 8,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: "#635BFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  studentName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  studentId: {
    color: "#777B91",
    fontSize: 11,
    marginTop: 2,
  },

  emptyText: {
    color: "#777B91",
    fontSize: 13,
    lineHeight: 19,
  },

  emptyCard: {
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
    marginBottom: 6,
  },
});
