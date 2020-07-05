import React,{Component} from 'react';
import Modal from 'react-modal';

export class ProductModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : props.data.showModal,
            display : 'none',
            finalAmount : props.finalAmount
        }
    }

    closeModal = ()=>{
        this.setState({showModal : false});
    }
    
    render(){
        //this.setState({showModal:this.props.showModal});
        const modalStyles = {
            display : this.props.data.showModal === true ? 'block' : 'none',
            //display: none; /* Hidden by default */
            //'position': 'fixed',/* Stay in place */
            zindex: 10, /* Sit on top */
            paddingTop: '100px', /* Location of the box */
            left: 0,
            top: 0,
            width: '100%', /* Full width */
            height: '100%', /* Full height */
            overlow: 'auto', /* Enable scroll if needed */
            //backgroundColor: 'rgb(0,0,0)', /* Fallback color */
            //backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
        }

        const modalContent ={
            backgroundColor: '#C7AB50',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #888',
            width: '80%'
          }

          const modalClose = {
              align : 'center'
          }

        return(
            <div>
                <div id="myModal" className="modalStyle" style={modalStyles}>
                    <div className="modalContent" style={modalContent}>
                        <p>Your final amount is : {this.props.data.finalAmount}</p>
                         <p>Your transaction has successfully completed.......</p>
                         <button onClick = {()=>{this.props.data.closeModal(false)}} className = "modalClose" style={modalClose}> close</button>
                    </div>
                </div>            
            </div>
        )
    }
}
export default ProductModal