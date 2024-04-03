import { cleanMenu } from "./components/menu";
import { cleanLunch } from "./components/lunch";
import { cleanStarters } from "./components/starters";
import { cleanMainCourses } from "./components/mainCourses";
import { cleanDesserts } from "./components/desserts";
import { cleanBevs } from "./components/beverages";

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

      if (startersBtn) {
        startersBtn.addEventListener("click", () => {
          menuFrame.innerHTML = "";
          menuFrame.innerHTML = cleanStarters;
        });
      }

      if (mainCourseBtn) {
        mainCourseBtn.addEventListener("click", () => {
          menuFrame.innerHTML = "";
          menuFrame.innerHTML = cleanMainCourses;
        });
      }

      if (dessertsBtn) {
        dessertsBtn.addEventListener("click", () => {
          menuFrame.innerHTML = "";
          menuFrame.innerHTML = cleanDesserts;
        });
      }

      if (bevsBtn) {
        bevsBtn.addEventListener("click", () => {
          menuFrame.innerHTML = "";
          menuFrame.innerHTML = cleanBevs;
        });
      }
    });
  }
};
