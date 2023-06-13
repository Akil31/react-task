import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://api-url/data');
      setData(response.data);
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://api-url/data', { name });
      console.log(response.data); // Handle the successful creation
      setName('');
      fetchData();
    } catch (error) {
      console.error(error); // Handle the creation error
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://api-url/data/${id}`, { name });
      console.log(response.data); // Handle the successful update
      fetchData();
    } catch (error) {
      console.error(error); // Handle the update error
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://api-url/data/${id}`);
      console.log(response.data); // Handle the successful deletion
      fetchData();
    } catch (error) {
      console.error(error); // Handle the deletion error
    }
  };

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CrudComponent;
