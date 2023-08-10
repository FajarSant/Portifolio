import React from 'react';
import '../Style/Tentang.css';

const TentangSaya = () => {
  const nomorTelepon = 'Nomor Telepon: +6285866436897';
  const email = 'Email: 4jar100so@gmail.com';
  const alamat = 'Alamat: Karanganyar';
  const statusHubungan = 'Status Hubungan: Lajang';
  const agama = 'Agama: Islam';

  return (
    <div className="container mt-5">
      <h2>Informasi Pribadi</h2>
      <p>{nomorTelepon}</p>
      <p>{email}</p>
      <p>{alamat}</p>
      <p>{statusHubungan}</p>
      <p>{agama}</p>
    </div>
  );
};

export default TentangSaya;
