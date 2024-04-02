import DOMPurify from "dompurify";
import freshImage from "../assets/images/fresh.png";
import dishesImage from "../assets/images/dishes.png";
import serviceImage from "../assets/images/service.png";

const cardsContent = `
  <div class="cards">
    <div class="card">
    <img src="${freshImage}" alt="Rice bowl icon" />
    <div class="card-text">
    <h4>Fresh Food</h4>
    <p>Indulge in the freshest ingredients sourced locally and handpicked to ensure every dish bursts with flavor and vitality. From crisp salads to succulent seafood, our commitment to freshness shines in every bite.</p>
    </div>
    </div>
    <div class="card">
    <img src="${dishesImage}" alt="Chopsticks with sushi icon" />
    <div class="card-text">
    <h4>Special Dishes</h4>
    <p>Embark on a culinary journey with our chef's special creations that tantalize the taste buds and ignite the senses. From signature entrees to innovative desserts, each dish is crafted with passion and creativity to leave a lasting impression.</p>
    </div>
    </div>
    <div class="card">
    <img src="${serviceImage}" alt="Food service icon" />
    <div class="card-text">
    <h4>Exceptional Service</h4>
    <p>Experience hospitality at its finest with our dedicated team committed to exceeding your expectations. From warm greetings to attentive care, we pride ourselves on providing personalized service that ensures every visit is memorable and enjoyable.</p>
    </div>
    </div>
  </div>`;

export const cleanCards = DOMPurify.sanitize(cardsContent);
