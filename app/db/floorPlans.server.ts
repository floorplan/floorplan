import type {
  CollectionReference,
  DocumentReference,
  Query,
} from "firebase-admin/firestore";
import { getFirestore } from "~/firebase/firebaseAdmin.server";

const BLOG_POSTS_COLLECTION = "floorPlans";

export interface FloorPlan {
  owner: string;
  title: string;
  description: string;
  cost: string;
  // TODO: when we have users then lets do this
  // popularity: {
  //   rating: number;
  //   count: number;
  // };
  githubOwner: string;
  githubRepo: string;
  setupTime: string;
  tags: string[];
  queryList?: string[];
}
export interface FloorPlanWithId extends FloorPlan {
  id: string;
}

const getCollectionRef = () =>
  getFirestore().collection(
    BLOG_POSTS_COLLECTION
  ) as CollectionReference<FloorPlan>;

const getDocReference = (floorPlanId) =>
  getCollectionRef().doc(floorPlanId) as DocumentReference<FloorPlan>;

const getQuery = () => getCollectionRef() as Query<FloorPlan>;

export async function getAllFloorPlans(): Promise<FloorPlanWithId[]> {
  const queryRef = getQuery();
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getFilteredFloorPlans({
  queryString,
  userId,
}: {
  queryString: string | null;
  userId: string | null;
}): Promise<FloorPlanWithId[]> {
  let queryRef = getQuery();
  if (userId) {
    queryRef = queryRef.where("owner", "==", userId) as Query<FloorPlan>;
  }
  if (queryString) {
    queryRef = queryRef.where(
      "queryList",
      "array-contains-any",
      queryString
        .split(" ")
        .filter((word) => word.length > 1)
        .slice(0, 9)
    ) as Query<FloorPlan>;
  }
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getFloorPlan(
  floorPlanId
): Promise<FloorPlanWithId | null> {
  const docRef = getDocReference(floorPlanId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return { id: docRef.id, ...(docSnap?.data() as FloorPlan) } || null;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function addFloorPlan(floorPlan: FloorPlan): Promise<FloorPlan> {
  try {
    const queryList = [
      ...floorPlan.title.split(" ").filter((word) => word.length > 1),
      ...floorPlan.tags.filter((word) => word.length > 1),
    ];
    floorPlan.queryList = queryList;
    const docRef = await getCollectionRef().add(floorPlan);

    const newFloorPlan = await getFloorPlan(docRef.id);
    if (!newFloorPlan) {
      throw new Error("Failed to get new data point");
    }
    return newFloorPlan;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export async function setFloorPlan(floorPlanId:string, floorPlan: FloorPlan): Promise<FloorPlan> {
  try {
    const queryList = [
      ...floorPlan.title.split(" ").filter((word) => word.length > 1),
      ...floorPlan.tags.filter((word) => word.length > 1),
    ];
    floorPlan.queryList = queryList;
    await getDocReference(floorPlanId).set(floorPlan);
    const docRef = await getDocReference(floorPlanId);

    const newFloorPlan = await getFloorPlan(docRef.id);
    if (!newFloorPlan) {
      throw new Error("Failed to get new data point");
    }
    return newFloorPlan;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
