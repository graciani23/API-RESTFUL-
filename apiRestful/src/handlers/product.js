const ProductModel = require('../models/products')
// permite acessar o mongo na collection de produtos

    // boas práticas: detalher melhor o json. (ler JSON api)
const transformer = products => ({
    type: 'products',
    id: products.id,
    attributes: {
        name: products.name,
        price: products.price
    },
    links: {
        self: `/api/v1/products/${products.id}`
    }
});

const find = async (req) => {
    const product = await ProductModel.findById(req.params.id);
    return transformer(product)
}

//listando os todos os produtos
const getAll = async (request, h) => {
    const product = await ProductModel.find({});
    return product.map(transformer);
};

const save = async (req, h) => {
    const { name, price } = req.payload;

    const products = new ProductModel;
    products.name = name;
    products.price = price;

    // await - espera a execução assíncrona do .save
    //async = deixa explícito que a função é assíncrona

    await products.save();

    return h.response(transformer(products)).code(201)

    return "Oi, salvei seu produto!"
}

//nesse momento o banco foi criado no mongo e o primeiro post alimentou o banco.

const remove = async (req, h) => {
    await ProductModel.findOneAndDelete({ _id: req.params.id });
    return h.response().code(204);
}

const atualiza = async (req, h) => {
    try {
    const product = await ProductModel.findByIdAndUpdate({ _id: req.params.id }, req.payload, { new: true })
    return h.response(transformer(product));
    } catch(err) {
        return h.response(err).code(500);
    }
}

module.exports = {
    getAll,
    save,
    remove,
    find,
    atualiza
};

