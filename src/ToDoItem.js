import { NavItem } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDeleteOutline } from "react-icons/md";

const ToDoItem = ({item})=>{

    const deleteToDo = ()=>{
        
    }

    return(
        
       
   
         <Card className='mt-3 shadow'style={{width:'30rem',
            }}>
            <Card.Body className="todo-item-card" style={{

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'    align-items: baseline;'
            }}>
                
                <Card.Title>{item.name}</Card.Title>
                {/* <Card.Text>
                
                </Card.Text> */}
                <Button variant="none"
                    onClick={deleteToDo}
                
                ><MdDeleteOutline size={30}/></Button>
                

            </Card.Body>
         </Card> 
     
    )
}

export default ToDoItem