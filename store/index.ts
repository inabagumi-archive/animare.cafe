export const actions: { [name: string]: Function } = {
  async nuxtServerInit({ dispatch }): Promise<void> {
    await dispatch('talents/fetchAll')
  }
}
