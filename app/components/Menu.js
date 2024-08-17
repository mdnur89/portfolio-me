import React, { useState } from "react";
import { keyframes } from "@emotion/react";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const colorFlash = keyframes`
  0% { background-color: rgba(150, 150, 150, 0.5); }
  50% { background-color: rgba(200, 200, 200, 0.7); }
  100% { background-color: rgba(150, 150, 150, 0.5); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const Menu = ({ onDark, ...props }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  const background = onDark ? "rgba(0, 0, 0, 0.3)" : "rgba(250, 250, 250, 0.3)";
  const color = onDark ? "rgba(240, 240, 240, 0.8)" : "rgba(50, 50, 50, 0.8)";
  const shadow = onDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";
  return (
    <div
      {...props}
      css={[
        {
          background,
          borderRadius: 3,
          boxShadow: `1px 1px 12px -4px ${shadow}`,
          zIndex: 10,
          left: 0,
          transition: "left 0.3s ease-in-out",
          ":hover": {
            cursor: "pointer",
          },
        },
        !open && {
          left: -270,
        },
      ]}
    >
      <div
        onClick={handleClick}
        css={[
          {
            display: "inline-block",
            position: "relative",
            left: 0,
            padding: "12px 14px 12px 8px",
            transition: "left 0.3s ease-in-out",
          },
          !open && {
            left: 270,
            animation: `${blink} 1s ease-in-out infinite`,
          },
        ]}
      >
        <div
          css={[
            {
              display: "inline-block",
              border: "6px solid transparent",
              borderRight: `6px solid ${color}`,
              transition: "all 0.3s ease-in-out",
              transformOrigin: "9px center",
            },
            !open && {
              transformOrigin: "9px center",
              transform: "rotate(180deg)",
            },
          ]}
        ></div>
      </div>

      <ul
        css={[
          {
            position: "relative",
            borderLeft: `1px groove ${shadow}`,
            display: "inline-block",
            listStyle: "none",
            transition: "left 0.3s ease-in-out",
            left: 0,
            li: {
              display: "inline-block",
              color,
              padding: 12,
              userSelect: "none",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                cursor: "pointer",
                animation: `${shake} 0.5s ease-in-out, ${colorFlash} 1s ease-in-out infinite`,
              },
              [`:nth-of-type(${props.section})`]: {
                background: `rgba(${
                  props.section % 2 === 0
                    ? "100, 100, 100, 0.5"
                    : "200, 200, 200, 0.5"
                })`,
              },
            },
          },
          !open && {
            left: -300,
          },
        ]}
      >
        {props.children}
      </ul>
    </div>
  );
};

export default Menu;
