import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Card, CardActions, CardContent, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
interface FloorPlanCardProps {
  title: string;
  description: string;
  cost: string;
  popularity: {
    rating: number;
    count: number;
  };
  url: string;
  setupTime: string;
}

export function FloorPlanCard({
  title,
  description,
  cost,
  popularity,
  url,
  setupTime,
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
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h6" color="text.secondary">
              <AccessTimeIcon fontSize="inherit" />
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
          justifyContent: "space-between",
        }}
      >
        <Stack direction={"row"} alignItems="center" spacing={2}>
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
        </Stack>
        <Button component={Link} href={url} target="_blank" size="large">
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
}
