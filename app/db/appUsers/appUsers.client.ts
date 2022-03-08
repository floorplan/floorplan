import {
  addDoc,
  CollectionReference,
  DocumentReference,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  Query,
  setDoc,
  where,
} from "firebase/firestore";
import { collection, getFirestore, doc } from "firebase/firestore";
import { AppUser, AppUserWithId, APP_USERS_COLLECTION } from "./types";

const getCollectionRef = () =>
  collection(
    getFirestore(),
    APP_USERS_COLLECTION
  ) as CollectionReference<AppUser>;

const getDocReference = (appUserId) =>
  doc(
    getFirestore(),
    APP_USERS_COLLECTION,
    appUserId
  ) as DocumentReference<AppUser>;

const getQuery = (userId) =>
  query(getCollectionRef(), where("userId", "==", userId)) as Query<AppUser>;

export async function getAllAppUsers(userId): Promise<AppUser[]> {
  const queryRef = getQuery(userId);
  const querySnapshot = await getDocs(queryRef);
  return querySnapshot.docs.map((doc) => doc.data());
}

export function getAllAppUsersLive(userId, callback) {
  return onSnapshot(getQuery(userId), (querySnapshot) => {
    const docs: AppUserWithId[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(docs);
  });
}

export async function getAppUser(appUserId: string): Promise<AppUser | null> {
  const docRef = getDocReference(appUserId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap?.data() || null;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function addAppUser(
  appUserId: string
): Promise<AppUser> {
  try {
    const existingAppUser = await getAppUser(appUserId);
    if (existingAppUser) {
      return existingAppUser;
    }
    await setDoc(getDocReference(appUserId), {permissions: []});

    const newAppUser = await getAppUser(appUserId);
    if (!newAppUser) {
      throw new Error("Failed to get new app user");
    }
    return newAppUser;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
