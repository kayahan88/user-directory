import React from 'react'

const Nav = (props) => {

//Receive props by passing them as a parameter to Nav.

//Give the 'previous' button an onClick event, assigning it to the decrease method from props.

//Give the 'next' button an onClick event, assigning it to the increase method from props.

    return (
        <div className='buttons'>
            <button className='button' onClick={props.decrease}>{`< Previous`}</button>
            <div className='spacer'></div>
            <button className='button' onClick={props.increase}> Next ></button>
        </div>
    )
}
export default Nav;



