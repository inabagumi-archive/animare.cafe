export default images =>
  Object.keys(images)
    .map(size => `${images[size]} ${size}`)
    .join(', ')
