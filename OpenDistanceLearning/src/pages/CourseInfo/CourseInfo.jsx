import { Container, Paper, Typography } from "@mui/material";

import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./CourseInfo.module.css";
import NoticeToggle from "./NoticeToggle/NoticeToggle";
import { useParams } from "react-router-dom";

const CourseInfo = () => {
  const {courseId}=useParams()
  return (
    <div>
      <CommonHeader title={courseId} />
      <Container className="my-5">
        <Paper className="px-5 py-3">
          <div className="">
            <div className="d-flex justify-content-between align-items-center my-4">
              <Typography variant="h6">Course Content</Typography>
              <Typography style={{ color: "GrayText" }} variant="subtitle2">
                Course start date: 17/05/24 Category: Jan - Jun 2024
              </Typography>
            </div>
            <NoticeToggle />
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default CourseInfo;
