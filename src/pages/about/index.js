import "../../styles/about.css";
import { cleanCards } from "./components/cards";
import DOMPurify from "dompurify";

const mainContent = `
<div class="about-wrapper">
<main>
    <section id="cards">
        ${cleanCards}
    </section>
    <section id="about">
        <h2>About</h2>
        <h3>Our history</h3>
        <p>Bistro Bliss has been a cornerstone of culinary excellence since its inception in 420 B.C. Founded by passionate food enthusiasts, our journey began with a vision to create a dining experience that celebrates the essence of good food, warm ambiance, and impeccable service. Over the years, we have grown into a beloved establishment, cherished by locals and visitors alike for our commitment to quality and hospitality.</p>
        <button id="readMore">Read More</button>
        <dialog id="readMoreDialog">
        <p>Welcome to the heart of Bistro Bliss, where every dish tells a story and every moment is cherished.</p>
        <p>Our journey began in a quaint kitchen filled with the aroma of freshly baked bread and simmering sauces. From humble beginnings, we embarked on a culinary adventure fueled by passion, creativity, and a relentless pursuit of perfection.</p>
        <p>As the years passed, our family grew, welcoming talented chefs, dedicated servers, and loyal patrons who became an integral part of our story. Together, we have laughed, celebrated, and created memories that will last a lifetime.</p>
        <p>Behind every recipe lies a tale of inspiration – whether it's a childhood favorite passed down through generations or a daring experiment that sparked a revolution in taste. Each dish is a labor of love, crafted with care and attention to detail to delight your senses and ignite your palate.</p>
        <p>But our story goes beyond the kitchen walls. We are committed to sustainability, sourcing ingredients responsibly and supporting local farmers and producers. We believe in giving back to the community that has embraced us with open arms, whether through charitable initiatives or simply by being a place where friends and families can come together to share a meal and make memories.</p>
        <p>So come, join us on this journey through flavors, traditions, and the joy of good food. Step into Bistro Bliss and experience the magic for yourself. We can't wait to welcome you into our family.</p>
        <button id="closeDialog">Close</button>
        </dialog>
        </section>
</main>
<footer>
<p><a href="https://www.pexels.com/photo/vegetable-salad-on-plate-near-hot-beverage-2351274/">Photo by julie aagaard from Pexels</a></p>
</footer>
</div>
`;

const cleanMainContent = DOMPurify.sanitize(mainContent);

export const createAboutPage = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const content = document.getElementById("content");
    const aboutBtn = document.getElementById("aboutBtn");

    aboutBtn.addEventListener("click", () => {
      content.innerHTML = "";
      content.innerHTML = cleanMainContent;

      const readMoreBtn = document.getElementById("readMore");
      const closeDialogBtn = document.getElementById("closeDialog");

      if (readMoreBtn) {
        readMoreBtn.addEventListener("click", () => {
          const dialog = document.getElementById("readMoreDialog");
          dialog.showModal();
        });
      }
      if (closeDialogBtn) {
        closeDialogBtn.addEventListener("click", () => {
          const dialog = document.getElementById("readMoreDialog");
          dialog.close();
        });
      }
    });
  });
};
