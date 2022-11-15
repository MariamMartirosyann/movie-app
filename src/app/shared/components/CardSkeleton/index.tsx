import { Box, Grid, Skeleton } from "@mui/material";
import "./style.css";

const CardSkeleton = () => {
  return (
    <Grid container m={5}>
      <Skeleton
        variant="rectangular"
        width={210}
        height={260}
        sx={{ backgroundColor: "white" }}
      />
      <Box sx={{ pt: 0.5, ml:2 }}>
        <Skeleton width={180} height={20} sx={{ backgroundColor: "white" ,}} />
        <Skeleton width={180} height={20} sx={{ backgroundColor: "white" }} />
      </Box>
    </Grid>
  );
};

export default CardSkeleton;
