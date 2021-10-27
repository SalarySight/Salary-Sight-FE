export const cleanFilters = (filterObj) => {
  const categories = Object.keys(filterObj);
  const cleanedFilters = categories.reduce(
    (acc, category) => {
      acc[category] = Object.entries(filterObj[category])
        .filter((obj) => obj[1] === true)
        .map((obj) => obj[0]);
      return acc;
    },
    { gender: [], age: [], program: [] }
  );
  return cleanedFilters;
};

export const filterByCategories = (filterObj, salaryPosts, salaryObj) => {
  const salaryPostsArr = [...salaryPosts];
  if (salaryObj.HiLo === true) {
    return salaryPostsArr
      .sort((a, b) => b.salary - a.salary)
      .filter((post) => {
        return filterObj.gender.length
          ? filterObj.gender.includes(post.gender)
          : post;
      })
      .filter((post) => {
        return filterObj.age.length ? filterObj.age.includes(post.age) : post;
      })
      .filter((post) => {
        return filterObj.program.length
          ? filterObj.program.includes(post.program)
          : post;
      });
  } else if (salaryObj.LoHi === true) {
    return salaryPostsArr
      .sort((a, b) => a.salary - b.salary)
      .filter((post) => {
        return filterObj.gender.length
          ? filterObj.gender.includes(post.gender)
          : post;
      })
      .filter((post) => {
        return filterObj.age.length ? filterObj.age.includes(post.age) : post;
      })
      .filter((post) => {
        return filterObj.program.length
          ? filterObj.program.includes(post.program)
          : post;
      });
  } else {
    return salaryPostsArr
      .filter((post) => {
        return filterObj.gender.length
          ? filterObj.gender.includes(post.gender)
          : post;
      })
      .filter((post) => {
        return filterObj.age.length ? filterObj.age.includes(post.age) : post;
      })
      .filter((post) => {
        return filterObj.program.length
          ? filterObj.program.includes(post.program)
          : post;
      });
  }
};
