import ProductManager from './productManager/productManager.js';

const productManager = new ProductManager();

const create = async () => {
    const product1 = {
        title: 'title',
        description: 'description',
        price: 10,
        thumbnail: 'thumbnail',
        code: 1,
        stock: 3
    }
    await productManager.addProduct(product1);
    const product2 = {
        title: 'title',
        description: 'description',
        price: 10,
        thumbnail: 'thumbnail',
        code: 2,
        stock: 15
    }
    await productManager.addProduct(product2);
    const product3 = {
        title: 'title',
        description: 'description',
        price: 10,
        thumbnail: 'thumbnail',
        code: 2,
        stock: 15
    }
    await productManager.addProduct(product3);
    const product4 = {
        title: 'title',
        description: 'description',
        price: 10,
        thumbnail: 'thumbnail',
        code: 2,
        stock: 15
    }
    await productManager.addProduct(product4);
}
create();
//BUSCAMOS EL PRODUCTO DESEADO MEDIANTE SU ID:
//productManager.getProductById(2);

//ELIMINAMOS EL PRODUCTO DESEADO MEDIANTE SU ID:
//productManager.deleteProduct(1);

//ACTUALIZAMOS EL PRODUCTO DESEADO:
// productManager.updateProduct({
//     title: 'sarasa',
//     description: 'sarasa',
//     price: 12,
//     img: 'https://i.ibb.co/RzYCMS5/jhonnie-walker.png',
//     code: 'cod003',
//     stock: 240000,
//     id: 3
// });

