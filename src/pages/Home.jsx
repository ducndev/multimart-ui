import React, {useState, useEffect} from 'react'
import Helmet from '../components/helmet/Helmet';
import {Container, Row, Col} from 'reactstrap'; 
import heroImg from '../assets/images/hero-img.png';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import counterImg from '../assets/images/counter-timer-img.png';
import '../style/home.css';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import products from  '../assets/data/products';
import Clock from '../components/UI/Clock';
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wireLessProducts, setWireLessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(() =>  {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair');
    
    const filteredBestSaleProducts = products.filter((item) => item.category === 'sofa');

    const filtersMobileProducts = products.filter((item) => item.category === 'mobile');

    const filtersWireLessProducts = products.filter((item) => item.category === 'wireless');

    const filtersPopularProducts = products.filter((item) => item.category === 'watch');

    
    setTrendingProducts(filteredTrendingProducts);
    setBestSaleProducts(filteredBestSaleProducts);

    setMobileProducts(filtersMobileProducts);
    setWireLessProducts(filtersWireLessProducts);
    setPopularProducts(filtersPopularProducts);

    
  }, []);
  return (
    <Helmet title="Home">
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className='hero__subtitle'>Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amiet consecteteur, adipisicing alit.
                  Qaerat mulla repellat quo eaque alias corporis cunt, facilis nesciunt rem fugit!
                </p>
                <motion.button whileTap={{scale: 1.2}} type="" className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
              <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>
              <ProductList data={bestSaleProducts}/>
          </Row>
        </Container>
      </section>
      <section className='timer__count'>
          <Container>
            <Row>
              <Col lg='6' md='12' className='count__down-col'>
                <div className='clock__top-content'>
                  <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                  <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                </div>
                <Clock />
                <motion.button whileTap={{scale: 1.2}} className='buy__btn store__btn'><Link to="/shop">Visit Store</Link></motion.button>
              </Col>
                <Col lg='6' md='12' className='text-end couter__img'>
                  <img src={counterImg} alt=""/>
                </Col>
            </Row>
          </Container>
      </section>
      <section className='new__arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
              <ProductList data={mobileProducts}/>
              <ProductList data={wireLessProducts}/>
          </Row>
          </Container>
      </section>

      <section className='popular__category'>
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Popular in Category</h2>
            </Col>
              <ProductList data={popularProducts}/>
          </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default Home
