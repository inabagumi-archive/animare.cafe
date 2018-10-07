import talents from '~/static/talents.json'

export const state = () => ({
  list: talents.reduce((list, { id, ...talent }) => ({
    ...list,
    [id]: talent
  }), {})
})
