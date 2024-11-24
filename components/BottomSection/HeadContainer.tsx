"use client";
import { Stack, styled, Typography } from "@mui/material";

const Container = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  margin: "2rem 0",
  [theme.breakpoints.down("sm")]: {},
}));

function HeadContainer() {
  return (
    <Container>
      <Typography
        sx={{
          color: "#003569",
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Our Blog
      </Typography>
      <Typography sx={{ color: "#17414F", fontWeight: 600, fontSize: "40px" }}>
        Latest news
      </Typography>
    </Container>
  );
}

export default HeadContainer;
