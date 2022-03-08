import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useLoaderData, LoaderFunction } from "remix";
import { BlogCard } from "~/components/BlogCard";
import { getAppUser } from "~/db/appUsers/appUsers.server";
import { BlogPostWithId, getAllBlogPosts } from "~/db/blogPosts.server";
import { getUserId } from "~/utils/session.server";

interface LoaderData {
  posts: BlogPostWithId[];
  isAuthor: boolean;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser?.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  const posts = await getAllBlogPosts();
  return { posts, isAuthor };
};

export default function Blog() {
  const { posts, isAuthor } = useLoaderData<LoaderData>();
  return (
    <>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "80%",
        }}
      >
        <Typography variant="h1" textAlign="center">
          Blog
        </Typography>
        {isAuthor ? (
          <Button component={Link} to="/blog/new">
            Add Blog Post
          </Button>
        ) : null}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "80%",
        }}
        justifyContent="space-around"
      >
        {posts.map((post) => (
          <Box
            key={post.id}
            sx={{
              flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
              margin: 2,
            }}
          >
            <BlogCard
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
              url={`/blog/${post.slug}`}
              // imageUrl={post.imageUrl || ""}
              // imageAlt={post.imageAlt || ""}
            />
          </Box>
        ))}
      </Stack>
    </>
  );
}
