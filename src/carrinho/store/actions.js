// actions.js são as ações realizadas de incremento e decremento e adição e de atualização da quantia que contém type como tipo

// exporta increment function
export function increment(id) {
    return {
        type: '@cart/incremented', // tipo de envio (ação (action))
        id, // recebe um id por livro
    }
}

// exporta decrement function
export function decrement(id) {
    return {
        type: '@cart/decremented', // tipo de envio (ação (action))
        id, // recebe um id por livro
    }
}

// exporta add function com direito ao parâmetro id para cada livro
export function add(id) {
    return {
        type: 'add',    // tipo de envio (ação (action))
        id // recebe um id por livro
    }
}

// exporta addSuccess com direito ao parâmetro product (um objeto JSON)
export function addSuccess(product) {
    return {
        type: '@cart/addSuccess',    // tipo de envio (ação (action))
        product, // recebe objeto literal (listas) em JSON
    }
}

// exporta cartAmountUpdateSuccess responsável por atualizar a quantia de cada livro
export function cartAmountUpdateSuccess(id) {
    return {
        type: '@cart/amountSuccess',    // tipo de envio (ação (action))
        id, // recebe um id por livro
    }
}