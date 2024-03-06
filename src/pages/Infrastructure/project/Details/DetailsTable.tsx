import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableRow,
} from "@mui/material";

const ValueCell = (props: TableCellProps) => (
  <TableCell colSpan={3} {...props} />
);
const LabelCell = (props: TableCellProps) => (
  <TableCell colSpan={1} {...props} sx={{ fontWeight: 700, ...props.sx }} />
);

const FillRow = ({ fillRows }: { fillRows: number }) => (
  <TableCell colSpan={fillRows} />
);

function DetailsTable() {
  return (
    <TableContainer
      sx={(theme) => ({
        width: 1,
        "tr:nth-child(2n)": {
          "td, th": {
            bgcolor: "var(--third-light)",
          },
        },
        "td, th": {
          borderBottom: `1px solid ${theme.palette.primary.light}`,
        },
      })}
    >
      <Table sx={{ width: 1 }}>
        <TableBody>
          <TableRow>
            <LabelCell>اسم المخطط</LabelCell>
            <ValueCell>اسم المخطط</ValueCell>
            <LabelCell>عدد القطع</LabelCell>
            <ValueCell>15</ValueCell>
          </TableRow>

          <TableRow>
            <LabelCell>الموقع</LabelCell>
            <ValueCell>الشمالية جدة</ValueCell>
            <FillRow fillRows={4} />
          </TableRow>

          <TableRow>
            <LabelCell>المساحة</LabelCell>
            <ValueCell>15000 متر</ValueCell>
            <FillRow fillRows={4} />
          </TableRow>

          {/* 
          <TableRow>
            <LabelCell>نظام البناء</LabelCell>
            <ValueCell>تقليدي</ValueCell>
            <FillRow fillRows={4} />
          </TableRow> 
          */}

          <TableRow>
            <LabelCell>المالك</LabelCell>
            <ValueCell>اسم المالك</ValueCell>
            <FillRow fillRows={4} />
          </TableRow>

          <TableRow>
            <LabelCell>المكتب الهندسي</LabelCell>
            <ValueCell>مكتب أبعاد الرؤية</ValueCell>
            <FillRow fillRows={4} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DetailsTable;
