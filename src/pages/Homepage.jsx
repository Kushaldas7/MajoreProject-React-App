import React from 'react';
import Navbar from '../components/Navbar';

export const Homepage = () => {
  return (
    <>
      <Navbar />

      {/* <!-- Home section --> */}
      <section class="home" id="home">
        <div class="text">
          <h1>
            <span>Looking</span> to <br />
            rent a car
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            distinctio culpa quidem ratione qui cum,
          </p>
          <div class="app-stores">
            <img src={require('./img/ios.png')} alt="" />
            <img src={require('./img/play.png')} alt="" />
          </div>
        </div>

        <div class="form-container">
          <form action="">
            <div class="input-box">
              <span>Location</span>
              <input type="search" name="" id="" placeholder="Search Places" />
            </div>
            <div class="input-box">
              <span>Pick-Up Date</span>
              <input type="date" name="" id="" />
            </div>
            <div class="input-box">
              <span>Return Date</span>
              <input type="date" name="" id="" />
            </div>
            <input type="submit" name="" id="" class="btn" />
          </form>
        </div>
      </section>

      {/* <!-- Ride --> */}
      <section class="ride" id="ride">
        <div class="heading">
          <span>How It's Work</span>
          <h1>Rent With 3 Easy Steps</h1>
        </div>
        <div class="ride-container">
          <div class="box">
            <i class="bx bxs-map"></i>
            <h2>Chose A location</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              autem.
            </p>
          </div>

          <div class="box">
            <i class="bx bxs-calendar-check"></i>
            <h2>Pick-Up Date</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              autem.
            </p>
          </div>

          <div class="box">
            <i class="bx bxs-calendar-star"></i>
            <h2>Book a Car</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
              autem.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Services --> */}

      <section class="services" id="services">
        <div class="heading">
          <span>Best Services</span>
          <h1>
            Explore Out Top Deals <br /> From Top Rated Dealers
          </h1>
        </div>
        <div class="services-container">
          <div class="box">
            <div class="box-img">
              <img src={require('./img/car1.jpg')} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>
              ₹58500 | ₹358 <span>/month</span>
            </h2>
            <a href="#" class="btn">
              Rent Now
            </a>
          </div>

          <div class="box">
            <div class="box-img">
              <img src={require('./img/car2.jpg')} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>
              ₹58500 | ₹358 <span>/month</span>
            </h2>
            <a href="#" class="btn">
              Rent Now
            </a>
          </div>

          <div class="box">
            <div class="box-img">
              <img src={require('./img/car3.jpg')} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>
              ₹58500 | ₹358 <span>/month</span>
            </h2>
            <a href="#" class="btn">
              Rent Now
            </a>
          </div>

          <div class="box">
            <div class="box-img">
              <img src={require('./img/car4.jpg')} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>
              ₹58500 | ₹358 <span>/month</span>
            </h2>
            <a href="#" class="btn">
              Rent Now
            </a>
          </div>

          <div class="box">
            <div class="box-img">
              <img src={require('./img/car5.jpg')} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>
              ₹58500 | ₹358 <span>/month</span>
            </h2>
            <a href="#" class="btn">
              Rent Now
            </a>
          </div>

          <div class="box">
            <div class="box-img">
              <img src={require('./img/car6.jpg')} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>
              ₹58500 | ₹358 <span>/month</span>
            </h2>
            <a href="#" class="btn">
              Rent Now
            </a>
          </div>
        </div>
      </section>

      {/* <!-- About --> */}
      <section class="about" id="about">
        <div class="heading">
          <span>About Us</span>
          <h1>Best Customer Experience</h1>
        </div>
        <div class="about-container">
          <div class="about-img">
            <img src={require('./img/about.png')} alt="" />
          </div>
          <div class="about-text">
            <span>About Us</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              fugit enim facere reiciendis quae illo praesentium sint voluptate
              fugiat atque. Rerum, sunt earum. Consequuntur libero fugit aperiam
              ea in ullam quos. Nesciunt quo corporis deserunt, dolorem ad
              minus, tempora eveniet cupiditate aliquid sequi maiores debitis a
              voluptatem nisi at impedit facilis magnam ex error id consequuntur
              omnis sint provident voluptatum. Expedita omnis rem nisi libero
              earum ad exercitationem doloribus sint fuga minus voluptatem
              explicabo, illum esse, doloremque laboriosam fugit rerum. Ipsam
              natus dolor maxime rem ad culpa suscipit consequatur adipisci aut
              voluptates vitae ab dignissimos blanditiis laboriosam, iure vel
              maiores.
            </p>
            <a href="#" class="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Review section --> */}
      <section class="reviews" id="reviews">
        <div class="heading">
          <span>Reviews</span>
          <h1>Whats Our Customer Say</h1>
        </div>
        <div class="reviews-container">
          <div class="box">
            <div class="rev-img">
              <img src={require('./img/rev1.jpg')} alt="" />
            </div>
            <h2>Someone Name</h2>
            <div class="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab
              odit amet dolore dignissimos sapiente quia explicabo esse?
            </p>
          </div>

          <div class="box">
            <div class="rev-img">
              <img src={require('./img/rev2.jpg')} alt="" />
            </div>
            <h2>Someone Name</h2>
            <div class="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab
              odit amet dolore dignissimos sapiente quia explicabo esse?
            </p>
          </div>

          <div class="box">
            <div class="rev-img">
              <img src={require('./img/rev3.jpg')} alt="" />
            </div>
            <h2>Someone Name</h2>
            <div class="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab
              odit amet dolore dignissimos sapiente quia explicabo esse?
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Newsletter --> */}
      <section class="newsletter">
        <h2>Subscribe To Newsletter</h2>
        <div class="box">
          <input type="text" placeholder="Enter your Email.." />
          <a href="#" class="btn">
            Subscribe
          </a>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <div class="copyright">
        <p>&#169; your-Rent All Right Reserved</p>
        <div class="social">
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
