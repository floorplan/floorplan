import { redirect, LoaderFunction, useLoaderData, useActionData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { requireUserId } from "~/utils/session.server";
import { getAppUser } from "~/db/appUsers/appUsers.server";
import { EditFloorPlan } from "~/components/EditFloorPlan";
import { FloorPlanWithId, getFloorPlan, setFloorPlan } from "~/db/floorPlans.server";

interface LoaderData extends FloorPlanWithId {
  userId: string;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const userId = await requireUserId(request);
  invariant(params.floorPlanId, "expected params.slug");
  const floorPlan = await getFloorPlan(params.floorPlanId);
  invariant(floorPlan, "expected floorPlan");
  return { ...floorPlan, userId };
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

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const floorPlanId = params.floorPlanId;
  const owner = formData.get("owner");
  const title = formData.get("title");
  const description = formData.get("description");
  const cost = formData.get("cost");
  const githubOwner = formData.get("githubOwner");
  const githubRepo = formData.get("githubRepo");
  const setupTime = formData.get("setupTime");
  const tags = String(formData.get("tags"))?.split(",").map(word => word.trim()) || [];

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

  invariant(typeof floorPlanId === "string");
  invariant(typeof owner === "string");
  invariant(typeof title === "string");
  invariant(typeof description === "string");
  invariant(typeof cost === "string");
  invariant(typeof githubOwner === "string");
  invariant(typeof githubRepo === "string");
  invariant(typeof setupTime === "string");
  invariant(typeof tags === "object");

  await setFloorPlan(floorPlanId,{
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

export default function EditPlan() {
  const {
    userId,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags,
  } = useLoaderData<LoaderData>();
  const errors = useActionData();
  return (
    <EditFloorPlan
      errors={errors}
      owner={userId}
      title={title}
      description={description}
      cost={cost}
      githubOwner={githubOwner}
      githubRepo={githubRepo}
      setupTime={setupTime}
      tags={tags.join(", ")}
    />
  );
}
