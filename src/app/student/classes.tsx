import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { classes, students } from "../../data/store";

export default function StudentClassesPage() {
  const { studentId } = useLocalSearchParams<{ studentId: string }>();

  const myClasses = classes.filter((item) =>
    item.studentIds.includes(studentId || "")
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={styles.back}
          onPress={() => router.back()}
        >
          ‹ Back
        </Text>

        <Text style={styles.title}>My Classes</Text>

        <Text style={styles.subtitle}>
          Classes you have joined
        </Text>

        {myClasses.map((classRoom) => {
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
                <Text style={styles.label}>Class Code</Text>
                <Text style={styles.code}>
                  {classRoom.code}
                </Text>
              </View>

              <View style={styles.divider} />

              <Text style={styles.memberTitle}>
                Class Members
              </Text>

              {classStudents.map((student) => (
                <View
                  key={student.id}
                  style={styles.member}
                >
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {student.name
                        .charAt(0)
                        .toUpperCase()}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.memberName}>
                      {student.name}
                    </Text>

                    <Text style={styles.memberId}>
                      {student.studentId}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          );
        })}

        {myClasses.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>
              No classes yet
            </Text>

            <Text style={styles.emptyText}>
              Join a class using the class code.
            </Text>
          </View>
        )}

        <Pressable
          style={styles.joinButton}
          onPress={() =>
            router.push({
              pathname: "/student/join-class",
              params: { studentId: studentId || "" },
            })
          }
        >
          <Text style={styles.joinText}>
            + JOIN ANOTHER CLASS
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

  className: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },

  subject: {
    color: "#8D87FF",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 17,
    fontWeight: "700",
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
    fontSize: 13,
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

  member: {
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  memberName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  memberId: {
    color: "#777B91",
    fontSize: 11,
    marginTop: 2,
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
    marginTop: 7,
  },

  joinButton: {
    height: 54,
    borderRadius: 16,
    backgroundColor: "#635BFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  joinText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
  },
});
