import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function DateTime(props) {
  const [value, onChange] = useState(new Date());
  //   const minDate = new Date();
  //   const maxDate = new Date("02/06/2021 06:00 PM");
  props.setProgress(value);
  //  console.log(value);
  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
        minDate={new Date()}
        // maxDate={new Date()}
      />
    </div>
  );
}

export default DateTime;
