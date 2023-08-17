import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevent page from refreshing
        const blog = { title, body, author };

        console.log(blog);
    }

    return (
      <div className="create">
        <h2>Create a new post.</h2>
        <form onSubmit={ handleSubmit }>
          <label>Post Title</label>
          <input
            type="text"
            required
            value={ title }
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Post Content</label>
          <textarea 
            required
            value={ body }
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Author:</label>
          <select
            value={ author }
            onChange = {(e) => setAuthor(e.target.value)}
          >
            <option value="Mario">Mario</option>
            <option value="Bluey">Bluey</option>
            <option value="Dixti Stara">Dixti Stara</option>
            <option value="Administrator">Administrator</option>
          </select>
          <button>Post!</button>
          <p>{ title }</p>
          <i>By: { author }</i>
          <p>{ body }</p>
        </form>
      </div>
    );
}
 
export default Create;