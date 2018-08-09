export default function findIndex(products, id) {
    let result = -1;
    if (products.length) {
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index;
                return false;
            }
        });
    }
    return result;
}
