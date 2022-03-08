import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { AppPaper } from "./AppPaper";
import { Link } from "remix";

interface Props {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}
export function BlogCard({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
}: Props) {
  return (
    <AppPaper sx={{ padding: 0 }}>
      <Card sx={{ borderRadius: "10px", overflow: "hidden" }}>
        <CardActionArea component={Link} to={url}>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={imageAlt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* TODO: implement share action buttons */}
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
    </AppPaper>
  );
}
