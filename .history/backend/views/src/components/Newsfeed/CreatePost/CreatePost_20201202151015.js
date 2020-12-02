import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
const CreatePost =({show })=>{
    
  
   
    const options = [
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-'},
        { value: 'AB+', label: 'AB+'},
        { value : 'AB-' , label:'AB-'}
      ]
    const [header, setHeader ] = useState('header')
    const [ description ,setDescripting] = useState('desc')
    const [blood , setBlood] = useState('')

    
    return (
        <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             asdfasf
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <input 
            type="text" 
            name="header"
            value={header} 
            onChange={(ev)=>{
               setHeader(ev.target.value)
               console.log(header)
            }}/>
            <input type="text" 
            name="desc" 
            value={description} 
            onChange={(ev)=>{
               setDescripting(ev.target.value)
               console.log(description)
            }}/>
               <input type="text" 
               name="blood"
               value={blood} 
               onChange={(ev)=>{
               setBlood(ev.target.value)
               console.log(blood)
            }}/>
        </div>
        </Modal.Body>
      </Modal>
      
    )
}
export default CreatePost