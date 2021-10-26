export const cleanFilters = (filterObj) => {
  const categories = Object.keys(filterObj)
  const cleanedFilters = categories.reduce((acc, category) => {
    acc[category] = Object.entries(filterObj[category]).filter(obj => obj[1] === true).map(obj => obj[0])
    return acc
  }, {gender: [], age: [], program: []})
  return cleanedFilters
}

export const filterByCategories = (filterObj, salaryPosts) => {
   return salaryPosts.filter(post => {
    return filterObj.gender.length ? filterObj.gender.includes(post.gender) : post;
  })
  .filter(post => {
    return filterObj.age.length ? filterObj.age.includes(post.age) : post;
  })
  .filter(post => {
    return filterObj.program.length ? filterObj.program.includes(post.program) : post;
  })
}
