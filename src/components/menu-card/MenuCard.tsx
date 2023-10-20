import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";

function MenuCard(props: PropsType) {
  return (
    <Paper
      sx={{ py: 2, ...(props.gutterBottom ? { mb: 2 } : undefined) }}
      elevation={4}
    >
      <Typography variant="h6" fontWeight="bold" px={2}>
        {props.title}
      </Typography>
      <MenuList>
        {props.items.map((item) => (
          <MenuItem>
            {props.checkIcons && (
              <ListItemIcon>
                <TaskAltIcon color="primary" fontSize="small" />
              </ListItemIcon>
            )}
            <ListItemText>{item.name}</ListItemText>
            {item.value && (
              <Typography variant="body2" color="text.secondary">
                {item.value}
              </Typography>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}

type PropsType = {
  title: string;
  items: ItemType[];
  checkIcons?: boolean;
  gutterBottom?: boolean;
};

type ItemType = { name: string; value?: string };

export default MenuCard;
