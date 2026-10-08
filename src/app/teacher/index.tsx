import { router } from "expo-router";
import { StyleSheet, Text, Pressable, View, ScrollView } from "react-native";

export default function TeacherDashboard() {
  const menu = [
    {
      title: "My Classes",
      subtitle: "Manage your classes",
      route: "/teacher/classes",
    },
    {
      title: "Students",
      subtitle: "View student records",
      route: "/teacher/students",
    },
    {
      title: "Attendance",
      subtitle: "Mark and manage attendance",
      route: "/teacher/attendance",
    },
    {
      title: "Marks",
      subtitle: "Enter student marks",
      route: "/teacher/marks",
    },
    {
      title: "Add Student",
      subtitle: "Create a student account",
      route: "/teacher/add-student",
    },
    {
      title: "Create Class",
      subtitle: "Create a new class",
      route: "/teacher/create-class",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>STUDENTLY</Text>

        <Text style={styles.badge}>TEACHER WORKSPACE</Text>

        <Text style={styles.title}>Teacher Dashboard</Text>

        <Text style={styles.subtitle}>
          Manage your students, classes and academic records.
        </Text>

        <View style={styles.grid}>
          {menu.map((item) => (
            <Pressable
              key={item.title}
              style={styles.card}
              onPress={() => router.push(item.route as any)}
            >
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardSubtitle}>
                {item.subtitle}
              </Text>

              <Text style={styles.arrow}>→</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={styles.logout}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoutText}>
            SIGN OUT
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

  logo: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 2,
  },

  badge: {
    color: "#8D87FF",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginTop: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 8,
  },

  subtitle: {
    color: "#777B91",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 28,
  },

  grid: {
    gap: 14,
  },

  card: {
    backgroundColor: "#111522",
    borderRadius: 22,
    padding: 21,
    minHeight: 115,
    borderWidth: 1,
    borderColor: "#292D46",
    justifyContent: "center",
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  cardSubtitle: {
    color: "#777B91",
    fontSize: 13,
    marginTop: 6,
  },

  arrow: {
    position: "absolute",
    right: 20,
    top: 42,
    color: "#8D87FF",
    fontSize: 24,
    fontWeight: "700",
  },

  logout: {
    height: 54,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#292D46",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  logoutText: {
    color: "#85899F",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
