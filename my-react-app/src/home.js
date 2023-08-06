import { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
      {
        title: "Hello World",
        body: "Windows XP is a major release of the Windows NT operating system...",
        author: "Mario",
        id: 1,
      },
      {
        title: "Hey out there!",
        body: "It's me Steve, have you seen my puppy, Blue?",
        author: "Steve",
        id: 2,
      },
      {
        title: "Java",
        body: "Bean Counters is a mini game featured in the Coffee Shop in Club Penguin.",
        author: "Club Penguin",
        id: 3,
      },
    ]);

    return ( 
        <div className="home">
            <BlogList blogs = { blogs } title = "In the post box"/>
        </div>
     );
}
 
export default Home