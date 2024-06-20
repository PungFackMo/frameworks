//components/DownSlide.js
import * as React from "react";
import { Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default Transition