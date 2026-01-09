import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

type CustomCardProps = {
  image?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const CustomCard: React.FC<CustomCardProps> = ({
  image,
  title,
  description,
  buttonText = "Learn More",
  onButtonClick,
}) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      {image && (
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {onButtonClick && (
        <CardActions>
          <Button size="small" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
