import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MessagesIcon = (props) =>
  props.active ? (
    <Svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m.708 15.291 1.382-4.745A7.202 7.202 0 0 1 1.417 7.5c0-.98.186-1.9.558-2.763a7.153 7.153 0 0 1 1.514-2.249A7.153 7.153 0 0 1 5.738.974 6.897 6.897 0 0 1 8.5.417c.98 0 1.9.185 2.762.557a7.153 7.153 0 0 1 2.25 1.514 7.154 7.154 0 0 1 1.514 2.25c.371.861.557 1.782.557 2.762s-.186 1.9-.557 2.762a7.154 7.154 0 0 1-1.514 2.25 7.154 7.154 0 0 1-2.25 1.513 6.898 6.898 0 0 1-2.762.558 7.2 7.2 0 0 1-3.046-.673L.708 15.291Z"
        fill={props.color}
      />
    </Svg>
  ) : (
    <Svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m.625 13.875 1.219-4.188a6.41 6.41 0 0 1-.446-1.312A6.368 6.368 0 0 1 1.25 7c0-.865.164-1.677.492-2.438a6.307 6.307 0 0 1 1.336-1.984 6.316 6.316 0 0 1 1.985-1.336A6.09 6.09 0 0 1 7.5.75a6.09 6.09 0 0 1 2.438.492c.76.328 1.421.774 1.984 1.336a6.307 6.307 0 0 1 1.335 1.985c.329.76.493 1.572.493 2.437 0 .865-.164 1.677-.492 2.438a6.307 6.307 0 0 1-1.336 1.984 6.307 6.307 0 0 1-1.985 1.335 6.083 6.083 0 0 1-2.437.493 6.34 6.34 0 0 1-2.688-.594L.625 13.875Zm1.844-1.844 2-.594a1.285 1.285 0 0 1 .875.063c.333.167.682.292 1.047.375.364.083.734.125 1.109.125 1.396 0 2.578-.484 3.547-1.453C12.016 9.578 12.5 8.396 12.5 7c0-1.396-.484-2.578-1.453-3.547C10.078 2.484 8.896 2 7.5 2c-1.396 0-2.578.484-3.547 1.453C2.984 4.422 2.5 5.604 2.5 7c0 .375.042.745.125 1.11.083.364.208.713.375 1.046a.968.968 0 0 1 .118.43c.005.15-.014.3-.055.445l-.594 2Z"
        fill={props.color}
      />
    </Svg>
  );

export default MessagesIcon;
