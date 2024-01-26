import { Box, Button, Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const Menu = () => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "45px",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "10px",
      }}
    >
      <Box>
        <Typography variant="h4" color="#fff" sx={{ fontWeight: "bold" }}>
          Logo
        </Typography>
      </Box>
      <Box>
        <Button sx={{ color: "#fff", "&:hover": { color: "#AE9672" } }}>
          Home
        </Button>
        <Button sx={{ color: "#fff", "&:hover": { color: "#AE9672" } }}>
          Menu
        </Button>
        <Button sx={{ color: "#fff", "&:hover": { color: "#AE9672" } }}>
          Eventos
        </Button>
        <Button sx={{ color: "#fff", "&:hover": { color: "#AE9672" } }}>
          Servicios
        </Button>
      </Box>
      <Button>
        <Box
          sx={{
            width: "35px",
            height: "35px",
            background: "white",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
            "&:hover": { color: "#AE9672" },
          }}
        >
          <PersonIcon />
        </Box>
      </Button>
    </Container>
  );
};
