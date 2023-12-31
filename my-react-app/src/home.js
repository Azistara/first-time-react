import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
  const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
      <div className="home">
        { isPending && <div>Loading...</div>}
        { error && <div>{ error }</div>} 
        { blogs && <BlogList blogs={ blogs } title="📥 In the post box"/> }
      </div>
    );
}
 
export default Home