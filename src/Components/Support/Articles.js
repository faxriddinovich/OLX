import React from 'react'
import { Link } from 'react-router-dom'
const {questions}=require("../DB/Fake_Data_Base")
function Articles() {
    console.log(questions)
  return (
    <>
        <section className='articles'>
            <h2>Частые вопросы</h2>
            <ul>
                {questions.map(item=><li key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>)}
            </ul>
            <hr/>
        </section>
    </>
  )
}

export default Articles