import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
const CreatePost =({show , })=>{
    
  
   
    const options = [
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-'},
        { value: 'AB+', label: 'AB+'},
        {value : 'AB-' , label:'AB-'}
      ]
    const [header, setHeader ] = useState('header')
    const [ description ,setDescripting] = useState('desc')
    cosnt [blood , setBlood] = useState('')
    handleChange(e) {
        setBlood(e.target.value)
        console.log(blood)
      }
    
    return (
        <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             {user_name}
          </Modal.Title>
        </Modal.Header>
        <div>
            <input type="text" name="header" onChange={(ev)=>{
               setHeader(ev.target.value)
               console.log(header)
            }}/>
            <input type="text" name="desc" onChange={(ev)=>{
               setDescripting(ev.target.value)
               console.log(description)
            }}/>
             <Select options={options} onChange={}/>
        </div>
      </Modal>
      
    )
}