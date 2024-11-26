import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
