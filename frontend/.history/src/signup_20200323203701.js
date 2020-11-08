import React from 'react'
import Modal from 'react-bootstrap/Modal'
export default class signup extends React.Component {
    constructor () {
        super()
        this.state = {
            user :false,
            admin : false,
            donar : false
        }
    }


    render () {
        return (
            <Modal
      
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          ></Modal>
        ) 
    }
}