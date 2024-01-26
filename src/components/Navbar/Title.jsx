import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "376px",
        gap: "24px",
      }}
    >
      <Typography
        display="flex"
        fontFamily="Jost"
        fontWeight={900}
        variant="h3"
        color="primary"
        sx={{
          fontSize: { xs: "2rem", md: "4rem" },
        }}
      >
        Nombre del Hotel
      </Typography>
      <Button
        fontFamily="Jost"
        variant="contained"
        size="large"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.brown,
        }}
      >
        Hacer Reserva
      </Button>
    </Box>
  );
};
