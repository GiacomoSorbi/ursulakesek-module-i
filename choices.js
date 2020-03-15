window.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
});

function init() {
  sil9a = document.getElementById("sil9a");
  sil9a.style.visibility = "visible";
  sil9a.style.position = "relative";
  sil9a.style.left = "0px";
  sil9a.style.top = "0px";
  sil9a.style.width = "90px";
  sil9a.style.height = "135px";

  sil9b = document.getElementById("sil9b");
  sil9b.style.visibility = "hidden";
  sil9b.style.position = "absolute";
  sil9b.style.left = "0px";
  sil9b.style.top = "0px";
  sil9b.style.width = "90px";
  sil9b.style.height = "135px";

  sil1c = document.getElementById("sil9c");
  sil9c.style.visibility = "hidden";
  sil9c.style.position = "absolute";
  sil9c.style.left = "0px";
  sil9c.style.top = "0px";
  sil9c.style.width = "90px";
  sil9c.style.height = "135px";

  sil9d = document.getElementById("sil9d");
  sil9d.style.visibility = "hidden";
  sil9d.style.position = "absolute";
  sil9d.style.left = "0px";
  sil9d.style.top = "0px";
  sil9d.style.width = "90px";
  sil9d.style.height = "135px";

  sil9e = document.getElementById("sil9e");
  sil9e.style.visibility = "hidden";
  sil9e.style.position = "absolute";
  sil9e.style.left = "0px";
  sil9e.style.top = "0px";
  sil9e.style.width = "90px";
  sil9e.style.height = "135px";
}
function animateImage() {
  /*arm.style.left = parseInt(arm.style.left) + 10 + "px";*/
  /*arm.style.top = parseInt(arm.style.top) - 30 + "px";*/
  /*arm1c.style.visibility = "visible";*/
  sil9a.style.visibility = "visible";
  sil9b.style.visibility = "visible";
  sil9a.style.left = `${parseInt(sil9b.style.left) + 50}px`;
  /*arm.style.left = parseInt(arm.style.left) + 25 + "px";*/
  /*arm.style.height = parseInt(arm.style.height) - 25 + "px";*/

  animate = setTimeout(() => {
    animateImage;
  }, 1500);
  if ((sil9a.style.left = `${parseInt(sil9a.style.left) + 350}px`));
  {
    stopAnimation();
  }

  function stopAnimation() {
    clearTimeout(animate, 1000);
    const newLocalLeft = (sil9a.style.left = "450px");
    const newLocalTop = (sil9a.style.top = "-200px");
  }
}

window.onload = init;
