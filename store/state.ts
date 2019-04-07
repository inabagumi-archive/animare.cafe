export type RootState = {
  apiURI: string
}

export default (): RootState => ({
  apiURI: 'https://api.animare.cafe'
})
