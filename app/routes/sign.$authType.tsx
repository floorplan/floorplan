import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Form, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { AppPaper } from "~/components/AppPaper";
import {
  emailAndPasswordSignIn,
  emailAndPasswordSignUp,
} from "~/firebase/auth";
import { addAppUser } from "~/db/appUsers/appUsers.client";

export const meta: MetaFunction = () => {
  return {
    title: "Floor Plan | Sign In",
    description: "Sign in to start your own code journey!",
  };
};

export const AUTH_TYPES = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up",
};

type LoaderData = { authType: string };

export const loader: LoaderFunction = async ({ request, params }) => {
  // TODO: if a user then redirect to /dashboard
  const data: LoaderData = {
    authType:
      params.authType === "in" ? AUTH_TYPES.SIGN_IN : AUTH_TYPES.SIGN_UP,
  };

  return data;
};

function validateEmail(email: unknown) {
  if (typeof email !== "string" || email.match(/.+@.+\..+/) === null) {
    return `Emails must look like example@example.com`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type FormData = {
  formError?: string;
  fieldErrors?: {
    email: string | undefined;
    password: string | undefined;
  };
  fields?: {
    authType: string;
    email: string;
    password: string;
  };
};

export default function Login() {
  const { authType: initAuthType } = useLoaderData<LoaderData>();
  const [actionData, setActionData] = useState<FormData>({});
  const [authType, setAuthType] = useState(initAuthType);

  const handleAuthType = (event, newAuthType) => {
    if (!newAuthType) return;
    setAuthType(newAuthType);
  };

  useEffect(() => {
    if (initAuthType !== authType) {
      setAuthType(initAuthType);
    }
  }, [initAuthType]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const authType = form.get("authType");
    const email = form.get("email");
    const password = form.get("password");

    if (
      typeof authType !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return setActionData({
        formError: `Form not submitted correctly.`,
      });
    }

    const fields = { authType, email, password };
    const fieldErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    if (Object.values(fieldErrors).some(Boolean))
      return setActionData({ fieldErrors, fields });

    switch (authType) {
      case AUTH_TYPES.SIGN_IN: {
        try {
          const user = await emailAndPasswordSignIn({ email, password });
          if (!user || !user.email) {
            return setActionData({
              fields,
              formError: `Email/Password combination is incorrect`,
            });
          }
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Email/Password combination is incorrect`,
          });
        }
      }
      case AUTH_TYPES.SIGN_UP: {
        // if (userExists) {
        //   return setActionData({
        //     fields,
        //     formError: `User with email ${email} already exists`,
        //   });
        // }
        try {
          const user = await emailAndPasswordSignUp({ email, password });
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Something went wrong trying to create a new user.`,
          });
        }
      }
      default: {
        return setActionData({
          fields,
          formError: `Login type invalid`,
        });
      }
    }
  }
  return (
    <>
      <Stack
        sx={{
          maxWidth: "500px",
          margin: "200px auto",
        }}
      >
        <AppPaper>
          <Typography variant="h1" textAlign={"center"}>
            {authType}
          </Typography>
          <Form
            method="post"
            onSubmit={handleSubmit}
            aria-describedby={
              actionData?.formError ? "form-error-message" : undefined
            }
          >
            <Stack component={Paper} spacing={2}>
              <input type="hidden" name="authType" value={authType} />
              <ToggleButtonGroup
                value={authType}
                exclusive
                onChange={handleAuthType}
                aria-label="Sign In or Sign Up"
                color="secondary"
                fullWidth
              >
                <ToggleButton
                  value={AUTH_TYPES.SIGN_IN}
                  aria-label={AUTH_TYPES.SIGN_IN}
                  color="primary"
                >
                  Sign In
                </ToggleButton>
                <ToggleButton
                  value={AUTH_TYPES.SIGN_UP}
                  aria-label={AUTH_TYPES.SIGN_UP}
                >
                  Sign Up
                </ToggleButton>
              </ToggleButtonGroup>

              <div>
                <TextField
                  label="Email"
                  variant="filled"
                  fullWidth
                  color={
                    authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary"
                  }
                  id="email-input"
                  name="email"
                  defaultValue={actionData?.fields?.email}
                  aria-invalid={Boolean(actionData?.fieldErrors?.email)}
                  aria-describedby={
                    actionData?.fieldErrors?.email ? "email-error" : undefined
                  }
                />
                {actionData?.fieldErrors?.email ? (
                  <Typography
                    color="error"
                    variant="caption"
                    role="alert"
                    id="email-error"
                  >
                    {actionData?.fieldErrors.email}
                  </Typography>
                ) : null}
              </div>
              <div>
                <TextField
                  label="Password"
                  variant="filled"
                  fullWidth
                  color={
                    authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary"
                  }
                  id="password-input"
                  name="password"
                  defaultValue={actionData?.fields?.password}
                  type="password"
                  aria-invalid={
                    Boolean(actionData?.fieldErrors?.password) || undefined
                  }
                  aria-describedby={
                    actionData?.fieldErrors?.password
                      ? "password-error"
                      : undefined
                  }
                />

                {actionData?.fieldErrors?.password ? (
                  <Typography
                    color="error"
                    variant="caption"
                    role="alert"
                    id="password-error"
                  >
                    {actionData?.fieldErrors.password}
                  </Typography>
                ) : null}
              </div>
              <div id="form-error-message">
                {actionData?.formError ? (
                  <Typography
                    color="error"
                    variant="caption"
                    role="alert"
                    id="form-error"
                  >
                    {actionData?.formError}
                  </Typography>
                ) : null}
              </div>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color={
                  AUTH_TYPES.SIGN_IN === authType ? "primary" : "secondary"
                }
              >
                {authType}
              </Button>
            </Stack>
          </Form>
        </AppPaper>
      </Stack>
    </>
  );
}
