import DOMPurify from "dompurify";

const lunchContent = `
<div class="itemContainer">
    <div class="item">
        <h4>Grilled Chicken Caesar Salad</h4>
        <p>Crisp romaine lettuce topped with grilled chicken, parmesan cheese, and Caesar dressing.</p>
        <p class="price">$11.99</p>
    </div>
    <div class="item">
        <h4>Classic BLT Sandwich with Fries</h4>
        <p>Crispy bacon, fresh lettuce, and ripe tomatoes served on toasted bread with a side of fries.</p>
        <p class="price">$9.99</p>
    </div>
    <div class="item">
        <h4>Veggie Panini with Tomato Soup</h4>
        <p>Grilled panini filled with roasted vegetables and melted cheese, paired with a comforting bowl of tomato soup.</p>
        <p class="price">$10.99</p>
    </div>
    <div class="item">
        <h4>Bistro Burger with Cheddar and Bacon</h4>
        <p>Juicy beef patty topped with melted cheddar cheese, crispy bacon, and all the classic fixings.</p>
        <p class="price">$12.99</p>
        </div>
        <div class="item">
            <h4>Quinoa and Avocado Salad</h4>
            <p>Nutrient-rich quinoa mixed with creamy avocado, cherry tomatoes, and a zesty vinaigrette.</p>
            <p class="price">$13.99</p>
        </div>
        <div class="item">
            <h4>Shrimp Po' Boy Sandwich</h4>
            <p>Crispy fried shrimp nestled in a soft baguette with lettuce, tomato, and tangy remoulade sauce.</p>
            <p class="price">$14.99</p>
        </div>
        <div class="item">
            <h4>Margherita Flatbread Pizza</h4>
            <p>Thin crust pizza topped with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.</p>
            <p class="price">$11.99</p>
        </div>
        <div class="item">
            <h4>Thai Chicken Wrap with Peanut Sauce</h4>
            <p> Grilled chicken, crunchy vegetables, and Thai peanut sauce wrapped in a soft tortilla.</p>
            <p class="price">$12.99</p>
        </div>
        <div class="item">
            <h4>Mushroom Risotto with Parmesan</h4>
            <p>Creamy risotto cooked with earthy mushrooms and finished with grated parmesan cheese.</p>
            <p class="price">$15.99</p>
        </div>
        <div class="item">
            <h4>Steak Frites with Garlic Butter</h4>
            <p> Succulent steak grilled to perfection, served with crispy French fries and garlic butter for dipping.</p>
            <p class="price">$17.99</p>
        </div>
</div>
`;

export const cleanLunch = DOMPurify.sanitize(lunchContent);
