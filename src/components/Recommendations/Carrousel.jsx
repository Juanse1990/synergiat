import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Cards } from "./Cards";

export default function Carrousel({ names, prices }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let content;
  if (activeStep === 0) {
    content = (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Cards key={i} names={names[i]} prices={prices[i]} />
        ))}
      </>
    );
  } else {
    content = (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Cards key={i} names={names[i + 3]} prices={prices[i + 3]} />
        ))}
      </>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: { md: "100%", xs: "60%" },
        alignItems: "center",
        justifyContent: "center",
        margin: "50px 0",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        width={{ md: "100%", xs: "100%" }}
        margin="0 auto"
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft
            sx={{ color: `${activeStep === 1 ? "#AE9672" : undefined}` }}
          />
        </Button>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          {content}
        </Box>
        <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
          <KeyboardArrowRight
            sx={{ color: `${activeStep === 0 ? "#AE9672" : undefined}` }}
          />
        </Button>
      </Box>
    </Box>
  );
}

Carrousel.propTypes = {
  names: PropTypes.array.isRequired,
  prices: PropTypes.array.isRequired,
};
