async function fetchData (APIUrl) {
  try {
    const response = await fetch(APIUrl)
    const data = await response.json()
    return data

  } catch (error) {
    console.error("Something went wrong", error)
  }
}

async function test () {
  console.log(await fetchData("https://jsonplaceholder.typicode.com/posts/1"))
  console.log(await fetchData("https://failURL.comejwe"))
}

test()
