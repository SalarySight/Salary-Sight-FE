export const getSalaries = () => {
  return fetch('https://salary-sight-be.herokuapp.com/graphql')
      .then(response => console.log(response.json()))
}

export const postForm = (formSubmission) => {
  return fetch('https://salary-sight-be.herokuapp.com/graphql', {
    method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(formSubmission)
  })
  .then(response => console.log(response.json()))
}