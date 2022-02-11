export const state = () => ({
  product: []
});
export const mutations = {
  triggerModal(state,product) {
    console.log(product);
  }
}
