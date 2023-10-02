import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: {
          sm: "space-around",
        },
        alignItems: {
          xs: "center",
          sm: "initial",
        },
        borderTopRightRadius: "100px",
        backgroundColor: "hsl(231, 8%, 17%)",
        padding: {
          xs: "20px",
          sm: "34px",
          lg: "40px",
        },
      }}
    >
      <Box sx={{ marginBottom: { xs: "30px" } }}>
        <Typography variant="h4">
          <b>Blogr</b>
        </Typography>
      </Box>

      <Stack spacing={1}>
        <Typography>
          <b>Product</b>
        </Typography>
        <Stack spacing={0.5}>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Overview
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Pricing
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Marketplace
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Features
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Integrations
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1} sx={{ marginTop: { xs: "20px", sm: "0" } }}>
        <Typography>
          <b>Company</b>
        </Typography>
        <Stack spacing={0.5}>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            About
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Team
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Blog
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Careers
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1} sx={{ marginTop: { xs: "20px", sm: "0" } }}>
        <Typography>
          <b>Connect</b>
        </Typography>
        <Stack spacing={0.5}>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Contact
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Newsletter
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ opacity: "100%" }}
            variant="subtitle3"
            sx={{ opacity: "80%" }}
          >
            Linkedin
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
