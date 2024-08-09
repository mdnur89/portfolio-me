import React, { useState } from 'react';

const Menu = ({onDark, ...props}) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(open => !open);
  }

  const background = onDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(250, 250, 250, 0.3)';
  const color = onDark ? 'rgba(240, 240, 240, 0.8)' : 'rgba(50, 50, 50, 0.8)';
  const shadow = onDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
  return(
    <div {...props}
      css={[
        {
          background,
          borderRadius: 3,
          boxShadow: `1px 1px 12px -4px ${shadow}`,
          zIndex: 10,
          left: 0,
          transition: 'left 0.3s ease-in-out',
          ':hover': {
            cursor: 'pointer'
          }
        },
        !open &&
        {
          left: -270,
        }
      ]}
    >
      <div onClick={handleClick} css={[
        {
          display: 'inline-block',
          position: 'relative',
          left: 0,
          padding: '12px 14px 12px 8px',
          transition: 'left 0.3s ease-in-out',
        },
        !open &&
        {
          left: 270,
        }
      ]}>
        <div css={
        [{
          display: 'inline-block',
          border: '6px solid transparent',
          borderRight: `6px solid ${color}`,
          transition: 'all 0.3s ease-in-out',
          transformOrigin: '9px center',
        },
        !open &&
        {
          transformOrigin: '9px center',
          transform: 'rotate(180deg)'
        }
      ]}>
        </div>
      </div>
      
      <ul css={[
        {
          position: 'relative',
          borderLeft: `1px groove ${shadow}`,
          display: 'inline-block',
          listStyle: 'none',
          transition: 'left 0.3s ease-in-out',
          left: 0,
          li: {
            display: 'inline-block',
            color,
            padding: 12,
            userSelect: 'none',
            ':hover': {
              cursor: 'pointer',
              background: 'rgba(150, 150, 150, 0.5)'
            },
            [`:nth-of-type(${props.section})`]: {
              background: `rgba(${props.section % 2 === 0 ? '100, 100, 100, 0.5' : '200, 200, 200, 0.5'})`
            }
          }
        },
        !open &&
        {
          left: -300,
        }
        ]}>
        {props.children}
      </ul>
    </div>
  )
}

export default Menu
