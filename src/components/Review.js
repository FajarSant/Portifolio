import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gambar1 from './Img/luffy.png'
import '../Style/Review.css'

const TestimonialCarousel = () => {
  const testimonials = [
    {
        quote: "Luar Biasa",
        image: Gambar1,
        name: "Fajar Santoso",
        profession: "MHS. PTI UMS"
      },
      {
        quote: "Luar Biasa",
        image: Gambar1,
        name: "Fajar Santoso",
        profession: "MHS. PTI UMS"
      },
      {
        quote: "Luar Biasa",
        image: Gambar1,
        name: "Fajar Santoso",
        profession: "MHS. PTI UMS"
      },
      {
        quote: "Luar Biasa",
        image: Gambar1,
        name: "Fajar Santoso",
        profession: "MHS. PTI UMS"
      },
    ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const testimonialItems = testimonials.map((testimonial, index) => (
    <div key={index} className="testimonial-item">
      <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
      <h4 className="font-weight-light mb-4">{testimonial.quote}</h4>
      <img src={testimonial.image} alt="testimonial" className="img-fluid rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
      <h5 className="font-weight-bold m-0">{testimonial.name}</h5>
      <span>{testimonial.profession}</span>
    </div>
  ));

  return (
    <div className="container-fluid py-5" id="testimonial">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h2> Testimoni</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Slider {...settings}>
              {testimonialItems}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
