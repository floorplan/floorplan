import {
  redirect,
  LoaderFunction,
  useLoaderData,
  useActionData,
} from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { addBlogPost } from "~/db/blogPosts.server";
import { requireUserId } from "~/utils/session.server";
import { getAppUser } from "~/db/appUsers/appUsers.server";
import { useState } from "react";
import { EditPost } from "~/components/EditPost";

type LoaderData = { authorId: string };

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!appUser?.permissions.includes("author")) {
    return redirect("/blog");
  }
  const data: LoaderData = {
    authorId: userId,
  };

  return data;
};

type PostError = {
  title?: boolean;
  slug?: boolean;
  markdown?: boolean;
  description?: boolean;
  imageUrl?: boolean;
  imageAlt?: boolean;
  tags?: boolean;
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
  if (!imageUrl) errors.imageUrl = true;
  if (!imageAlt) errors.imageAlt = true;
  if (!tags) errors.tags = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");
  invariant(typeof description === "string");
  invariant(typeof authorId === "string");
  invariant(typeof imageUrl === "string");
  invariant(typeof imageAlt === "string");
  invariant(typeof tags === "object");
  invariant(typeof isPublished === "boolean");
  invariant(typeof publishDate === "number");

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
  const [date, setDate] = useState<Date | null>(new Date());
  const [markdown, setMarkdown] = useState<string>("");
  const [isPublished, setIsPublished] = useState(true);
  const { authorId } = useLoaderData<LoaderData>();
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
    />
  );
}
