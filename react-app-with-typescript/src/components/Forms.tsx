import { useState } from 'react'

const Form = () => {
    const [inputValues, setInputValues] = useState({
        nick: '',
        subMonth: 0,
        avatar: '',
        description: ''
    })
    const handleSubmit = () => {}

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value	
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick'/>
                <input onChange={handleChange} value={inputValues.subMonth} type="number" name='subMonth' placeholder='subMonth'/>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='avatar'/>
                <input onChange={handleChange} value={inputValues.description} type="textarea" name='description' placeholder='description'/>
                <button>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form