import React from 'react';
import Header from './common/Header';
import Button from './common/Button';

import '../styles/scss/home.scss';

const Home = () => (
  <React.Fragment>
    <Header />
    <div className="home">
      <main>
        <h2>Homemade Pies for Every Celebration</h2>
        <p>
          Pie in the Sky Bakery is your source for fresh, home-baked pies for
          every occasion. Our pies are made with only the freshest fruits and
          other wholesome fillings. We make our crusts with vegetable shortening
          and no trans-fats, so you can enjoy high quality and delicious taste
          in every bite.
        </p>
      </main>
      <div className="homeboxes">
        <article className="article-container">
          <h3>Testimonial</h3>
          <blockquote className="flex-grow-one">
            <p>
              Thank you, Merilee, for all your help in making my daughter&apos;s
              birthday party a success. Her allergies make it difficult to find
              safe choices for her. You made it so easy! Everyone loved the
              gluten-free Apple Crumb pie, and of course, the Chess Pie.
            </p>
            <cite>Sharon Leroy</cite>
          </blockquote>
          <Button content="More gluten-free pies" />
        </article>
        <article className="article-container">
          <h3>Mother&apos;s Day</h3>
          <img
            src="client/src/images/mom-pie.jpg"
            alt="Mother's day pies"
            className="responsive flex-grow-one"
          />
          <p>
            Don&apos;t wait to reserve your Mother&apos;s Day pie, complete with
            &quot;Mom&quot; on the crust
          </p>
          <Button content="Order now!" />
        </article>
        <article className="article-container">
          <h3>Menu</h3>
          <img
            src="client/src/images/pie-coffee.jpg"
            alt="Mother's day pies"
            className="responsive flex-grow-onw"
          />
          <p>
            Join us for a slice of pie, with or without ice cream, and coffee at
            our Main Street location.
          </p>
          <Button content="Eat more pie!" />
        </article>
        <article className="article-container">
          <h3>Donations</h3>
          <blockquote className="flex-grow-one">
            <p>
              We are grateful to Merilee and everyone at Pie in the Sky Bakery
              for donating 20 pies to Relay for Life. They were delicious and
              very much appreciated by all.
            </p>
            <cite>Darlene Huston, Chairperson</cite>
          </blockquote>
          <Button content="Let us donate to your cause!" />
        </article>
      </div>
    </div>
  </React.Fragment>
);

export default Home;
