import React from 'react'



const Button = (props: {variant: 'primary'|'secondary', width: string, children: any}) => {
  const {variant, width, children} = props;
  const btnStyle={
    backgroundColor: variant==='primary'?'white':'black',
    height: "40px",
    width: width,
    padding: "15px",
    border: variant==='primary'?"1px solid black":"none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: variant==="primary"?"black":"white",
    fontSize: "12px"
  }
  return (
    <button style={btnStyle} className='gap-1'>
        {children}
    </button>
  )
}

export default Button