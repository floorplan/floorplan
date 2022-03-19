import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLoaderData, LoaderFunction, Form } from "remix";
import { AppPaper } from "~/components/AppPaper";
import { FloorPlanCard } from "~/components/FloorPlanCard";
import {
  FloorPlanWithId,
  getFilteredFloorPlans,
} from "~/db/floorPlans.server";
import { getUserId } from "~/utils/session.server";

interface LoaderData {
  floorPlans: FloorPlanWithId[];
  userId: string | null;
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData | Response> => {
  const userId = await getUserId(request);
  const url = new URL(request.url);
  const showMine = url.searchParams.get("show-mine") === "on";
  const queryString = url.searchParams.get("query-string");
  const floorPlans = await getFilteredFloorPlans({
    userId: showMine ? userId : null,
    queryString: queryString || null,
  });
  return { floorPlans, userId };
};

export default function Blog() {
  const { floorPlans, userId } = useLoaderData<LoaderData>();
  return (
    <Stack
      alignItems={"stretch"}
      justifyContent="space-between"
      spacing={4}
      sx={{
        maxWidth: "900px",
        margin: "120px auto",
        width: "80%",
      }}
    >
      <AppPaper>
        <Typography variant="h4" textAlign="center">
          Search to find a floor plan to get your app off the ground.
        </Typography>
        <Divider>
          <Typography variant="h5" textAlign="center" color="text.secondary">
            OR
          </Typography>
        </Divider>
        <Button component={Link} to="/floor-plans/create" size={"large"}>
          Add A Floor Plan To Share
        </Button>
      </AppPaper>
      <Stack
        component={Form}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "stretch", md: "center" }}
        spacing={2}
        sx={{
          margin: "20px 0",
        }}
      >
        <TextField
          id="query-string"
          label="Search for Floor Plan"
          name="query-string"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{
            flex: "1",
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={<Switch name="show-mine" />}
            label="Show My Floor Plans"
          />
        </FormGroup>
        <Button variant="outlined" type="submit">
          Filter
        </Button>
      </Stack>
      <Stack spacing={2}>
        {floorPlans.map((floorPlan) => (
          <>
            <Box
              key={floorPlan.id}
              sx={{
                flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
                margin: 2,
              }}
            >
              <FloorPlanCard
                title={floorPlan.title}
                description={floorPlan.description}
                cost={floorPlan.cost}
                setupTime={floorPlan.setupTime}
                owner={floorPlan.owner}
                githubOwner={floorPlan.githubOwner}
                githubRepo={floorPlan.githubRepo}
                tags={floorPlan.tags}
                id={floorPlan.id}
                userId={userId}

                // popularity={{
                //   rating: 4.5,
                //   count: 3,
                // }}
                // url={
                //   "https://github.com/floorplan/floorplan#welcome-to-floorplan"
                // }
              />
            </Box>
            <Divider />
          </>
        ))}
      </Stack>
    </Stack>
  );
}
