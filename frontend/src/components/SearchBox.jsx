import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={searchSubmitHandler} className="d-flex">
      <Form.Control type="text" name="query" onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="Search Products..." className="mr-sm-2 ml-sm-5"></Form.Control>
      <Button type="submit" variant="outline-light" className="p-2 mx-1">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
