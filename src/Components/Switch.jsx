import React from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
import "./styles.css";
export default function Switch() {
  return (
    <button className="Switch">
      <Sun className="icon" />
      <Moon className="icon" />
    </button>
  );
}
