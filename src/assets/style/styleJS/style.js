//used in box header
export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: "50%",
  minHeight: 310,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
}

//used in button home and passCar
export const btn = {
  height: "35px",
  width: "114px",
  marginLeft: " 1px",
  pl: "15px",
  fontSize: " 0.7rem",
  bgcolor: "#00b0f3",
}

//used in passCar
export const btn1 = {
  height: "35px",
  width: "140px",
  marginLeft: "150px",
  marginTop: "20px",
  pl: "15px",
  fontSize: " 0.7rem",
  bgcolor: "#00b0f3",
}

//used in slide

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// used in passCars
export const responsive1 ={
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1
  }
}


