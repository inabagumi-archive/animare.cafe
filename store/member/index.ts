export type MemberID = string

export type Member = {
  avatar: string
  color: string
  description: string
  id: MemberID
  mainVisual: string
  name: string
  picture: string
  links: {
    [name: string]: string
  }
  unlisted?: boolean
}
