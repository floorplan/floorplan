import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { MetaFunction } from "remix";
import { Link } from "remix";
import { AppPaper } from "~/components/AppPaper";

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
          An app framework designed to help you validate your idea quickly.
        </Typography>
        {/* <Button
          component={Link}
          to="/sign/in"
          size={"large"}
          variant={"contained"}
        >
          SIGN IN
        </Button> */}
      </AppPaper>
    </Stack>
  );
}
