
export const productService = {
    getProducts
}



async function getProducts (callback){
    await fetch('http://localhost:8000/products').then(res=>res.json())
    .then(data=>{
        callback(data);
    })
    .catch(err=>err);
}   


// function getProducts (){
//     return productList;
// }

