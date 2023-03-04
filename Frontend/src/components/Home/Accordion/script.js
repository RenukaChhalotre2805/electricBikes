import { Data } from "./Data";
export function caller() {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, index) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
      panel.style.flex = 5;
      const que = document.createElement("h1");
      que.textContent = Data[index].question;
      panel.appendChild(que);
      // const que2 = document.getElementsByTagName("h1");
      // console.log(que2);
      // que.style.padding = "2rem";
      que.classList.add("que_style");

      const ans = document.createElement("p");
      ans.textContent = Data[index].answer;
      panel.appendChild(ans);
      // ans.style.width = "70%";
      // ans.style.padding = "2rem";
      ans.classList.add("ans_style");
    });
  });
}
function removeActiveClasses() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.classList.remove("active");
    if (panel.lastElementChild) {
      var child = panel.lastElementChild;
      while (child) {
        panel.removeChild(child);
        child = panel.lastElementChild;
      }
    }
    panel.style.flex = 0.5;
  });
}
