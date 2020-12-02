import React,{useState} from 'react'

const CreatePost =(props)=>{
    
  
    onChange=(ev)=>{

    }
    const options = [
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
        { value: 'A+', label: 'A+' }
        { value: 'A-', label: 'A-'}
        { value: 'AB+', label: 'AB+'}
        {value : 'AB-' , label:'AB-'}
      ]
    const [header, setHeader ] = useState('header')
    const [ description ,setDescripting] = useState('desc')
    
    
    return (
        
        <div>
            <input type="text" name="name" onChange={()=>{
               set
            }}/>
        </div>
    )
}