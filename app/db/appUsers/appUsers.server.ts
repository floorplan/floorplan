import type {
  CollectionReference,
  DocumentReference,
  Query,
} from "firebase-admin/firestore";
import { getFirestore } from "~/firebase/firebaseAdmin.server";
import { AppUser, AppUserWithId, APP_USERS_COLLECTION } from "./types";

const getCollectionRef = () =>
  getFirestore().collection(
    APP_USERS_COLLECTION
  ) as CollectionReference<AppUser>;

const getDocReference = (appUserId) =>
  getCollectionRef().doc(appUserId) as DocumentReference<AppUser>;

const getQuery = (userId) =>
  getCollectionRef().where("userId", "==", userId) as Query<AppUser>;

export async function getAllAppUsers(userId): Promise<AppUserWithId[]> {
  const queryRef = getQuery(userId);
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getAppUser(appUserId): Promise<AppUser | null> {
  const docRef = getDocReference(appUserId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
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
    await getDocReference(appUserId).set({permissions: []});

    const newAppUser = await getAppUser(appUserId);
    if (!newAppUser) {
      throw new Error("Failed to get new data point");
    }
    return newAppUser;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
