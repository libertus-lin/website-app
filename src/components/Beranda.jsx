import React from "react";

function Beranda({ bookList }) {
    return (
        <div className="container mt-3 w-75">
            <h1 className="text-center">Halaman Beranda</h1>

            <div id="katalogBuku" className="mt-5">
            </div>
        </div>
    );
}

export default Beranda;