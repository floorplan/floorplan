import * as React from "react";
import {
  LoaderFunction,
  ScrollRestoration,
  useLoaderData,
  Links,
  LiveReload,
  Outlet,
  useCatch,
  Meta,
  Scripts,
} from "remix";
import globalStylesUrl from "~/styles/global.css";
import { AuthProvider } from "~/state/AuthProvider";
import { AppBar } from "~/components/AppBar";
import { theme } from "./theme";
import { AuthUser, getAuthUser, getUserToken } from "~/utils/session.server";
import { AppPaper } from "./components/AppPaper";
import { withEmotionCache } from "@emotion/react";
import {
  Stack,
  Typography,
  unstable_useEnhancedEffect as useEnhancedEffect,
} from "@mui/material";
import { useContext } from "react";
import ClientStyleContext from "~/theme/ClientStyleContext";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
  ];
}

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    );
  }
);

type LoaderData = { user: AuthUser | null; userToken: string | null };

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getAuthUser(request);
  const userToken = await getUserToken(request);

  const data: LoaderData = {
    user,
    userToken,
  };
  return data;
};

function Providers({
  user,
  children,
  userToken,
}: {
  user: AuthUser | null;
  children: React.ReactNode;
  userToken: string | null;
}) {
  return (
    <AuthProvider user={user} userToken={userToken}>
      {children}
    </AuthProvider>
  );
}

export default function App() {
  const { user, userToken } = useLoaderData<LoaderData>();

  return (
    <Document>
      <Providers user={user} userToken={userToken}>
        <AppBar />
        <Outlet />
      </Providers>
    </Document>
  );
}

function RootError({
  docTitle = "Oops!",
  title = "Something went wrong. 😥",
  message = "Please try again later.",
}) {
  return (
    <Document title={docTitle}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: "100vh", padding: 5 }}
        >
          <AppPaper leftColor="error" rightColor="warning">
            <Typography variant="h1" textAlign="center">
              {title}
            </Typography>
            <Typography>{message}</Typography>
          </AppPaper>
        </Stack>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const title = `${caught.status} ${caught.statusText}`;
  return (
    <RootError
      docTitle={title}
      title={title}
      message={
        "Well this is embarsing. 😅 Have you tried turning it off and back on again?"
      }
    />
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <RootError message={error.message} />;
}
