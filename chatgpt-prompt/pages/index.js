/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";


function Homepage() {
  return (
    <>
      <Layout>
        <div className="section-box">
          <div className="banner-hero banner-homepage8">
            <div className="container mt-50">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-4 font-bold mt-30">让你的 <span className="color-green-900">ChatGPT</span> 变得与众不同✨</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">用最简单的语言，激发ChatGPT最强大的功能</p>
                  <div className="mt-40 box-mw-610">
                    <div className="form-newsletter-2">
                      <form><input className="input-newsletter" value="" placeholder="搜索提示词..." /><button className="btn btn-newsletter icon-arrow-right-white" type="submit">立刻开始</button></form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                <div className="scrolling-text-container">
                    <p className="scrolling-text">ChatGPT带来了哪些创业风口?<br/>
                                                  给我推荐一句表白时候说的话吧～<br/>
                                                  改写以下履历，为每一点加上量化的数据，改写时请维持列点的形式.<br/>
                                                  你现在是 Google 的产品经理面试官，请分享在 Google 产品经理面试时最常会问的 5 个问题.<br/>
                                                  你现在是我的健身教练，我现在身高160厘米体重106斤，我该制定什么样的计划才有可能在一个月的时间内瘦到100斤一下呢？<br/>
                                                  如何年入100W?<br/>
                                                  你扮演数学老师的角色， 我需要理解一元二次方程式。请用浅显易懂方式描述.<br/>
                                                  你现在是一个 JavaScript 专家，请帮我用 JavaScript 写一个函式，它需要做到 输入一个一维阵列，把这个一维阵列转换成二维阵列。同时我要能够自由地决定二维阵列中的子阵列长度是多少?<br/>
                                                  怎么样才能让我喜欢的人也喜欢我？
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-search mt-100">
                <h2 className="text-heading-4">Popular Search</h2>
                <ul className="list-search-popular">
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">New York</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">London</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Estonia</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Phuket</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Paris</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Nethelands</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Lotus Temple</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Eiffel Tower</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">The Colosseum</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Rome</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Statue of Liberty</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Machu Picchu</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Bali, Indonesia</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Orleans</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Kerry, Ireland</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Marrakesh</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Morocco</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Central</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Tokyo</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Dubai</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Bora Bora</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Dubrovnik</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Edinburgh</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Paro Valley</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Jaipur, India</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Waikato</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">Havana</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">NY, USA</a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="btn btn-border">West</a></Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-100">
          <div className="container"><span className="tag-1 color-orange-900">Hot for this Summer</span>
            <h2 className="text-heading-1 color-gray-900 mt-30">Explore Top Destiations</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">We find the absolute best prices on hotels and flights<br className="d-lg-block d-none" />then we pass these savings directly to you.</p>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage8/img-3.png" /></div>
                </a></Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" /></span></div>
                      <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>

                    </div>
                    <Link href="#" legacyBehavior><a>
                      <h3 className="text-body-lead color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                    </a></Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices"><span className="location-icon">Central Park West, USA</span></div>
                      <div className="box-prices"><span className="calendar-icon">3 days, 2 night</span></div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                      <div className="button-add text-end">
                        <Link href="#" legacyBehavior><a className="btn btn-explorer">Explore</a></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage8/img-4.png" /></div>
                </a></Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" /></span></div>
                      <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>

                    </div>
                    <Link href="#" legacyBehavior><a>
                      <h3 className="text-body-lead color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                    </a></Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices"><span className="location-icon">Central Park West, USA</span></div>
                      <div className="box-prices"><span className="calendar-icon">3 days, 2 night</span></div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                      <div className="button-add text-end">
                        <Link href="#" legacyBehavior><a className="btn btn-explorer">Explore</a></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage8/img-5.png" /></div>
                </a></Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" /></span></div>
                      <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>

                    </div>
                    <Link href="#" legacyBehavior><a>
                      <h3 className="text-body-lead color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                    </a></Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices"><span className="location-icon">Central Park West, USA</span></div>
                      <div className="box-prices"><span className="calendar-icon">3 days, 2 night</span></div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                      <div className="button-add text-end">
                        <Link href="#" legacyBehavior><a className="btn btn-explorer">Explore</a></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage8/img-6.png" /></div>
                </a></Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" /></span></div>
                      <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>

                    </div>
                    <Link href="#" legacyBehavior><a>
                      <h3 className="text-body-lead color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                    </a></Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices"><span className="location-icon">Central Park West, USA</span></div>
                      <div className="box-prices"><span className="calendar-icon">3 days, 2 night</span></div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                      <div className="button-add text-end">
                        <Link href="#" legacyBehavior><a className="btn btn-explorer">Explore</a></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage8/img-7.png" /></div>
                </a></Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" /></span></div>
                      <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>

                    </div>
                    <Link href="#" legacyBehavior><a>
                      <h3 className="text-body-lead color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                    </a></Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices"><span className="location-icon">Central Park West, USA</span></div>
                      <div className="box-prices"><span className="calendar-icon">3 days, 2 night</span></div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                      <div className="button-add text-end">
                        <Link href="#" legacyBehavior><a className="btn btn-explorer">Explore</a></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage8/img-8.png" /></div>
                </a></Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" /></span></div>
                      <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>

                    </div>
                    <Link href="#" legacyBehavior><a>
                      <h3 className="text-body-lead color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                    </a></Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices"><span className="location-icon">Central Park West, USA</span></div>
                      <div className="box-prices"><span className="calendar-icon">3 days, 2 night</span></div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                      <div className="button-add text-end">
                        <Link href="#" legacyBehavior><a className="btn btn-explorer">Explore</a></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-30">
              <Link href="#" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Load more destinations</a></Link>
              </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image"><img className="img-responsive" src="assets/imgs/page/homepage8/img-2.png" alt="Agon" /></div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">How does it works</h3>
                <p className="text-body-lead-large color-gray-600 mt-20">We find the absolute best prices on hotels and flights then we pass these savings directly to you.</p>
                <div className="list-icons-round mt-40">
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/user.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Account</h4>
                    <p className="text-body-text color-gray-600 mt-5">All the necessary information to create your account are below this.</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/destination.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Select Destination</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".5s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/trip.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Book a Trip</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".7s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/flight.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Take your flight</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box bg-7 mt-70">
          <div className="container mt-100 mb-50">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">A Simply Perfect Place To Get Lost</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">Feugiat primis ligula risus auctor egestas and augue viverra mauri tortor in iaculis magna a feugiat mauris ipsum and placerat viverra tortor gravida purus.</p>
                <div className="list-icons mt-40">
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" /></span>
                    <h4 className="text-heading-4">Best Price Guarantee</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-design.svg" /></span>
                    <h4 className="text-heading-4">Easy and Quick Booking</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image"><img className="img-responsive" src="assets/imgs/page/homepage8/img.png" alt="Agon" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
              </div>
            </div>
          </div>
          <div className="container mt-80">

          <TestimonialSlider/>
          </div>
        </div>
        <div className="section-box overflow-visible mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-partners none-bd pb-0">
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-7.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-8.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-9.svg" /></a></Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="section-box overflow-visible mb-100">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="bg-6 box-newsletter position-relative">
                  <div className="row">
                    <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                      <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                      <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                      <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter"><input className="input-newsletter" value="" placeholder="Enter you mail .." /><button className="btn btn-send"></button></form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

    </>
  )
}

export default Homepage;