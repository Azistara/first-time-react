import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('The post was deleted');
            history.push('/');
        })
    }

    return ( 
        <div className="blogDetails">
            { isPending && <div>Loading post information...</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p>Written by { blog.author }</p><br></br>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick } >Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;