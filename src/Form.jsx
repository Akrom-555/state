import React, { useState } from 'react';



const Form = () => {
    const [text, setText] = useState('');
    const [blur, setBlur] = useState(false);
    const [sendet, setSendet] = useState(false)



    const handleSetText = (e) => {
        setText(e.target.value)
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text) {
            console.log(text)
            setText('')
            setBlur(false)
            setSendet(true)
        }
    }
    const handleSetBlur = () => {
        setBlur(true)
    }


    return (
            <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 onBlur={handleSetBlur} 
                 value={text}
                  onChange={handleSetText} />
                <button disabled = {!text}>click</button>
    
            </form>
    
                {!text && blur  ? <div className='text-info'>пусто</div> : null}
                {sendet ? <div className='go'>Сообшение успешно отправлено</div> : null}
        </>
    );
};

export default Form;