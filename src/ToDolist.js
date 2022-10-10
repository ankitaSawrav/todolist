import Button from 'react-bootstrap/Button';
import ToDoItem from './ToDoItem.js'
import { useState } from "react"
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function ToDolist () {
    let [newItem, setnewItem] = useState("")
    let [toDolistItems,setTodoListitems] = useState([])
    let [errormsg,setErrormsg] = useState(false)

    const handleChange = (event)=>{
        console.log(event.target,"event value")
        
        setnewItem({
            name:event.target.value,
            status:false
        } )
    }




    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("submit button clicked")
        console.log(newItem,"newItem")
        
        
            let updatedTodos =  [...toDolistItems,newItem]
            console.log(updatedTodos,"updatedTodos")
            setTodoListitems(updatedTodos)      
    }
    return (
        <div>
           
        <form>
            <input type="text" onChange= {handleChange}  ></input>
            <button onClick= {handleSubmit} >Add item</button>
        </form>
            <Container >
                <Row className="justify-content-md-center ">
                    <Col md="auto">          
                        {toDolistItems.map((item,idx)=>{
                            return(<ToDoItem item= {item}
                                            key= "idx"
                                            index={idx}
                                            deleteItem = {()=>handleDelete(idx)}
                                            ></ToDoItem>)
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default ToDolist