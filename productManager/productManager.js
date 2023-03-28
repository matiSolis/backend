import fs  from 'fs';

const path = './files/products.json';

export default class ProductManager {
    static id=0;
    getProducts = async ()=>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const products = JSON.parse(data);
            return products;
        }else{
            return [];
        }
    }
    addProduct = async (product) =>{
        const products = await this.getProducts();
        product.id = ProductManager.id++;
        products.push(product);
        await fs.promises.writeFile(path, JSON.stringify(products,null,'\t'));
        return products;
    }
    getProductById = async (id) =>{
        const getId = await this.getProducts();
        if(!getId.find(products =>products.id ==id)){
            console.log('El producto requerido no existe.');
        }else{
            console.log(getId.find(products=>products.id == id));
        }
    }
    deleteProduct = async(id)=>{
        const findProd = await this.getProducts();
        const delProd = findProd.filter(prod => prod.id != id);
            console.log('Producto eliminado');

        await fs.promises.writeFile(path, JSON.stringify(delProd, null,'\t'));
    }
    updateProduct = async ({id,...product}) =>{
        await this.deleteProduct(id);
        let oldProduct = await this.getProducts();
        let productUpdate = [{...product, id},...oldProduct];
        await fs.promises.writeFile(path, JSON.stringify(productUpdate, null, '\t'));
        console.log (productUpdate);
    }
}