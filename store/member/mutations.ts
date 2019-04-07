import { MutationTree } from 'vuex'
import { Member } from '~/store/member'
import { MemberState } from '~/store/member/state'

const mutations: MutationTree<MemberState> = {
  set(state, { members }: { members: Member[] }) {
    state.members = members
  }
}

export default mutations
