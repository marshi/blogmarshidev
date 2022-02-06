import React from "react";

export default function Container({children}: { children: React.ReactNode }) {
  return (
    <div style={{margin: "auto", maxWidth: "1000px"}}>
      {children}
    </div>
  )
}
