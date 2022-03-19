import { Button, Stack, Typography } from "@mui/material";
import type { MetaFunction } from "remix";
import { Link } from "remix";
import { AppPaper } from "~/components/AppPaper";
import { FloorPlanCard } from "~/components/FloorPlanCard";

export const meta: MetaFunction = () => {
  return {
    title: "Floor Plan: Copy/Pasta/Twerk",
    description: "Codes Sagas a place to learn a million and one ways to code.",
  };
};

export default function Index() {
  return (
    <Stack
      sx={{
        maxWidth: "700px",
        margin: "80px auto",
        width: "80%",
      }}
    >
      <AppPaper>
        <Typography variant="h3">floor plan</Typography>
        <Typography variant="h4">/ˈflô(ə)r ˌplan/</Typography>
        <Typography variant="h6">noun </Typography>
        <Typography variant="h4">
          A place to share and discover app stacks so that you can start
          bringing your ideas to life.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/floor-plans/create"
          >
            Create a floor plan
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/floor-plans/"
          >
            Search floor plans
          </Button>
        </Stack>
      </AppPaper>

      {/* <FloorPlanCard
        title={"Remix with Firebase on Netlify"}
        description={
          "A React app written with Remix and Firebase deployed on Netlify. It uses Typescript and has all the building blocks to get your app off the ground."
        }
        cost={"FREE"}
        popularity={{
          rating: 4.5,
          count: 3,
        }}
        url={"https://github.com/floorplan/floorplan#welcome-to-floorplan"}
        setupTime={"1hr"}
      /> */}
    </Stack>
  );
}
