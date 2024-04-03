import DOMPurify from "dompurify";

const addressContent = `
<div class="addressContainer">
    <div class="addressCard">
        <p>1234 Sesame Street, Laughterland, HAHA 5678</p>
        <div class="arrow-left"></div>
    </div>
</div>
`;

export const cleanAddress = DOMPurify.sanitize(addressContent);
