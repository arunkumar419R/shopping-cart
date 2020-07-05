import React, { Component } from 'react';
import {productService} from '../services/product.service'
import {ProductModal} from '../modals/ProductModal';



export class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = this.getInitialState();
        this.handleModal = this.handleModal.bind(this); 
    }
 
    componentDidMount(){
        productService.getProducts(this.getProducts);        
    }

    getProducts = (data) =>{       
        this.setState({
            products:data                
        })        
    }  

    getInitialState = ()=>({
        products : [],
        finalAmount : 0,
        finalquantity : 0,
        showModal : false
    });


    handleCart = (id) =>{
        this.addItemToCart(id);
    }

    handleAddItem = (id) =>{
        this.addItemToCart(id);
    }

    addItemToCart = (id)=>{
        let { products:productListClone , finalAmount, finalquantity} = this.state;
        //const productListClone = this.state.products;
        let addedProduct = this.state.products.find((product)=>product.id === id);
        addedProduct.quantity = addedProduct.quantity+1;
        addedProduct.productTotal = addedProduct.quantity*addedProduct.price;
        let index = this.getIndex(productListClone,'id',id);
        productListClone[index] = addedProduct;
         finalquantity = finalquantity +1;
         finalAmount = finalAmount + addedProduct.price;
        this.setState({products : productListClone,finalquantity:finalquantity,finalAmount:finalAmount});
    }

    handleRemoveItem = (id) =>{
        let { products:productListClone , finalAmount, finalquantity} = this.state;

        // const productListClone = this.state.products;
        let removeProduct = this.state.products.find((product)=>product.id === id);
        if(removeProduct.quantity >0){
        removeProduct.quantity = removeProduct.quantity-1;
        removeProduct.productTotal = removeProduct.productTotal-removeProduct.quantity*removeProduct.price;
        removeProduct.productTotal = removeProduct.quantity*removeProduct.price;
        let index = this.getIndex(productListClone,'id',id);
        productListClone[index] = removeProduct;
        finalquantity = finalquantity -1;
        finalAmount = finalAmount - removeProduct.price;
        this.setState({products : productListClone,finalquantity:finalquantity,finalAmount:finalAmount});
        }
    }

    handleModal = ()=>{
        if(this.state.finalquantity>0){
            this.setState({
                showModal : true
            })
        }else{
            alert("Please add atleast one product........");
        }
       
    }

    closeModal = (status)=>{
        this.setState({showModal : status})
    }

    getIndex = (list,prop,value) =>{
        for(let i=0;i<list.length;i++){
            if(list[i].prop === value){
                return i;
            }
        }
        return -1;
    }

  
    render(){
        const body ={
            margin : 0,
            padding : 0,
            fontFamily:'Serif'
        }

        const parent = {
            width : '800px',
            margin : '50px auto 0',
            display : 'table',
            boxSizing : 'border-box',
            fontFamily:'Serif'
          }

          const rowclass = {
              margin : '20px 0'
          }

          const columnclass = {
              display : 'table-cell',
              padding : '10px',
              width : '33.33333%',
              textAlign : 'center',
              verticalAlign : 'middle'
          }

          const imgStyle = {
            width:'500', 
            height:'500'
          }

          const footer = {
            //textAlign: 'center',
            color: 'white',
            backgroundColor : '#C7506F',
            borderRadius: '2%'
            //position: 'relative',
          }

          const btnClr = {
              backgroundColor : '#C7AB50',
              width : '150px',
              display : 'inline-block',
              textAlign: 'center',
              color: 'White',
              borderRadius: '10%',
            border: 'none',
            //padding: '20px',
            textDecoration: 'none',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
          }

          const btnClrs = {
            backgroundColor : '#C7AB50',
            width : '40px',
            display : 'inline-block',
            textAlign: 'center',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            //padding: '20px',
            textDecoration: 'none',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
        }

        const brandStyle = {
            fontSize: '20px',
            color: '#50C7AD',
            fontFamily:'Serif'
        }

        const footerct ={
            marginLeft: '50px'
        }

        const footck ={
            marginLeft: '650px',
            margintop : '0px'
        }

        return(
            <div class = "container" className = "parent" style = {parent}>
                
                {/* <ProductModal showModal = {this.state.showModal} finalAmount = {this.state.finalAmount}></ProductModal> */}
                <ProductModal data ={{showModal:this.state.showModal,finalAmount:this.state.finalAmount,closeModal:this.closeModal.bind(this)}}></ProductModal>
                <div className = "body" style = {body}>
                 {this.state.products.map((product,key)=>
                        <div class="row"  key={product.id} className = {rowclass}>
                        <div class="column" style={columnclass}>
                            <img src = {product.imageUrl} alt={product.productName} width={300} height={300}></img>
                            <div><strong>{product.offerText}</strong></div>
                        </div>
                        <div class = "column" style={{textAlign: "center"}}>
                         <div className = "brandStyle" style={brandStyle}><strong>{product.brandName}</strong></div>
                        <div>{product.productName}</div>
                        <div>MRP {product.mrp}</div>
                        <div><strong>Rs {product.quantity>1 ?(<span>{product.productTotal}</span>):(<span>{product.price}</span>)}</strong></div>
                        <div>
                        <button onClick = {()=>{this.handleCart(product.id)}} className = "btnClr" style={btnClr}>
                            Add to cart
                            </button>
                        <button onClick = {()=>{this.handleAddItem(product.id)}} className = "btnClrs" style={btnClrs}>+</button>
                        {product.quantity}
                        <button onClick = {()=>{this.handleRemoveItem(product.id)}} className = "btnClrs" style={btnClrs}>-</button>
                        </div>
                        </div>
                        <hr></hr>
                    </div>
                    
                )}
                 
               
                <div className = "footer" style={footer}>
                    <div class ="row" className = "footerct" style={footerct}> 
                        <div class ="column" >Quantity :{this.state.finalquantity}</div>
                        <div class ="column" >Total : {this.state.finalAmount}</div>
                        <div class ="column"> 
                        <button onClick = {()=>{this.handleModal()}}>checkout</button>
                        </div>
                    </div>
                    {/* <div className = "footck" style={footck}>
                    <button onClick = {()=>{this.handleModal()}}>checkout</button>
                </div> */}
                </div>
                {/* <h4 style={{textAlign:"center",textDecoration: "underline"}}>Shopping cart</h4> */}
            </div>
            </div>
            
        )
    }
    
}
export default ProductList