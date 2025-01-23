import React from "react";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const today = new Date();
const month = monthList[today.getMonth()];
const year = today.getFullYear();
const date = today.getDate();
const currentDate = month + " " + date + "," + year;
const TodayDate = () => {
  return <div>{currentDate}</div>;
};

export default TodayDate;
