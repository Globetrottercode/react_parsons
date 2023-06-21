async function sendRequest(id) {
  // return empty array if no plan else returns an array of plans
  const response = await fetch(`http://localhost:3501/`, {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",

    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      id: id,
    }),
  });
  const json = await response.json();
  if (response.status === 200) {
    return json;
  }
}

// async function check() {
//   console.log(await sendRequest("dassouvik2023@gmail.com"));
// }

// check();

export default sendRequest;
