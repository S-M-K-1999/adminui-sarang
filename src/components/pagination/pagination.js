import React from "react";
import "./pagination.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



// finding the number of buttons
const PaginationBtn = ({ No_pages, setCurrpage, currPage }) => {
    var totalCount = []
    for(let i=1;i<=No_pages;i++){
        totalCount.push(i)
    }
  return (
    <div className="pagination-btn">
      {totalCount <= 1 ? (
        ""
      ) : (
        <>
          <button
            style={{ marginRight: "10px" }}
            className={currPage === 1 ? "disabled" : "active"}
            onClick={() => setCurrpage(1)}
          >
            <KeyboardDoubleArrowLeftIcon fontSize="large" />
          </button>
          <button
            style={{ marginRight: "10px" }}
            className={currPage === 1 ? "disabled" : "active"}
            onClick={() => setCurrpage(currPage - 1)}
          >
            <ArrowBackIosIcon />
          </button>
          {totalCount.map((ele, ind) => (
            <button
              style={{ marginRight: "10px" }}
              className={ele === currPage ? "active" : "paginationBtn"}
              onClick={() => setCurrpage(ele)}
              key={ind}
            >
              {ele}
            </button>
          ))}
          <button
            style={{ marginRight: "10px" }}
            className={
              currPage === totalCount[totalCount.length - 1] ? "disabled" : "active"
            }
            onClick={() => setCurrpage(currPage + 1)}
          >
            <ArrowForwardIosIcon />
          </button>
          <button
            style={{ marginRight: "10px" }}
            className={
              currPage === totalCount[totalCount.length - 1] ? "disabled" : "active"
            }
            onClick={() => setCurrpage(totalCount[totalCount.length - 1])}
          >
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </button>
        </>
      )}
    </div>
  );
};

export { PaginationBtn };
