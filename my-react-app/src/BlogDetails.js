import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blogDetails">
            { isPending && <div>Loading post information...</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p>Written by { blog.author }</p><br></br>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;