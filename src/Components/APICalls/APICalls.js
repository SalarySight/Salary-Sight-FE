export const postForm = async (object) => {
  const response = await fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
     
    })
  })
  return console.log(response.json())
}