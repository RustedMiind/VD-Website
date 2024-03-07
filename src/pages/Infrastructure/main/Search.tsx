import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { useState } from "react";

function SearchComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Box>
        <IconButton onClick={() => setExpanded(!expanded)}>
          <SearchIcon />
        </IconButton>
      </Box>
      <motion.div
        style={{
          pointerEvents: expanded ? "all" : "none",
        }}
        animate={
          expanded ? { width: "100%", opacity: 1 } : { width: "0", opacity: 0 }
        }
      >
        <Stack direction={"row"} spacing={1} component="form">
          <TextField label="البحث" sx={{ flexGrow: 1 }} size="small" />
          <Button variant="contained">بحث</Button>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default SearchComponent;
