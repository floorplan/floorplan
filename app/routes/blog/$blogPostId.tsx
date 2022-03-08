import { useLoaderData, Link as RouterLink } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getMDXComponent } from "mdx-bundler/client";
import { BlogPostWithId, getBlogPost } from "~/db/blogPosts.server";
import { useMemo } from "react";
import { Fab, Link, Paper, Typography, Box } from "@mui/material";
import { CodeBlock } from "~/components/CodeBlock";
import { getAppUser } from "~/db/appUsers/appUsers.server";
import { getUserId } from "~/utils/session.server";
import EditIcon from "@mui/icons-material/Edit";
import { getMdx } from "~/utils/mdx.server";

interface LoaderData extends BlogPostWithId {
  code: string;
  isAuthor: boolean;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData> => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser?.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  invariant(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  invariant(blogPost, "expected blogPost");
  const { code, frontmatter } = await getMdx(blogPost.markdown);
  return { ...blogPost, code, isAuthor };
};

const H1 = (props) => (
  <Typography
    variant="h1"
    color="primary"
    sx={{ marginBottom: 3 }}
    {...props}
  />
);
const H2 = (props) => (
  <Typography
    variant="h2"
    color="secondary"
    sx={{ marginBottom: 3 }}
    {...props}
  />
);
const H3 = (props) => (
  <Typography
    variant="h3"
    color="secondary"
    sx={{ marginBottom: 3 }}
    {...props}
  />
);
const H4 = (props) => (
  <Typography
    variant="h4"
    color="secondary"
    sx={{ marginBottom: 3 }}
    {...props}
  />
);
const H5 = (props) => (
  <Typography variant="h5" sx={{ marginBottom: 3 }} {...props} />
);
const H6 = (props) => (
  <Typography variant="h6" sx={{ marginBottom: 3 }} {...props} />
);
const P = (props) => <Typography variant="body" component="p" {...props} />;
const Blockquote = (props) => (
  <Typography
    variant="h6"
    component={Paper}
    sx={{
      padding: 2,
      margin: 2,
      borderLeft: ({ palette }) => `2px solid${palette.primary.main}`,
    }}
    {...props}
  />
);
const Pre = (props) => <div {...props} />;
const Code = (props) => <CodeBlock {...props} />;
const A = (props) => <Link {...props} />;

export default function PostSlug() {
  const { isAuthor, code, imageUrl, imageAlt } = useLoaderData();

  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Box
        component={Paper}
        sx={{
          margin: "178px auto 0px",
          maxWidth: "900px",
          position: "relative",
          padding: 3,
          bgcolor: "background.default",
          minHeight: "100vh",
          borderRadius: "4px",
        }}
      >
        <Box
          component={Paper}
          sx={{
            background: `url(${imageUrl}) no-repeat center center`,
            height: "320px",
            width: "100%",
          }}
        />
        {isAuthor ? (
          <Fab
            color="secondary"
            aria-label="edit"
            component={RouterLink}
            to="edit"
            sx={{ position: "absolute", top: 20, right: 20 }}
          >
            <EditIcon />
          </Fab>
        ) : null}
        {Component ? (
          <Component
            components={{
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              p: P,
              blockquote: Blockquote,
              pre: Pre,
              code: Code,
              a: A,

              // em: (props) => <i style={{ color: "goldenrod" }} {...props} />,
              // wrapper: ({ components, ...rest }) => <main {...rest} />,
              // Planet: () => "Neptune",
              // theme: {
              //   text: (props) => <span style={{ color: "grey" }} {...props} />,
              // },
            }}
          />
        ) : null}
      </Box>
    </>
  );
}
