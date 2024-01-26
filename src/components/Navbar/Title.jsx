import { Button, Container, Typography } from "@mui/material";

export const Title = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "376px",
        gap: "24px",
      }}
    >
      <Typography variant="h3" color="#fff" sx={{ fontWeight: "bold" }}>
        Nombre del Hotel
      </Typography>
      <Button
        sx={{
          width: "420px",
          height: "40px",
          background: "#fff",
          color: "#AE9672",
          "&:hover": { background: "#AE9672", color: "#fff" },
        }}
      >
        Hacer Reserva
      </Button>
    </Container>
  );
};
