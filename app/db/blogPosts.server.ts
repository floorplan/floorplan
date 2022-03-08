import type {
  CollectionReference,
  DocumentReference,
  Query,
} from "firebase-admin/firestore";
import { getFirestore } from "~/firebase/firebaseAdmin.server";

const BLOG_POSTS_COLLECTION = "blogPosts";

export interface BlogPost {
  authorId: string;
  title: string;
  slug: string;
  markdown: string;
  description: string;
  isPublished: boolean;
  publishDate: number;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
}
export interface BlogPostWithId extends BlogPost {
  id: string;
}

const getCollectionRef = () =>
  getFirestore().collection(
    BLOG_POSTS_COLLECTION
  ) as CollectionReference<BlogPost>;

const getDocReference = (blogPostId) =>
  getCollectionRef().doc(blogPostId) as DocumentReference<BlogPost>;

const getQuery = () => getCollectionRef() as Query<BlogPost>;

export async function getAllBlogPosts(): Promise<BlogPostWithId[]> {
  const queryRef = getQuery();
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getBlogPost(blogPostId): Promise<BlogPostWithId | null> {
  const docRef = getDocReference(blogPostId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return { id: docRef.id, ...docSnap?.data() as BlogPost } || null;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function addBlogPost(blogPost: BlogPost): Promise<BlogPost> {
  try {
    const docRef = await getDocReference(blogPost.slug).set(blogPost);

    const newBlogPost = await getBlogPost(blogPost.slug);
    if (!newBlogPost) {
      throw new Error("Failed to get new data point");
    }
    return newBlogPost;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
