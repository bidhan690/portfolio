import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

export default function Techlist({ name }) {
  return (
    <div className="sm:overflow-x-hidden">
      <ul>
        <div className="grid grid-cols-3 md:grid-cols-1">
          {name &&
            name.map((names, i) => {
              return (
                <li key={i} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-2" />
                  <span>{names}</span>
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
}
