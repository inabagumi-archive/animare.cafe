export default async ({ store }) => {
  await store.dispatch('talents/fetchAll')
}
