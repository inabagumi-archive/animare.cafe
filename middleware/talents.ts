export default ({ store }) => {
  return store.dispatch('talents/fetchAll')
}
