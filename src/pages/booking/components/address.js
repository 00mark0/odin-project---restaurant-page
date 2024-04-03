import DOMPurify from "dompurify";

const addressContent = `
<div class="addressContainer">
    <div class="addressCard">
        <p>1234 Sesame Street, Laughterland, HAHA 5678</p>
        <p><a href="https://www.pexels.com/photo/assorted-map-pieces-2859169/">Photo by Andrew Neel</a></p>
        <div class="arrow-left"></div>
    </div>
</div>
`;

export const cleanAddress = DOMPurify.sanitize(addressContent);
