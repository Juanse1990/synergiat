import { Box, Typography } from "@mui/material";
import Carrousel from "./Carrousel";

const sections = ["Almuerzos", "Desayunos y Cenas", "Postres", "Bebidas"];
const names = [
  "nombre",
  "nombre",
  "nombre",
  "apellido",
  "apellido",
  "apellido",
];
const prices = ["00,00", "00,00", "00,00", "50,00", "50,00", "50,00"];

export const Recommendations = () => {
  return (
    <Box mt={10} width={{ xs: "100%", md: "100%" }}>
      <Typography
        fontFamily="Jost"
        margin={{ xs: "50px auto" }}
        width={{ xs: "90%" }}
        display="flex"
        justifyContent="center"
        variant="h4"
        fontSize={{ xs: "25px" }}
        fontWeight="bold"
      >
        Tus recomendaciones
      </Typography>
      <Box
        sx={{
          width: { sm: "60%", xs: "90%" },
          margin: { md: "0 auto", xs: "0 auto" },
        }}
      >
        {sections.map((sections) => (
          <Box key={sections}>
            <Typography variant="h5" fontFamily="Jost" pb="10px">
              {sections}
            </Typography>
            <Carrousel names={names} prices={prices} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
