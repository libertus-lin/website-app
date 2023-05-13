import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import ManajemenBuku from './components/ManajemenBuku';
import NotFound from './components/404'; 

function App() {
  const [books, /** setBooks*/] = useState([
    { _id: 1, judul: "Cara membudidaya cabe", author: "Libertus" },
    { _id: 4, judul: "Ciri-ciri cabe tidak sehat", author: "Ferdian Ananta" },
    { _id: 2, judul: "Bagaimana cara memupuk bibit jagung", author: "Libertus" },
    { _id: 3, judul: "Cara budidaya kelapa sawit", author: "Sandhika Galih" },
    { _id: 5, judul: "Cara panen padi yang benar", author: "Ferdian Ananta" },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route exact path="/" element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData} />} />
          <Route path='*' elem ent={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// kirim data / tambahkan data baru
function storeData(inputBook) { 
  console.log(inputBook);
  alert("Data berhasil ditambahkan!");
}

// mengubah data
function updateData(inputBook) {
  console.log(inputBook); 
  alert("Data berhasil diubah!");
}

// menghapus data
function deleteData(book) {
  console.log(book);
  alert("Data berhasil dihapus!");
}