import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
