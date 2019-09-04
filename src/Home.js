import React from 'react';
import './Home.css';
import {Container} from 'react-bootstrap';


export const Home= () =>(

<div class="backhome">
    <Container >
        <br/>
            <div class="selamat_datang">
            <h2> <b> Selamat Datang </b> </h2> <br/>
            <p> Nikmati Kemudahan Pencarian Barang Anda dengan Menggunakan Lacak Barang. Lacak Barang akan memberikan keamanan dan identitas barang Anda lebih lengkap</p>
           
            
            </div>
           
            <div class="daftar">
                <form name="daftar" onsubmit="return validateForm()" method="POST">
<br/>
                    <h1 class="daftar_label"> <b> Daftar </b> </h1>
                        <p> ini cepat dan mudah </p>
                    <label> Nama Pemilik: 
                    <input type="daftar" id="fname" name="namaPemilik" placeholder="Tulis Pemilik di Sini"/>
                    </label>
                    <label> Kontak : 
                    <input type="daftar" id="lname" name="jenis" placeholder=" Tulis jenis barang"/>
                    </label>
                    <input type="submit" value="Daftarkan Barang"/>
                </form>
            </div>

            </Container>
            
        </div>

    )
