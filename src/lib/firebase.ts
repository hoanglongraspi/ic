import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ4tb2LNjRRoaOUpNgVPkazADOFx5PA8w",
  authDomain: "icibm-4f7d2.firebaseapp.com",
  projectId: "icibm-4f7d2",
  storageBucket: "icibm-4f7d2.firebasestorage.app",
  messagingSenderId: "1573645708",
  appId: "1:1573645708:web:30c8472d696f0d54ebbaa9",
  measurementId: "G-40QDDDR15K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Announcement interface
export interface Announcement {
  id?: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  isActive: boolean;
}

// Add a new announcement
export async function addAnnouncement(
  title: string,
  content: string
): Promise<string> {
  const docRef = await addDoc(collection(db, "announcements"), {
    title,
    content,
    createdAt: Timestamp.now(),
    isActive: true,
  });
  return docRef.id;
}

// Get all active announcements
export async function getAnnouncements(): Promise<Announcement[]> {
  const q = query(
    collection(db, "announcements"),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  const announcements: Announcement[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.isActive) {
      announcements.push({
        id: doc.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        isActive: data.isActive,
      });
    }
  });

  return announcements;
}

// Delete an announcement
export async function deleteAnnouncement(id: string): Promise<void> {
  await deleteDoc(doc(db, "announcements", id));
}

export { db };
