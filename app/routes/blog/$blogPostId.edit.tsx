import { redirect, LoaderFunction, useLoaderData, useActionData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";
import {
  addBlogPost,
  BlogPostWithId,
  getBlogPost,
} from "~/db/blogPosts.server";
import { requireUserId } from "~/utils/session.server";
import { getAppUser } from "~/db/appUsers/appUsers.server";
import { useState } from "react";
import { EditPost } from "~/components/EditPost";

interface LoaderData extends BlogPostWithId {
  isAuthor: boolean;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const userId = await requireUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (!appUser?.permissions.includes("author")) {
      return redirect("/blog");
    }
  }
  invariant(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  invariant(blogPost, "expected blogPost");
  return { ...blogPost, isAuthor };
};

type PostError = {
  title?: boolean;
  slug?: boolean;
  markdown?: boolean;
  description?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = String(formData.get("tags"))?.split(",") || [];
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(
    (formData.get("publishDate") as string) || "0",
    10
  );

  const errors: PostError = {};
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;
  if (!description) errors.description = true;
  if (!imageUrl) errors.description = true;
  if (!imageAlt) errors.description = true;
  if (!tags) errors.description = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");
  invariant(typeof description === "string");
  invariant(typeof authorId === "string");
  invariant(typeof isPublished === "boolean");
  invariant(typeof publishDate === "number");
  invariant(typeof imageUrl === "string");
  invariant(typeof imageAlt === "string");
  invariant(typeof tags === "object");

  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags,
  });

  return redirect("/blog");
};

export default function NewPost() {
  const {
    authorId,
    isPublished: initIsPublished,
    title,
    slug,
    markdown: initMarkdown,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags,
  } = useLoaderData<LoaderData>();
  const [date, setDate] = useState<Date | null>(new Date(publishDate));
  const [markdown, setMarkdown] = useState<string>(initMarkdown);
  const [isPublished, setIsPublished] = useState(initIsPublished);
  const errors = useActionData();
  function handleEditorChange(value) {
    setMarkdown(value);
  }

  return (
    <EditPost
      errors={errors}
      authorId={authorId}
      isPublished={isPublished}
      setIsPublished={setIsPublished}
      date={date}
      setDate={setDate}
      markdown={markdown}
      handleEditorChange={handleEditorChange}
      title={title}
      description={description}
      slug={slug}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      tags={tags?.join(", ") || ""}
    />
  );
}
