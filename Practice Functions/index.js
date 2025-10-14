async function data() {
    let data = fetch("https://api.escuelajs.co/api/v1/products");
    let data1 = await data;
    console.log(data1);
}
