import { useState } from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Hotel from "../../assets/Hotel.jpg";
import Rooms from "../../assets/Rooms.png";

const room = ["Nombre de la Habitación", "Nombre del Cuarto"];
const description = [
  "Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus. Enim ipsum nisi gravida massa odio. Volutpat fermentum.",
  "Enim ipsum nisi gravida massa odio. Volutpat fermentum. Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus.",
];

export const Carrousel2 = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#AE9672",
        width: { xs: "100%", md: "100%" },
        margin: "0 auto",
      }}
    >
      <Box
        margin="0 auto"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        padding={4}
        alignItems="center"
        justifyContent="center"
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft
            sx={{ color: `${activeStep === 1 ? "#fff" : undefined}` }}
          />
        </Button>
        <Box
          margin="0 auto"
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          padding={4}
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={activeStep === 0 ? Rooms : Hotel}
            alt="Hotel"
            loading="lazy"
            width="448px"
            height="286px"
            style={{ borderRadius: "10px" }}
          />
          <Box
            margin="20px 56px"
            padding={3}
            width={{ xs: "90%", sm: "90%", md: "30%" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant="h3"
              fontFamily="Jost"
              fontWeight={700}
              fontSize={{ xs: 20, sm: 20 }}
              color="primary"
            >
              {activeStep === 0 ? room[0] : room[1]}
            </Typography>
            <Typography
              py={2}
              fontFamily="Jost"
              fontWeight="400"
              variant="h3"
              fontSize={{ xs: 16, sm: 18 }}
              color="primary"
            >
              {activeStep === 0 ? description[0] : description[1]}
            </Typography>
            <Button
              fontFamily="Jost"
              sx={{
                marginTop: "20px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.brown,
              }}
              variant="contained"
            >
              Hacer Reservación
            </Button>
          </Box>
        </Box>
        <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
          <KeyboardArrowRight
            sx={{ color: `${activeStep === 0 ? "#fff" : undefined}` }}
          />
        </Button>
      </Box>
    </Box>
  );
};
