import {useState} from "react"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const SingleItem = (item) => {
    const [show, setShow] = useState(false)
    const {title, info} = item
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className="question-btn" onClick={() => setShow(!show)}>
                    {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            <div>{show && <p>{info}</p>}</div>
        </article>
    )
}
export default SingleItem
