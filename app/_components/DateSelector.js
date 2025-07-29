"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useRange } from "../context/RangeContext";
import { isBefore, isPast, isSameDay } from "date-fns";

function DateSelector({ bookedDates }) {
  const { range, setRange, reset } = useRange();

  return (
    <div className="bg-gray-800">
      <DayPicker
        navLayout="around"
        startMonth={new Date()}
        numberOfMonths={2}
        mode="range"
        selected={range}
        onSelect={setRange}
        min={2}
        max={5}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates?.some((date) => isSameDay(date, curDate))
        }
        excludeDisabled
        className=" text-gray-300 rounded-lg p-4 flex disabled:cursor-not-allowed disabled:text-gray-600"
        // footer={
        //   range
        //     ? `Selected from ${range.from?.toLocaleDateString()} to ${range.to?.toLocaleDateString()}`
        //     : "Please select a date range"
        // }
      />
      <button
        onClick={reset}
        className="rounded-sm  m-4 w-32 bg-gray-600 text-center p-2 hover:text-lg hover:bg-slate-500 "
      >
        Reset
      </button>
    </div>
  );
}

export default DateSelector;
