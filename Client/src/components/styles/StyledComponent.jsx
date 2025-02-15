import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled ("input")({
    
    position: "absolute",
    clip: "rect(0 0 0 0)",
    width: "1px",
    height: "1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    margin: "-1px",
    padding: 0,
    border: 0,

    zIndex: -1,
    cursor: "none"

  });
