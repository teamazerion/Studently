import AsyncStorage from "@react-native-async-storage/async-storage";

export type Student = {
  id: string;
  name: string;
  studentId: string;
  rollNumber: string;
  email: string;
  department: string;
  semester: string;
};

export type ClassRoom = {
  id: string;
  name: string;
  subject: string;
  semester: string;
  code: string;
  studentIds: string[];
};

export type AttendanceRecord = {
  present: number;
  total: number;
};

export type Marks = {
  internal1: number;
  internal2: number;
  assignment: number;
};

export let students: Student[] = [
  {
    id: "student-1",
    name: "Messi",
    studentId: "STU001",
    rollNumber: "01",
    email: "messi@example.com",
    department: "CSE",
    semester: "3",
  },
];

export let classes: ClassRoom[] = [
  {
    id: "class-1",
    name: "B.Tech CSE S3",
    subject: "Digital Logic",
    semester: "3",
    code: "5678",
    studentIds: ["student-1"],
  },
];

export let attendance: Record<string, AttendanceRecord> = {};

export let marks: Record<string, Marks> = {};

const STORAGE_KEY = "@studently_data";

export async function loadData() {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);

    if (!saved) {
      await saveData();
      return;
    }

    const data = JSON.parse(saved);

    students = data.students ?? students;
    classes = data.classes ?? classes;
    attendance = data.attendance ?? {};
    marks = data.marks ?? {};
  } catch (error) {
    console.log("Failed to load STUDENTLY data:", error);
  }
}

export async function saveData() {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        students,
        classes,
        attendance,
        marks,
      })
    );
  } catch (error) {
    console.log("Failed to save STUDENTLY data:", error);
  }
}
