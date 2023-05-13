
import React from "react";
import { useState } from "react";

function ManajemenBuku({ bookList, store, update, remove }) {

    const [form, setForm] = useState();

    // console.log(bookList)
    const [inputBook, setInputBook] = useState();
    function handleJudul(event) {
        setInputBook({ ...inputBook, judul: event.target.value });
    }

    function handlePengarang(event) {
        setInputBook({ ...inputBook, pengarang: event.target.value });
    }

    function handleHarga(event) {
        setInputBook({ ...inputBook, harga: event.target.value });
    }

    function handleStok(event) {
        setInputBook({ ...inputBook, stok: event.target.value });
    }

    // submit data
    function submitAdd(event) {
        event.preventDefault();
        store(inputBook);
    }

    // change data
    function submitChange(event) {
        event.preventDefault();
        update(inputBook);
        setForm("");
    }

    // tambah data baru
    function showCreate() {
        setForm("create");
    }

    // edit data lama menjadi baru
    function showEdit(book) {
        setInputBook(book);

        setForm("edit");
    }

    // hapus data
    function deleteBook(book) {
        remove(book);
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>

            {form === "create" && (
                <div id="formTambah">
                    <h5>Tambah Data</h5>
                    <hr />
                    <form className="form-row" onSubmit={submitAdd}>
                        <div className="col-3 mb-2">
                            <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} />
                        </div>
                        <div className="col-3 mb-2">
                            <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} />
                        </div>
                        <div className="col-2 mb-2">
                            <input type="text" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} />
                        </div>
                        <div className="col-2 mb-2">
                            <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} />
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-primary" value="Simpan" />
                        </div>
                    </form>
                </div>
            )}

            {form === "edit" && (
                <div id="formUbah">
                    <h5>Ubah Data</h5>
                    <hr />
                    <form className="form-row" onSubmit={submitChange}>
                        <div className="col-3 mb-2">
                            <input type="text" name="judul" className="form-control mx-2" placeholder="Judul" onChange={handleJudul} value={inputBook.judul} />
                        </div>
                        <div className="col-3 mb-2">
                            <input type="text" name="pengarang" className="form-control mx-2" placeholder="Pengarang" onChange={handlePengarang} value={inputBook.pengarang} />
                        </div>
                        <div className="col-2 mb-2">
                            <input type="text" name="harga" className="form-control mx-2" placeholder="Harga" onChange={handleHarga} value={inputBook.harga} />
                        </div>
                        <div className="col-2 mb-2">
                            <input type="number" name="stok" className="form-control mx-2" placeholder="Stok" onChange={handleStok} value={inputBook.stok} />
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-warning ml-2" value="Ubah" />
                        </div>
                    </form>
                </div>
            )}

            <div id="daftarBuku">
                <h2 className="mt-3">Daftar Buku</h2>
                <hr />
                <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Buku</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Judul Buku</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th className="text-center">Stok</th>
                            <th className="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td>{book.judul}</td>
                                <td>{book.pengarang}</td>
                                <td>{book.harga}</td>
                                <td className="text-center">{book.stok}</td>
                                <td className="text-center">
                                    <button className="btn btn-info btn-sm me-3" onClick={() => showEdit(book)}>edit </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteBook(book)}> hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManajemenBuku;