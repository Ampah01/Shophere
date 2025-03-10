import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
const DiscountBanner = ({ originalPrice, productName, imageUrl }) => {
  const discountedPrice = (originalPrice * 0.5).toFixed(2);

  return (
    <div className="w-full mx-auto h-[100px] md:h-[200px] bg-white shadow-lg overflow-hidden flex items-center border border-sky-500 rounded-xl">
      <div className="w-1/3 h-full">
        <img
          src={imageUrl}
          alt={productName}
          className="object-cover w-full h-full rounded-l-md"
        />
      </div>

      <div className="w-2/3 h-full text-center flex flex-col justify-center items-center bg-sky-50">
        <h2 className="text-3xl font-bold text-sky-500 mb-2">50% OFF!</h2>
        <p className="text-lg font-semibold mb-2 text-gray-700">
          Get <span className="text-sky-500">{productName}</span> for only{" "}
          <span className="font-bold text-sky-500">${discountedPrice}</span>!
        </p>
        <p className="text-sm text-gray-500 line-through">
          Original Price: ${originalPrice.toFixed(2)}
        </p>
        <button className="mt-4 px-6 py-2 bg-sky-500 text-white font-bold rounded-md shadow hover:bg-sky-600 transition duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

const DiscountBannerCarousel = () => {
  const banners = [
    {
      productName: "Product A",
      originalPrice: 100,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      productName: "Product B",
      originalPrice: 200,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      productName: "Product C",
      originalPrice: 150,
      imageUrl:
        "https://telefonika.com/wp-content/uploads/2021/02/Sony-WH-CH520-Wireless-Headphones-Bluetooth-On-Ear-Headset.jpg",
    },
  ];

  const settings = {
    dots: true ,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-[95%] mx-auto mt-4">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <DiscountBanner
            key={index}
            originalPrice={banner.originalPrice}
            productName={banner.productName}
            imageUrl={banner.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

export default DiscountBannerCarousel;
