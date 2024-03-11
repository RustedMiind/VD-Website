import {
  Box,
  Button,
  Container,
  Grid,
  GridProps,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import fileImage from "assets/images/IPB.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import InfrastructureCard from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
const GridItem = (props: GridProps) => (
  <Grid item lg={3} md={4} sm={6} {...props}>
    {props.children}
  </Grid>
);
export default function CardContainer() {
  const cardCount = 20;
  const projects = useSelector((state: RootState) => state.infrastructure);
  return (
    <Grid container spacing={4}>
      {projects.contracts.map((contract) => (
        <GridItem>
          <InfrastructureCard details={contract} />
        </GridItem>
      ))}
    </Grid>
  );
}
