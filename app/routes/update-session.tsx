import type { ActionFunction } from "remix";
import { createUserSession } from "~/utils/session.server";

export const action: ActionFunction = async ({ request, params }) => {
  switch (request.method) {
    case "POST":
      const form = await request.formData();
      
      const redirectTo = form.get("redirectTo") as string;
      const userToken = form.get("userToken") as string;
      if (!userToken) {
        throw new Response("Could not update session. Please try again.", {
          status: 404,
        });
      }
      return await createUserSession(userToken, redirectTo);
    default:
      console.log("REQUEST NOT HANDLED");
  }
};
