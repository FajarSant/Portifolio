import React from 'react';
import { Button } from 'react-bootstrap';
import '../Style/About.css'; // Pastikan path ke file CSS Anda benar
import fotoku from '../components/Img/luffy.png';
import cv from '../components/New folder/data.txt'

const About = () => {
  const handleDownloadCV = () => {
    // Ganti link di bawah ini dengan URL CV Anda
    const cvUrl = cv;
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="about">
      <div className="about-content">
      <div className="about-image">
  <img src={fotoku} alt="Fajar Santoso - Junior Web Developer" />
</div>
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            Saya <span>Fajar Santoso</span>, seorang junior web developer yang penuh semangat dalam menciptakan pengalaman digital menarik dan fungsional. Dari HTML hingga kerangka kerja modern, saya terus mengejar pengetahuan baru untuk menjadi kompeten dalam pengembangan web. Fokus utama saya adalah pengembangan front-end, di mana saya senang menciptakan antarmuka responsif dan menarik. Selain coding, saya juga aktif berbagi pengetahuan melalui tulisan dan presentasi, serta terlibat dalam komunitas pengembang. Saya selalu mencari peluang untuk berkontribusi pada proyek menarik dan terus belajar dari para profesional berpengalaman. Jika Anda ingin berdiskusi tentang pengembangan web atau mencari kolaborasi, jangan ragu untuk menghubungi saya. Terima kasih telah mengunjungi portofolio saya.
          </p>
          <Button variant="outline-warning" onClick={handleDownloadCV}>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
