import DOMPurify from "dompurify";

const mainCourses = `
    <div class="itemContainer">
        <div class="item">
            <h4>Grilled Chicken</h4>
            <p>Grilled chicken breast with a side of mashed potatoes and steamed vegetables.</p>
            <p class="price">$12.99</p>
        </div>
        <div class="item">
            <h4>Salmon</h4>
            <p>Grilled salmon with a side of mashed potatoes and steamed vegetables.</p>
            <p class="price">$14.99</p>
        </div>
        <div class="item">
            <h4>Steak</h4>
            <p>Grilled steak with a side of mashed potatoes and steamed vegetables.</p>
            <p class="price">$16.99</p>
        </div>
        <div class="item">
            <h4>Shrimp</h4>
            <p>Grilled shrimp with a side of mashed potatoes and steamed vegetables.</p>
            <p class="price">$15.99</p>
        </div>
        <div class="item">
            <h4>Pasta</h4>
            <p>Spaghetti with marinara sauce and garlic bread.</p>
            <p class="price">$10.99</p>
        </div>
        <div class="item">
            <h4>Vegetable Stir Fry</h4>
            <p>Assorted vegetables stir fried in a savory sauce, served over rice.</p>
            <p class="price">$11.99</p>
        </div>
        <div class="item">
            <h4>Chicken Parmesan</h4>
            <p>Breaded chicken breast topped with marinara sauce and melted cheese, served with spaghetti.</p>
            <p class="price">$13.99</p>
        </div>
        <div class="item">
            <h4>Meatloaf</h4>
            <p>Homestyle meatloaf served with mashed potatoes and gravy.</p>
            <p class="price">$12.99</p>
        </div>
        <div class="item">
            <h4>Chicken Alfredo</h4>
            <p>Fettuccine pasta with creamy alfredo sauce and grilled chicken.</p>
            <p class="price">$13.99</p>
        </div>
        <div class="item">
            <h4>Beef Stroganoff</h4>
            <p>Tender beef in a rich mushroom sauce served over egg noodles.</p>
            <p class="price">$14.99</p>
        </div>
    </div>
`;

export const cleanMainCourses = DOMPurify.sanitize(mainCourses);
