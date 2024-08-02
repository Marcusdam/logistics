import React from 'react';
import Services from './Services';
import About from './About';
import Project from './Project';
import Testimonial from './Testimonial';
import WhyChooseUs from './WhyChooseUs';
import Team from './Team';
import Contact from './Contact';
import Blog from './Blog';
import HomeImg from './HomeImg';
import Banners from '../../components/Banners';
import Homebanner from '../../assets/images/Homebanner.png'; 

const Home = () => {
  return (
    <div>
      <Banners
        backgroundImage={Homebanner}
        title="Logistics & Supply Chain Solutions"
        subTitle="Your Gateway to any Destination in the World"
        buttonName='Explore More'
        bannerText='In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.'
        showButton={true}
        isHome={true} // Pass isHome as true
      />
      <Services />
      <About />
      <Project />
      <Testimonial />
      <WhyChooseUs />
      <Team />
      <Contact />
      <Blog />
      <HomeImg />
    </div>
  );
};

export default Home;
