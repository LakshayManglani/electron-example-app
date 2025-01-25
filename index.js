const root = document.getElementById("root");

const para1 = document.createElement("p");
para1.textContent = "Hello World";
para1.classList.add("title");

root.appendChild(para1);

const information = document.createElement("p");
information.textContent = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
information.classList.add("information");

root.appendChild(information);

const btn1 = document.getElementById("btn-1");
let count = 0;
btn1.addEventListener("click", () => {
  btn1.textContent = `Clicked ${++count} times`;
});
