import { redirect, LoaderFunction, useLoaderData, useActionData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { requireUserId } from "~/utils/session.server";
import { EditFloorPlan } from "~/components/EditFloorPlan";
import { addFloorPlan } from "~/db/floorPlans.server";

type LoaderData = { userId: string };

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const userId = await requireUserId(request);

  const data: LoaderData = {
    userId,
  };

  return data;
};

type PlanError = {
  owner?: boolean;
  title?: boolean;
  description?: boolean;
  cost?: boolean;
  // TODO?: when we have users then lets do this
  // popularity?: {
  //   rating?: number;
  //   count?: number;
  // };
  githubOwner?: boolean;
  githubRepo?: boolean;
  setupTime?: boolean;
  tags?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const owner = formData.get("owner");
  const title = formData.get("title");
  const description = formData.get("description");
  const cost = formData.get("cost");
  const githubOwner = formData.get("githubOwner");
  const githubRepo = formData.get("githubRepo");
  const setupTime = formData.get("setupTime");
  const tags =
    String(formData.get("tags"))
      ?.split(",")
      .map((word) => word.trim()) || [];

  const errors: PlanError = {};
  if (!owner) errors.owner = true;
  if (!title) errors.title = true;
  if (!description) errors.description = true;
  if (!cost) errors.cost = true;
  if (!githubOwner) errors.githubOwner = true;
  if (!githubRepo) errors.githubRepo = true;
  if (!setupTime) errors.setupTime = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof owner === "string");
  invariant(typeof title === "string");
  invariant(typeof description === "string");
  invariant(typeof cost === "string");
  invariant(typeof githubOwner === "string");
  invariant(typeof githubRepo === "string");
  invariant(typeof setupTime === "string");
  invariant(typeof tags === "object");

  await addFloorPlan({
    owner,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags,
  });

  return redirect("/floor-plans");
};

export default function NewPlan() {
  const { userId } = useLoaderData<LoaderData>();
  const errors = useActionData();
  return <EditFloorPlan isCreate errors={errors} owner={userId} />;
}
