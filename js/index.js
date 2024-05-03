function changeGradient() {
    let degree = 0;
  
    function setBackground() {
      degree === -360 ? (degree = 0) : degree--;
      document.querySelector("body").style.background = `
      conic-gradient(from ${degree}deg at 50% 50%, 
      hsl(186, 36%, 18%), 
      hsl(186, 36%, 10%) 0.5%, 
      hsl(185, 23%, 90%) 99.6%, 
      hsl(186, 34%, 20%) 100%)`;
    }
  
    setInterval(setBackground, 19);
  }
  changeGradient();
  