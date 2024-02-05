import { Pagination, PaginationProps, Stack, StackProps } from "@mui/material";

function CenteredPagination({
  stackProps,
  ...props
}: PaginationProps & { stackProps?: StackProps }) {
  return (
    <Stack alignItems="center" justifyContent="center" py={2} {...stackProps}>
      <Pagination {...props} />
    </Stack>
  );
}

export default CenteredPagination;
