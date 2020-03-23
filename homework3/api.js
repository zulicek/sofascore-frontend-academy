async function getData(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        return response.json()
    } else {
        console.log("Response status code is not OK!");
    }
}
 

