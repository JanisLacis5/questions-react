import {useGlobalContext} from "./context"
import SingleItem from "./SingleItem"

const Items = () => {
    const {data} = useGlobalContext()
    return (
        <section className="container">
            <h1>Questions</h1>
            {data.map((item) => {
                const {id} = item
                return <SingleItem key={id} {...item} />
            })}
        </section>
    )
}
export default Items
