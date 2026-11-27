/* ПР 15. Четыре функции и результаты в консоли страницы товара. */
function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency', currency: 'RUB', maximumFractionDigits: 0
    }).format(value);
}

function calculateDiscount(product) {
    return product.price * product.discountPercent / 100;
}

function getProductStatus(product) {
    if (!product.inStock) return 'Нет в наличии';
    if (product.inStock && product.discountPercent > 0) return 'В наличии со скидкой';
    return 'В наличии';
}

function describeProduct(product) {
    const finalPrice = product.price - calculateDiscount(product);
    return `${product.name} — ${formatPrice(finalPrice)}, ${getProductStatus(product)}`;
}

console.group('ПР 15 — ShopProject');
console.log('Объект товара:', exampleProduct);
console.log('Базовая цена:', formatPrice(exampleProduct.price));
console.log('Размер скидки:', formatPrice(calculateDiscount(exampleProduct)));
console.table([
    exampleProduct,
    {...exampleProduct, discountPercent: 0},
    {...exampleProduct, discountPercent: 0, inStock: false}
].map(product => ({
    'Статус': getProductStatus(product),
    'Описание': describeProduct(product)
})));
console.groupEnd();
