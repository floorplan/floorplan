import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AuthControls from "~/components/AuthControls";
import Typography from "@mui/material/Typography";
import { Link } from "remix";
import { Stack } from "@mui/material";

export function AppBar() {
  return (
    <>
      <MuiAppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Stack direction={"row"}>
              <Typography
                variant="h4"
                noWrap
                sx={(theme) => ({
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: "text",
                  textFillColor: "transparent",
                })}
              >
                Floor Plan
              </Typography>
              <Typography
                variant="h6"
                noWrap
                color={"secondary"}
                sx={(theme) => ({
                  fontSize: "14px",
                })}
              >
                {" "}
                [BETA]
              </Typography>
            </Stack>
          </Link>

          <AuthControls />
        </Toolbar>
      </MuiAppBar>
      <Box sx={{ marginBottom: "64px" }} />
    </>
  );
}
