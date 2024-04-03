import DOMPurify from "dompurify";

const dessertsContent = `
<div class="itemContainer">
    <div class="item">
        <h4>Chocolate Lava Cake</h4>
        <p>Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.</p>
        <p class="price">$7.99</p>
    </div>
    <div class="item">
        <h4>Apple Pie</h4>
        <p>Homemade apple pie served with a scoop of vanilla ice cream.</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Key Lime Pie</h4>
        <p>Tangy key lime pie with a graham cracker crust, topped with whipped cream.</p>
        <p class="price">$5.99</p>
        </div>
    <div class="item">
        <h4>Chocolate Chip Cookies</h4>
        <p>Warm chocolate chip cookies served with a glass of milk.</p>
        <p class="price">$4.99</p>
    </div>
    <div class="item">
        <h4>Ice Cream Sundae</h4>
        <p>Vanilla ice cream topped with chocolate syrup, whipped cream, and a cherry.</p>
        <p class="price">$4.99</p>
    </div>
    <div class="item">
        <h4>Carrot Cake</h4>
        <p>Moist carrot cake with cream cheese frosting, garnished with walnuts.</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Chocolate Mousse</h4>
        <p>Rich chocolate mousse topped with whipped cream.</p>
        <p class="price">$5.99</p>
    </div>
    <div class="item">
        <h4>Red Velvet Cake</h4>
        <p>Classic red velvet cake with cream cheese frosting.</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Strawberry Shortcake</h4>
        <p>Vanilla cake layered with fresh strawberries and whipped cream.</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Chocolate Brownie</h4>
        <p>Fudgy chocolate brownie served with vanilla ice cream.</p>
        <p class="price">$5.99</p>
    </div>    
</div>
`;

export const cleanDesserts = DOMPurify.sanitize(dessertsContent);
