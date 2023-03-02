/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import { FaRegCopy } from "react-icons/fa";


function Homepage() {

    const codeExamples = [
        { id: 1,title: "写程序",text: "你现在是一个程序语言专家，请帮我用程序语言 写一个函式，它需要做到某个功能" },
        { id: 2, title: "解读程序代码", text: "你现在是一个程序语言专家，请告诉我以下的程序代码在做什么。附上程序代码" },
        { id: 3, title: "重构代码" ,text: "你现在是一个 Clean Code 专家，我有以下的程序码，请用更干净简洁的方式改写，让我的同事们可以更容易维护程序码。另外，也解释为什么你要这样重构，让我能把重构的方式的说明加到 Pull Request 当中。附上程序代码" },
      ];
  const [activeIndex, setActiveIndex] = useState(1);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("💻 编程");

  const handleCopyClick = (event) => {
    const textElement = event.target.parentElement.querySelector(".text-body-excerpt");
    const text = textElement.innerText;
    navigator.clipboard.writeText(text);
    event.target.innerText = "已复制 !";
    setTimeout(() => {
        event.target.innerText= "㊢ 复制";
    }, 2000);
  };
  
  const openModal = () => {
  setModal(!modal);
  };


  const handleOnClick = (index,title) => {
      setTitle(title);
      setActiveIndex(index); // remove the curly braces
  };
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
              <div className="line"></div>
              <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-4 color-gray-600">
                                    你可能感兴趣...<br className="d-lg-block d-none" />
                                    </h2>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                                </div>
                        <div className="text-center mt-90">
                        <ul className="nav" role="tablist">
                            <li onClick={() => handleOnClick(1,"💻 编程")}>
                                <Link href="/#tab-1" legacyBehavior>
                                    <a className={activeIndex === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>💻 编程</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(2,"📖 学术论文")}>
                                <Link href="/#tab-2" legacyBehavior>
                                    <a className={activeIndex === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>📖 学术论文</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(3,"🧭 职业顾问")}>
                                <Link href="/#tab-3" legacyBehavior>
                                    <a className={activeIndex === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>🧭 职业顾问</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(4,"💬 模拟面试")}>
                                <Link href="/#tab-4" legacyBehavior>
                                    <a className={activeIndex === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>💬 模拟面试</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(5,"語 语言学习")}>
                                <Link href="/#tab-5" legacyBehavior>
                                    <a className={activeIndex === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>語 语言学习</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(6,"📧 写邮件")}>
                                <Link href="/#tab-6" legacyBehavior>
                                    <a className={activeIndex === 6 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>📧 写邮件</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(7,"📑 创业规划")}>
                                <Link href="/#tab-7" legacyBehavior>
                                    <a className={activeIndex === 7 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>📑 创业规划</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(8,"📕 博文撰写")}>
                                <Link href="/#tab-8" legacyBehavior>
                                    <a className={activeIndex === 8 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>📕 博文撰写</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(9,"🎈 活动策划")}>
                                <Link href="/#tab-9" legacyBehavior>
                                    <a className={activeIndex === 9 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>🎈 活动策划</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(10,"🍔 日常生活")}>
                                <Link href="/#tab-10" legacyBehavior>
                                    <a className={activeIndex === 10 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>🍔 日常生活</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(11,"🎨 有趣好玩")}>
                                <Link href="/#tab-11" legacyBehavior>
                                    <a className={activeIndex === 11 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>🎨 有趣好玩</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(12,"👨‍🎓 知识学习")}>
                                <Link href="/#tab-12" legacyBehavior>
                                    <a className={activeIndex === 12 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>👨‍🎓 知识学习</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(13,"✏️ 写作帮手")}>
                                <Link href="/#tab-13" legacyBehavior>
                                    <a className={activeIndex === 13 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>✏️ 写作帮手</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(14,"💾 资料整理")}>
                                <Link href="/#tab-14" legacyBehavior>
                                    <a className={activeIndex === 14 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>💾 资料整理</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(15,"💕 情感咨询")}>
                                <Link href="/#tab-15" legacyBehavior>
                                    <a className={activeIndex === 15 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>💕 情感咨询</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(16,"💪 健身指导")}>
                                <Link href="/#tab-16" legacyBehavior>
                                    <a className={activeIndex === 16 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>💪 健身指导</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                    <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-4 color-gray-600">
                                    {title}<br className="d-lg-block d-none" />
                                    </h2>
                                    <div className="line-3px-green"></div>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                                <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="container mt-70">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="card-grid-1 bg-5 bg-business hover-up">
                                                <button className="copy-button" onClick={handleCopyClick}>
                                                    
                                                    ㊢ 复制
                                                </button>
                                                <h3 className="text-heading-3 mt-20">
                                                    写程序
                                                </h3>
                                                <p className="text-body-excerpt mt-20">
                                                    你现在是一个 <span className="tag-1">程序语言</span> 专家，请帮我用 <span className="tag-1">程序语言</span> 写一个函式，它需要做到 <span className="tag-1">某个功能</span>
                                                </p>
                                            </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="card-grid-1 bg-2 bg-social hover-up">
                                                <button className="copy-button" onClick={handleCopyClick}>
                                                    ㊢ 复制
                                                </button>
                                                <h3 className="text-heading-3 mt-20">
                                                    解读程序代码
                                                </h3>
                                                <p className="text-body-excerpt mt-20">
                                                    你现在是一个 <span className="tag-2">程序语言</span> 专家，请告诉我以下的程序代码在做什么。<span className="tag-2">附上程序代码 </span></p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="card-grid-1 bg-9 bg-social hover-up">
                                                <button className="copy-button" onClick={handleCopyClick}>
                                                    ㊢ 复制
                                                </button>
                                                <h3 className="text-heading-3 mt-20">
                                                    重构代码
                                                </h3>
                                                <p className="text-body-excerpt mt-20">
                                                你现在是一个 Clean Code 专家，我有以下的程序码，请用更干净简洁的方式改写，让我的同事们可以更容易维护程序码。另外，也解释为什么你要这样重构，让我能把重构的方式的说明加到 Pull Request 当中。<span className="tag-3">附上程序代码 </span></p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-1 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Design Studios That Everyone
                                                    Should Know
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video"  onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-2.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-3 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    We can blend colors multiple
                                                    ways
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video"  onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-3.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-4 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Choose The Best Plan Thats For
                                                    You
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-4.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Subscribe our newsletter to get
                                                    gift
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-5.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 6 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-6 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Ready to get started? Create and
                                                    Account
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video"  onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-6.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
          </div>
        </div>
      </Layout>

    </>
  )
}

export default Homepage;