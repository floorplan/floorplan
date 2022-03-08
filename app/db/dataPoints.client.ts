import {
  addDoc,
  CollectionReference,
  DocumentReference,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  Query,
  where,
} from "firebase/firestore";
import { collection, getFirestore, doc } from "firebase/firestore";

const DATA_POINTS_COLLECTION = "dataPoints";

export interface DataPoint {
  userId: string;
  point: number;
  timestamp: number;
}

export interface DataPointWithId extends DataPoint {
  id: string;
}

const getCollectionRef = () =>
  collection(
    getFirestore(),
    DATA_POINTS_COLLECTION
  ) as CollectionReference<DataPoint>;

const getDocReference = (dataPointId) =>
  doc(
    getFirestore(),
    DATA_POINTS_COLLECTION,
    dataPointId
  ) as DocumentReference<DataPoint>;

const getQuery = (userId) =>
  query(getCollectionRef(), where("userId", "==", userId)) as Query<DataPoint>;

export async function getAllDataPoints(userId): Promise<DataPoint[]> {
  const queryRef = getQuery(userId);
  const querySnapshot = await getDocs(queryRef);
  return querySnapshot.docs.map((doc) => doc.data());
}

export function getAllDataPointsLive(userId, callback) {
  return onSnapshot(getQuery(userId), (querySnapshot) => {
    const docs: DataPointWithId[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(docs);
  });
}

export async function getDataPoint(dataPointId): Promise<DataPoint | null> {
  const docRef = getDocReference(dataPointId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap?.data() || null;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function addDataPoint(dataPoint: DataPoint): Promise<DataPoint> {
  try {
    const docRef = await addDoc(getCollectionRef(), dataPoint);

    const newDataPoint = await getDataPoint(docRef.id);
    if (!newDataPoint) {
      throw new Error("Failed to get new data point");
    }
    return newDataPoint;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
