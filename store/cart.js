import cart from "@/pages/cart";

export const state = () => ({
  cart: []

});

export const mutations = {
  ADD_TO_CART(state, data) {
    //save in local storage
    let getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));

    let newProduct=true;
    getProductsLocalStorage.forEach(item =>{
      if(data.product.id === item.id){
        newProduct=false;
      }
    })

    if(newProduct){
      getProductsLocalStorage.push({
        id: data.product.id,
        name: data.product.name,
        image: data.product.image,
        quantity: 1,
        price: data.product.price,
        sale: data.product.sale,

      });
    }else{
      getProductsLocalStorage.forEach((exitingProduct, index) => {
        if(exitingProduct.id === data.product.id){
          if(data.type === 'minus' ){
            if(getProductsLocalStorage[index].quantity > 1) {
              getProductsLocalStorage[index].quantity = getProductsLocalStorage[index].quantity - 1;
            }
          }else{
            getProductsLocalStorage[index].quantity +=1;
          }

        }
      })
    }




    localStorage.setItem('cart', JSON.stringify(getProductsLocalStorage))
    //save in store
    state.cart =getProductsLocalStorage;

    //save in user database
  },
  REMOVE_CART(state,product_id){
    let getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));


    if(getProductsLocalStorage.length){
      getProductsLocalStorage.forEach((item,index)=>{
        if (item.id === product_id){
          getProductsLocalStorage.splice(index,1);
        }
      })

    }
    localStorage.setItem('cart', JSON.stringify(getProductsLocalStorage))
    //save in store
    state.cart =getProductsLocalStorage;

  }

}

export const actions = {
  addToCart({commit}, product) {
    commit('ADD_TO_CART', product)
  },
  removeCart({commit},product_id) {
    commit('REMOVE_CART',product_id)
  },
  cartChange(){

  }
}

export const getters = {
  getCart(state) {



    return state.cart

  }
}
