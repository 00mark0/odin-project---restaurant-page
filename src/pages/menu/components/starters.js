import DOMPurify from "dompurify";

const startersContent = `
<div class="itemContainer">
    <div class="item">
        <h4>Classic Bruschetta</h4>
        <p>Grilled bread topped with fresh tomatoes, basil, garlic, and a drizzle of olive oil.</p>
        <p class="price">$8.99</p>
    </div>
    <div class="item">
        <h4>Spinach and Artichoke Dip</h4>
        <p>Creamy spinach and artichoke dip served with crispy tortilla chips.</p>
        <p class="price">$9.99</p>
    </div>
    <div class="item">
        <h4>Caprese Skewers</h4>
        <p>Skewers of fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.</p>
        <p class="price">$10.99</p>
        </div>
        <div class="item">
            <h4>Garlic Parmesan Wings</h4>
            <p>Golden chicken wings tossed in garlic parmesan sauce and served with ranch dressing.</p>
            <p class="price">$11.99</p>
            </div>
        <div class="item">
            <h4>Stuffed Mushrooms</h4>
            <p>Mushrooms filled with a blend of cheeses and spinach, baked to perfection.</p>
            <p class="price">$9.99</p>
        </div>
        <div class="item">
            <h4>Shrimp Cocktail</h4>
            <p>Jumbo shrimp served with a tangy cocktail sauce.</p>
            <p class="price">$12.99</p>
        </div>
        <div class="item">
            <h4>Vegetable Spring Rolls</h4>
            <p>Crispy spring rolls filled with fresh vegetables and served with sweet chili sauce.</p>
            <p class="price">$8.99</p>
        </div>
        <div class="item">
            <h4>Chicken Quesadilla</h4>
            <p>Grilled chicken, cheese, and vegetables in a crispy tortilla, served with sour cream and salsa.</p>
            <p class="price">$11.99</p>
        </div>
        <div class="item">
            <h4>Loaded Nachos</h4>
            <p>Crispy tortilla chips topped with cheese, jalapenos, olives, and served with guacamole and sour cream.</p>
            <p class="price">$10.99</p>
        </div>
        <div class="item">
            <h4>French Onion Soup</h4>
            <p>Classic French onion soup topped with a cheesy crouton.</p>
            <p class="price">$7.99</p>
        </div>
</div>
`;

export const cleanStarters = DOMPurify.sanitize(startersContent);
