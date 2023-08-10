import React from 'react';
import'../Style/Projects.css';
import Gambar1 from './Img/1.jpg'
import Gambar2 from './Img/2.jpg'
import Gambar3 from './Img/3.jpg'
import Gambar4 from './Img/4.jpg'

const ServiceCard = ({ iconSrc, title, subtitle }) => (
  <div className="col-md-6 col-lg-4">
    <div className="service-card">
      <div className="body">
        <img src={iconSrc} alt={title} className="icon" />
        <h6 className="title">{title}</h6>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  </div>
);

const ServiceSection = () => (
  <section>
    <div className=" text-center">
      <p className="section-subtitle">Website?</p>
      <p>Dibawah ini adalah website yang telah saya kembangkan dengan beberapa teknologi .</p>
      <div className="row">
        <ServiceCard
          iconSrc={Gambar1}
          title="CoffeShop"
          subtitle="Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod."
        />
        <ServiceCard
          iconSrc={Gambar2}
          title="Dashbord Sekolah"
          subtitle="Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod."
        />
        <ServiceCard
          iconSrc={Gambar3}
          title="Jelajah Wisata"
          subtitle="Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod."
        />        
      </div>
    </div>
  </section>
);

export default ServiceSection;