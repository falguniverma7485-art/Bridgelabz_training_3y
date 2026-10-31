async function getProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }

        let products = await response.json();

        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("-------------------------");
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

getProducts();