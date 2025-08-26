import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function HomePage() {
   const featuredProducts = [
    
  {
    id: 1,
    name: "Luxury Watch",
    description: "Elegant design with stainless steel strap and water resistance.",
    price: 199,
    image: "/product 5.jpg",
  },
  {
    id: 2,
    name: "Classic Watch",
    description: "Timeless classic with leather strap, perfect for daily wear.",
    price: 149,
    image: "/product.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Modern smartwatch with fitness tracking, call alerts, and notifications to keep you connected throughout the day.",
    price: 249,
    image: "/product1.jpg",
  },
  {
    id: 4,
    name: "Premium Leather Watch",
    description: "Crafted with genuine Italian leather, this watch blends tradition with modern aesthetics. A perfect choice for professionals who value timeless elegance and unmatched comfort on the wrist.",
    price: 179,
    image: "/product2.jpg",
  },
  {
    id: 5,
    name: "Minimalist Silver Watch",
    description: "A sleek, minimalist design that highlights simplicity and sophistication. Ideal for formal occasions or everyday office wear, offering a modern and professional appeal.",
    price: 129,
    image: "/product3.jpg",
  },
  {
    id: 6,
    name: "Sporty Digital Watch",
    description: "Durable digital watch with stopwatch, alarm, and backlight for outdoor activities. Built to withstand rough conditions, making it perfect for athletes, hikers, and adventure lovers.",
    price: 99,
    image: "/product 5.jpg",
  },
  {
    id: 7,
    name: "Rose Gold Ladies Watch",
    description: "Delicate rose gold finish with a slim strap, designed especially for women who appreciate subtle beauty and modern elegance in every accessory they wear.",
    price: 159,
    image: "/women watch.jpg",
  },
  {
    id: 8,
    name: "Automatic Mechanical Watch",
    description: "Powered by motion, this mechanical watch showcases intricate craftsmanship and a transparent case back. A collector’s piece designed for watch enthusiasts who admire precision engineering and timeless artistry.",
    price: 349,
    image: "/water proof watch.jpg",
  },
  {
    id: 9,
    name: "Hybrid Smartwatch",
    description: "Blends the charm of an analog watch with the features of a smartwatch. Track steps, monitor sleep, and receive call notifications without compromising on style and elegance.",
    price: 229,
    image: "/digitalwatch.jpg",
  },
  {
    id: 10,
    name: "Chronograph Watch",
    description: "Sport-inspired chronograph watch with multiple dials, tachymeter, and premium steel casing. Perfect for men who want both performance and rugged style in one accessory.",
    price: 199,
    image: "/men watch.jpg",
  },
  {
    id: 11,
    name: "Elegant Diamond Watch",
    description: "Studded with subtle crystals on the dial, this watch is a luxury statement piece. Whether at a wedding or a grand event, it ensures you stand out with style and sophistication.",
    price: 499,
    image: "/diamond watch.jpg",
  },
  {
    id: 12,
    name: "Travel-Friendly Smartwatch",
    description: "With GPS navigation, long battery life, offline music storage, and fitness tracking, this smartwatch is an ideal companion for travelers, hikers, and adventure seekers who want technology and style combined in one sleek device.",
    price: 279,
    image: "/watch2.jpg",
  },
  {
    id: 13,
    name: "Vintage Pocket Watch",
    description: "Inspired by classic designs, this pocket watch is a nod to the golden era of timekeeping. Featuring intricate engravings and a sturdy chain, it’s a collector’s favorite and a thoughtful gift for those who cherish vintage fashion.",
    price: 159,
    image: "/watch3.jpg",
  },
];

  

  return (
    <main className="bg-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
       
      </video>


        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Discover Our Exclusive Watch Collection
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Explore timeless designs that suit every style.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
  {/* Product grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {featuredProducts
    .sort(() => 0.5 - Math.random())
    .slice(0,3)
    .map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        name={product.name}
        description={product.description}
        price={product.price}
      />
    ))}
  </div>

  {/* View all button */}
  <div className="mt-12 text-center">
    <Link
      to="/products"
      className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300"
    >
      View All Products
      <span className="text-lg">→</span>
    </Link>
  </div>
</div>


        
    </main>
  );
}

export default HomePage;
