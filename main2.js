  
/*lo script sottostante permette di cambiare l'immagine ogni volta che viene cliccata l'immagine */

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/matematica.jpg") {
    myImage.setAttribute("src", "images/matematica-2.jpg");
  } else {
    myImage.setAttribute("src", "images/matematica.jpg");
  }
};
