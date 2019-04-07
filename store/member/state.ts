import { Member } from '~/store/member'

export interface MemberState {
  members: Member[]
}

export default (): MemberState => ({
  members: []
})
