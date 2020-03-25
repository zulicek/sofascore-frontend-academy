async function getData(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        return await response.json()
    } else {
        console.log("Response status code is not OK!");
    }
}
 

