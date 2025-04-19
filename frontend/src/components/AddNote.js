import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils";

const AddNote = () => {
const [date, setDate] = useState("");
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [category, setCategory] = useState("");
const navigate = useNavigate();

const saveNote = async(e) => {
    e.preventDefault();
    try {
        await axios.post(`${BASE_URL}/notes`,{
            date,
            title,
            content,
            category
        });
        navigate("/");
    } catch (error) {
        console.log(error);
        
    }
}
  return (
    <div className="columns is-centered mt-6">
        <div className="column is-half">
        <form onSubmit={saveNote}>
                        <div className="field">
                            <label className="label has-text-weight-semibold">Tanggal</label>
                            <div className="control">
                                <input
                                    type="date"
                                    className="input "
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-weight-semibold">Judul</label>
                            <div className="control">
                                <div >
                                <input
                                    type="text"
                                    className="input "
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Masukkan judul Anda..."
                                />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-weight-semibold">Kategori</label>
                            <div className="control">
                                <div >
                                <input
                                    type="text"
                                    className="input "
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder=""
                                />
                                </div>
                            </div>
                        </div>
                        

                        <div className="field">
                            <label className="label has-text-weight-semibold">Isi Catatan</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Masukkan catatan Anda..."
                                />
                            </div>
                        </div>

                        <div className="field mt-4 is-flex is-justify-content-space-between">
                            <button
                                type="button"
                                className="button is-light has-text-weight-semibold is-flex-grow-1 mx-1"
                                onClick={() => navigate(-1)}
                            >
                                Kembali
                            </button>
                            <button
                                type="submit"
                                className="button is-primary has-text-weight-semibold is-flex-grow-1 mx-1"
                            >
                                Tambah Catatan
                            </button>
                        </div>

                    </form>
        </div>
    </div>
  );
};

export default AddNote;
