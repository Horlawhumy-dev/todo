import React  from 'react';

const handleForm = (props) => {
    return(
        <form>
            <input type='text' placeholder={props.placeholder} value={props.value}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default handleForm;