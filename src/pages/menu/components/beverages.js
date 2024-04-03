import DOMPurify from "dompurify";

const beveragesContent = `
<div class="itemContainer">
    <div class="item">
        <h4>Soft Drinks</h4>
        <p>Coke, Diet Coke, Sprite, Root Beer, Lemonade, Iced Tea</p>
        <p class="price">$2.99</p> 
    </div>
    <div class="item">
        <h4>Beer</h4>
        <p>Domestic and imported beers available</p>
        <p class="price">$4.99</p>
    </div>
    <div class="item">
        <h4>Wine</h4>
        <p>Red, white, and rose wines available</p>
        <p class="price">$5.99</p>
    </div>
    <div class="item">
        <h4>Whiskey</h4>
        <p>Various brands of whiskey available</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Vodka</h4>
        <p>Top shelf vodka available</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Rum</h4>
        <p>White and dark rum available</p>
        <p class="price">$5.99</p>
    </div>
    <div class="item">
        <h4>Tequila</h4>
        <p>High quality tequila available</p>
        <p class="price">$6.99</p>
    </div>
    <div class="item">
        <h4>Water</h4>
        <p>Bottled</p>
        <p class="price">$1.99</p>
    </div>
    <div class="item">
        <h4>Juice</h4>
        <p>Orange, apple, cranberry, and grapefruit juices available</p>
        <p class="price">$3.99</p>
    </div>
    <div class="item">
        <h4>Coffee</h4>
        <p>Hot and iced coffee available</p>
        <p class="price">$2.99</p>
    </div>
</div>
`;

export const cleanBevs = DOMPurify.sanitize(beveragesContent);
