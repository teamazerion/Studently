import { router, useLocalSearchParams } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { students } from "../../data/store";

export default function StudentDashboard() {
  const { studentId } = useLocalSearchParams<{ studentId: string }>();

  const student = students.find((item) => item.id === studentId);

  if (!student) {
    return (
      <View style={styles.container}>
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>Student Not Found</Text>
          <Text style={styles.errorText}>
            Your student account could not be found.
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.buttonText}>BACK TO LOGIN</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>STUDENTLY</Text>
            <Text style={styles.title}>Student Dashboard</Text>
          </View>

          <Pressable
            style={styles.logout}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.logoutText}>↗</Text>
          </Pressable>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {student.name.charAt(0).toUpperCase()}
            </Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>{student.name}</Text>

            <Text style={styles.studentId}>
              {student.studentId} • {student.department}
            </Text>

            <Text style={styles.semester}>
              Semester {student.semester}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Academic</Text>

        <View style={styles.grid}>
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/student/classes",
                params: { studentId: student.id },
              })
            }
          >
            <Text style={styles.icon}>▣</Text>
            <Text style={styles.cardTitle}>My Classes</Text>
            <Text style={styles.cardText}>
              View your classes
            </Text>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/student/details",
                params: { studentId: student.id },
              })
            }
          >
            <Text style={styles.icon}>◉</Text>
            <Text style={styles.cardTitle}>My Details</Text>
            <Text style={styles.cardText}>
              Personal information
            </Text>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/student/attendance",
                params: { studentId: student.id },
              })
            }
          >
            <Text style={styles.icon}>✓</Text>
            <Text style={styles.cardTitle}>Attendance</Text>
            <Text style={styles.cardText}>
              Track attendance
            </Text>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/student/marks",
                params: { studentId: student.id },
              })
            }
          >
            <Text style={styles.icon}>▤</Text>
            <Text style={styles.cardTitle}>Marks</Text>
            <Text style={styles.cardText}>
              View your marks
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.joinButton}
          onPress={() =>
            router.push({
              pathname: "/student/join-class",
              params: {
                studentId: student.id,
              },
            })
          }
        >
          <Text style={styles.joinIcon}>＋</Text>

          <View>
            <Text style={styles.joinTitle}>Join a Class</Text>
            <Text style={styles.joinText}>
              Enter the class code given by your teacher
            </Text>
          </View>
        </Pressable>
      </ScrollView>
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  small: {
    color: "#818CF8",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 6,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  logout: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#111522",
    borderWidth: 1,
    borderColor: "#252B40",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: "#A5B4FC",
    fontSize: 22,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111522",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#252B40",
    padding: 18,
    marginBottom: 30,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#312E81",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  studentId: {
    color: "#A5B4FC",
    fontSize: 13,
    marginTop: 5,
  },

  semester: {
    color: "#737B91",
    fontSize: 12,
    marginTop: 4,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 14,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    minHeight: 145,
    backgroundColor: "#101522",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#20283B",
    padding: 17,
    marginBottom: 14,
  },

  icon: {
    color: "#A5B4FC",
    fontSize: 22,
    marginBottom: 18,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  cardText: {
    color: "#737B91",
    fontSize: 12,
    marginTop: 5,
  },

  joinButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151B2E",
    borderWidth: 1,
    borderColor: "#313B66",
    borderRadius: 20,
    padding: 18,
    marginTop: 8,
  },

  joinIcon: {
    color: "#A5B4FC",
    fontSize: 28,
    marginRight: 14,
  },

  joinTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  joinText: {
    color: "#737B91",
    fontSize: 12,
    marginTop: 4,
  },

  errorBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  errorTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },

  errorText: {
    color: "#8E95A7",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#635BFF",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },
});
