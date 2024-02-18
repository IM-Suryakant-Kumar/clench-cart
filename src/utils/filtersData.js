export const getFiltersData = (products) => {
  const colors = []
  const categories = []
  const sizes = []
  
  products.forEach(prod => {
      const prodColors = prod.color
      const prodcategories = prod.categories
      const prodSizes = prod.size
      
      // colors
      for(let color of prodColors) {
          !colors.includes(color) && colors.push(color)
      }
      // categories
      for(let category of prodcategories) {
          !categories.includes(category) && categories.push(category)
      }
      // sizes
      for(let size of prodSizes) {
          !sizes.includes(size) && sizes.push(size)
      }
  })

  return { colors, categories, sizes }
}