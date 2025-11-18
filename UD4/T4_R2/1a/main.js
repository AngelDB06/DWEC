const cambiarEstilo = () => {
  const normalBtn = document.getElementById("normal");
  const minimalistaBtn = document.getElementById("minimalista");

  const body = document.body;
  const temaBar = document.querySelector(".tema-bar");
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".container");
  const content = document.querySelector(".content");
  const h1 = document.querySelector("h1");
  const p = document.querySelectorAll("p");
  const marco = document.querySelector(".marco");

  normalBtn.addEventListener("click", e => {
    e.preventDefault();

    body.style.fontFamily = "Arial, sans-serif";
    body.style.backgroundColor = "#ffffcc";
    body.style.margin = "0";
    body.style.padding = "0";

    temaBar.style.backgroundColor = "#e0e0ff";
    temaBar.style.padding = "5px 10px";
    temaBar.style.border = "1px solid #0000ff";
    temaBar.style.fontSize = "14px";
    temaBar.style.marginLeft = "120px";

    document.querySelectorAll(".tema-bar a").forEach(a => {
      a.style.textDecoration = "none";
      a.style.fontWeight = "bold";
      a.style.color = "blue";
      a.style.marginRight = "10px";
    });

    sidebar.style.position = "absolute";
    sidebar.style.width = "100px";
    sidebar.style.backgroundColor = "#33ccff";
    sidebar.style.height = "100vh";

    container.style.display = "flex";
    container.style.marginLeft = "100px";

    content.style.padding = "20px";
    content.style.flex = "1";
    h1.style.fontSize = "24px";
    h1.style.marginTop = "0";

    p.forEach(pElem => {
      pElem.style.fontSize = "16px";
    });

    marco.style.border = "1px solid #cccc00";
    marco.style.backgroundColor = "#ffff99";
    marco.style.padding = "10px";
    marco.style.marginTop = "10px";
  });

  minimalistaBtn.addEventListener("click", e => {
    e.preventDefault();

    body.removeAttribute("style");
    temaBar.removeAttribute("style");
    sidebar.removeAttribute("style");
    container.removeAttribute("style");
    content.removeAttribute("style");
    h1.removeAttribute("style");
    marco.removeAttribute("style");
    document.querySelectorAll(".tema-bar a, p").forEach(el => el.removeAttribute("style"));
  });
};

const main = () =>{
    cambiarEstilo();
}

document.addEventListener("DOMContentLoaded", main);
