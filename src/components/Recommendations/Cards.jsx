import PropTypes from "prop-types";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import comida1 from "../../assets/comida1.jpg";
import comida2 from "../../assets/comida2.jpg";

export const Cards = ({ names, prices }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "210px",
        height: "273px",
        borderRadius: "20px",
        padding: "16px",
      }}
    >
      <CardActionArea sx={{ width: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          height="162px"
          width="178px"
          image={names === "nombre" ? comida1 : comida2}
          alt={names}
          sx={{ borderRadius: "10px" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography gutterBottom variant="h5" fontFamily="Jost">
            {names}
          </Typography>
          <Typography variant="body2" fontFamily="Jost">
            ${prices}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Cards.propTypes = {
  names: PropTypes.string.isRequired,
  prices: PropTypes.string.isRequired,
};
