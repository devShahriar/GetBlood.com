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
            <input type="text" name="header" onChange={(ev)=>{
               setHeader(ev.target.value)
               console.log(header)
            }}/>
            <input type="text" name="desc" onChange={(ev)=>{
               setDescripting(ev.target.value)
               console.log(description)
            }}/>
             <Select options={options}/>
        </div>
    )
}