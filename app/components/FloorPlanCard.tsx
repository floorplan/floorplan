import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Card, CardActions, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <AccessTimeIcon fontSize="inherit"/>
          {setupTime}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {/* <MonetizationOnIcon fontSize="inherit"/> */}
          {cost}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {new Array(parseInt(popularity.rating.toString(), 10)).fill(
            <StarIcon fontSize="inherit" />
          )}
          {popularity.rating % 1 > 0 ? <StarHalfIcon /> : null}
          {new Array(5 - Math.ceil(popularity.rating)).fill(
            <StarBorderIcon fontSize="inherit" />
          )}
          ({popularity.count})
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button component={Link} href={url} target="_blank" size="small">
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
}
