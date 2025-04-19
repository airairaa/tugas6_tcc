import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

const NoteList = () => {
const [notes, setNote] = useState([]);

useEffect(()=>{
    getNotes();
}, []);


const getNotes = async() =>{
    const response = await axios.get(`${BASE_URL}/notes`);
    console.log(response)
        setNote(response.data);
};
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Catatan</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {notes.map((note, index) => (
                <tr key={note.id}>
                    <td>{index + 1}</td>
                    <td>{note.createdAt ? note.createdAt.substring(0, 10) : ""}</td>
                    <td>{note.title}</td>
                    <td>{note.category}</td>
                    <td>{note.content}</td>
                    <td>
                        
                        <button className="button is-small is-info">
                            
                            Edit</button>
                        <button className="button is-small is-danger">
                            Hapus</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
        </div>
    </div>
  );
};

export default NoteList
