import React from 'react'
import { useState } from 'react';
import Mymodal from './Mymodal';
/* This code defines a React component called `Modals` that renders a button. When the button is
clicked, it sets the state variable `showmodal` to `true`, which causes the component to render
another component called `Mymodal`. `Mymodal` is a function component that renders a modal dialog
with a message and a button. When the button in the modal is clicked, it sets the `showmodal` state
variable back to `false`, which causes the modal to disappear. The `useState` hook is used to manage
the `showmodal` state variable. Finally, the `Modals` component is exported as the default export of
the module. */
function Modals(){
    const[showmodal,setShowmodal]= useState(false);
    function closemodal(){
        setShowmodal(false);
    }
        
    
    
    return(
        <>
        <button className='model_btn' onClick={()=>{setShowmodal(true)}}>Open Modal</button>
       {showmodal && <Mymodal closemodal={closemodal} />}
       <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
        cumque officia omnis quos iure eveniet accusamus iste consequuntur?
        Odit, quia repellat.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
        </>
    );
}
export default Modals;