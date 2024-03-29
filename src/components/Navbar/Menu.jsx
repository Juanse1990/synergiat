import { useState, useEffect } from "react";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

export const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: isScrolled ? "#808080" : "transparent",
        transition: "background-color 1s ease-in-out",
        zIndex: "2",
      }}
      position="fixed"
      display="flex"
      justifyContent="space-around"
      width="100%"
    >
      <Box>
        <Typography variant="h4" color="#fff" sx={{ fontWeight: "bold" }}>
          Logo
        </Typography>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton sx={{ color: "#fff" }} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: "200px",
            padding: "20px",
          }}
        >
          <Button sx={{ color: "#000", "&:hover": { color: "#AE9672" } }}>
            Home
          </Button>
          <Button sx={{ color: "#000", "&:hover": { color: "#AE9672" } }}>
            Menu
          </Button>
          <Button sx={{ color: "#000", "&:hover": { color: "#AE9672" } }}>
            Eventos
          </Button>
          <Button sx={{ color: "#000", "&:hover": { color: "#AE9672" } }}>
            Servicios
          </Button>
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
        </Box>
      </Drawer>

      <Button sx={{ display: { xs: "none", md: "flex" } }}>
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
    </Box>
  );
};
