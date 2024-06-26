import React, { useEffect, useState } from "react";
import { createStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Card,
  Container,
  IconButton,
  TableFooter,
  TablePagination,
} from "@mui/material";
import Axios from "axios";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseItem,
  fetchCourseInfo,
} from "../../../../../Redux/course/courseAction";

const useStyles = createStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    paddingTop: "30px",
  },
});

const CourseInfoTable = ({ course }) => {
  const classes = useStyles

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.course.courseInfo);
  const {updateCourseList}  = useSelector((state) => state.course)

  console.log(courseData)

 console.log(updateCourseList)

  const updateList = async () => {
    setData(courseData);
    //console.log(data)
  };

  useEffect(() => {
    dispatch(fetchCourseInfo());
    
  }, [course,updateCourseList]);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const deleteCourseHandler = (courseId) => {
    dispatch(deleteCourseItem(courseId))
    updateList();
  };
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-dark ">
              <TableCell align="center" className="text-light">
                Id
              </TableCell>
              <TableCell align="center" className="text-light">
                CourseName
              </TableCell>
              <TableCell align="center" className="text-light">
                Course Thumbnail
              </TableCell>
              <TableCell align="center" className="text-light">
                Created By
              </TableCell>
              <TableCell align="center" className="text-light">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? courseData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : courseData
            ).map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row" align="center">
                  {row._id}
                </TableCell>

                <TableCell align="center">{row.courseName}</TableCell>
                <TableCell align="center">
                  <img
                    style={{
                      height: "40px",
                      width: "60px",
                      objectFit: "contain",
                    }}
                    src={row.courseThumbnail}
                    alt=""
                  />
                </TableCell>

                <TableCell align="center">{row.createdAt.role}</TableCell>
                <TableCell className="" align="center">
                  <IconButton>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => deleteCourseHandler(row._id)}>
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 7, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CourseInfoTable;
