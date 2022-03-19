import {
  Button,
  Typography,
  Link,
  Card,
  CardActions,
  CardContent,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "remix";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
interface FloorPlanCardProps {
  owner: string;
  title: string;
  description: string;
  cost: string;
  // TODO: when we have users then lets do this
  // popularity: {
  //   rating: number;
  //   count: number;
  // };
  githubOwner: string;
  githubRepo: string;
  setupTime: string;
  tags: string[];
  id: string;
  userId: string | null;
}

export function FloorPlanCard({
  title,
  description,
  cost,
  githubOwner,
  githubRepo,
  setupTime,
  tags,
  id,
  userId,
  owner,
}: FloorPlanCardProps) {
  return (
    <Card sx={{ margin: "20px auto" }}>
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
          >
            {title}
          </Typography>
          <Stack direction={"row"} spacing={1} alignItems="center">
            <Typography variant="h5" color="text.secondary">
              <AccessTimeIcon fontSize="inherit" />
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {setupTime}
            </Typography>
            <Typography variant="h6" color="primary">
              {/* <MonetizationOnIcon fontSize="inherit"/> */}
              {cost}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-end",
        }}
      >
        {/* <Stack direction={"row"} alignItems="center" spacing={2}>
          <Typography
            variant="h5"
            color="text.secondary"
            component={Stack}
            direction={"row"}
            alignItems="center"
          >
            {new Array(parseInt(popularity.rating.toString(), 10))
              .fill(null)
              .map((val, idx) => (
                <StarIcon key={idx} />
              ))}
            {popularity.rating % 1 > 0 ? <StarHalfIcon /> : null}
            {new Array(5 - Math.ceil(popularity.rating))
              .fill(null)
              .map((val, idx) => (
                <StarBorderIcon key={idx} />
              ))}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ({popularity.count})
          </Typography>
        </Stack> */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "stretch", md: "center" }}
          justifyContent="flex-end"
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          {owner === userId ? (
            <Button
              component={RouterLink}
              to={`/floor-plans/${id}/edit`}
              size="large"
            >
              edit
            </Button>
          ) : null}
          <Button
            component={Link}
            href={`https://github.com/${githubOwner}/${githubRepo}#readme`}
            target="_blank"
            size="large"
          >
            Get Started
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
