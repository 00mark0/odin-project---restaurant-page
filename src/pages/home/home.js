import DOMPurify from "dompurify";
import "../../styles/home.css";

const heroContent = `
  <div class="hero-content">
  <h1>Bistro Bliss</h1>
  <p>Welcome to Bistro Bliss</p>
  <button>BOOK YOUR TABLE</button>
  </div>
  <footer>
  <p><a href="https://www.pexels.com/photo/steamed-food-with-leafs-on-table-1833349/">Photo by Valeria Boltneva from Pexels</a></p>
  </footer>`;

const cleanHeroContent = DOMPurify.sanitize(heroContent);

export const createHomePage = () => {
  const content = document.getElementById("content");
  content.innerHTML = cleanHeroContent;

  const homeBtn = document.getElementById("homeBtn");
  homeBtn.addEventListener("click", () => {
    content.innerHTML = cleanHeroContent;
  });
};
