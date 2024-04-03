import DOMPurify from "dompurify";
import { cleanMenu } from "./components/menu";
import { cleanLunch } from "./components/lunch";

export const setMenuContent = () => {
  const content = document.getElementById("content");
  const menuBtn = document.querySelector("#menuBtn");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      content.innerHTML = "";
      content.innerHTML = cleanMenu;

      const menuFrame = document.querySelector(".menuFrame");
      const lunchBtn = document.querySelector("#lunch");
      const startersBtn = document.querySelector("#starters");
      const mainCourseBtn = document.querySelector("#mainCourse");
      const dessertsBtn = document.querySelector("#desserts");
      const bevsBtn = document.querySelector("#bevs");

      if (lunchBtn) {
        lunchBtn.addEventListener("click", () => {
          menuFrame.innerHTML = "";
          menuFrame.innerHTML = cleanLunch;
        });
      }
    });
  }
};
