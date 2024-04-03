import DOMPurify from "dompurify";

const menu = `
<div class="menuWrapper">
    <div class="menu">
    <div class="menuHeader">
    <h3 id="lunch">Lunch</h3>
    <h3 id="starters">Starters</h3>
    <h3 id="mainCourse">Main Courses</h3>
    <h3 id="desserts">Desserts</h3>
    <h3 id="bevs">Beverages</h3>
    </div>
        <div class="menuFrame">

        </div>
    </div>
</div>
<footer>
    <p><a href="https://www.pexels.com/photo/cocktail-glass-beside-plate-with-cup-1673876/">Photo by Thuyen Vu</a></p>
</footer>
`;

export const cleanMenu = DOMPurify.sanitize(menu);
