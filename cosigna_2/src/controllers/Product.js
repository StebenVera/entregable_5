class Product {
    listProduc = [];
    async getAll() {
        if(this.listProduc.length == 0) {
            return {message: 'La lista de producto esta vacia', status: false}
        }
        return {message: 'Lista de productos', products: this.listProduc, status: true};
    }

    async createProduct(title, price, thumbnail) {
        if(!title || !price || !thumbnail) {
            throw new Error('Debe enviar los parametros correctos para crear un producto');
        }
        
        const id = this.listProduc.length == 0 ? 1 :  (Math.max(...this.listProduc.map(o => o.id))+1)
        this.listProduc.push({
            id,
            title,
            price,
            thumbnail
        })
        return  { message: 'producto creado correctamente', id, status: true}   
    }
}
module.exports = new Product();