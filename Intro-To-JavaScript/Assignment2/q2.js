
let productName = "  wireless headphones PRO  ";


let cleanName = productName.trim().toLowerCase();


let words = cleanName.split(" ");
let capitalizedWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
);

let finalName = capitalizedWords.join(" ");


finalName = finalName.replace("Pro", "Pro Edition");

console.log("Product Name:", finalName);
console.log("Length:", finalName.length);