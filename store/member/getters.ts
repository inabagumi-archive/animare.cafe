import { GetterTree } from 'vuex'
import { RootState } from '~/store/state'
import { Member, MemberID } from '~/store/member'
import { MemberState } from '~/store/member/state'

const getters: GetterTree<MemberState, RootState> = {
  getMemberById: state => (id: MemberID): Member | undefined =>
    state.members.find(member => member.id === id)
}

export default getters
