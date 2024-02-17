import React,{ useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const url = 'http://localhost:3000/books/'
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      price,
    };
    // setLoading(true);
    axios
      .post(url, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
        console.log(data)
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  }
  return (
    <>
      <button>Back</button>
      <div>CreateBook</div>
      { loading ? 'Loading' : '' }
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title}
            onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" value={author}
            onChange={(e) => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" value={price}
            onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>

      <Button onClick={handleSaveBook} variant="primary" type="button">Add Book</Button>
    </Form>
    </>
  )
}

export default CreateBook