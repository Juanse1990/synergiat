import { Box } from "@mui/material";
import { Menu } from "./Menu";
import { Title } from "./Title";
import Hotel from "../../assets/Hotel.jpg";

export const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "376px",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),url(${Hotel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Menu />
      <Title />
    </Box>
  );
};
