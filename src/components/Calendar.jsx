import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// const isWeekend = (date) => {
//   const day = date.day();

//   return day === 0 || day === 6;
// };

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(dayjs("2023-02-05"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        maxDate={dayjs("2024-12-31")}
        minDate={dayjs("2023-01-01")}
        defaultCalendarMonth={"Feburary"}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
