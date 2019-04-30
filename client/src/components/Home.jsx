import React from 'react';
import Header from './common/Header';

import '../styles/scss/home.scss';

const Home = () => (
  <React.Fragment>
    <Header />
    <div className="home">
      <main>
        <h2>Homemade Pies for every celebration</h2>
        <p>
          Pie in the Sky Bakery is your source for fresh, home-baked pies for
          every occasion. Our pies are made with only the freshest fruits and
          other wholesome fillings. We make our crusts with vegetable shortening
          and no trans-fats, so you can enjoy high quality and delicious taste
          in every bite.
        </p>
      </main>
      <div className="homeboxes">
        <article>
          <h3>Testimonial</h3>
          <blockquote>
            <p>
              Thank you, Merilee, for all your help in making my daughter&apos;s
              birthday party a success. Her allergies make it difficult to find
              safe choices for her. You made it so easy! Everyone loved the
              gluten-free Apple Crumb pie, and of course, the Chess Pie.
            </p>
            <cite>Sharon Leroy</cite>
          </blockquote>
          <p>
            <button type="button">More gluten-free pies</button>
          </p>
        </article>
        <article>
          <h3>Mother&apos;s Day</h3>
          <img
            src="client/src/images/mom-pie.jpg"
            alt="Mother's day pies"
            className="responsive"
          />
          <p>
            Don&apos;t wait to reserve your Mother&apos;s Day pie, complete with
            &quot;Mom&quot; on the crust
          </p>
        </article>
      </div>
    </div>
  </React.Fragment>
);

export default Home;
