import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ProfileCard({ name, occupation, image, linkedin }) {
  return (
    <Card
      sx={{
        maxWidth: 320,

        textAlign: "center",
        borderRadius: 4,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 300,
          width: 300,

          objectFit: "cover",
        }}
        image={image}
        title="Profile Image"
      />
      <CardContent sx={{ padding: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "medium" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {occupation}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", padding: 0 }}>
        <IconButton
          size="small"
          color="primary"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="medium" />
        </IconButton>
      </CardActions>
    </Card>
  );
}