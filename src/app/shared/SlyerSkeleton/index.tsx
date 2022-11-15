import {  Grid, } from "@mui/material";
import CardSkeleton from "../components/CardSkeleton";


const SliderSkeleton = () => {
  return (
    <Grid container m={5} spacing={1}>
    <Grid item lg={2}> <CardSkeleton/></Grid>
    <Grid item lg={2}> <CardSkeleton/></Grid>
    <Grid item lg={2}> <CardSkeleton/></Grid>
    <Grid item lg={2}> <CardSkeleton/></Grid>
    <Grid item lg={2}> <CardSkeleton/></Grid>
    </Grid>
  );
};

export default SliderSkeleton;
