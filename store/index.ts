import { ActionTree } from 'vuex'

export interface RootState {}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }): Promise<void> {
    await dispatch('talent/fetchAll')
  }
}
