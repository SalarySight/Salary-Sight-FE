export const fetchData = async body => {
  const url = 'https://salary-sight-be.herokuapp.com/graphql';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data;
};

export const postData = async body => {
  const url = 'https://salary-sight-be.herokuapp.com/graphql';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const result = await response;
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result
};