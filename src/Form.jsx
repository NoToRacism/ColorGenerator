import React, { useState } from 'react'


const Form = ({ addColor }) => {
    const [color, setColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color)
    }

    return (
        <section className='container'>
            <h4>Color Generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input
                    type="text"
                    name=""
                    id=""
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder='#674ff0' />
                <button type='submit' className='btn' style={{ background: color }}>Generate</button>
            </form>
        </section>
    )
}

export default Form
