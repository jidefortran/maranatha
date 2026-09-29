/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

export default class Services extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <div className="services-section bg-f2f6f9 ptb-110">
          {/* <div className="container">
            <div className="section-title"> */}

          <section id="about" class="introduction scrollto">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12">
                <div class="section-heading">
                  <h3>SUCCESS</h3>
                  <h2 class="section-title">
                    Our journey
                  </h2>
                  <p class="section-subtitle">
                    Our journey began with a simple, yet profound, vision: to
                    create an oasis where every individual, irrespective of
                    their life&apos;s challenges, feels valued, supported, and
                    empowered. Every story, every journey, and every individual
                    is unique. We understand this, and that&apos;s why we have
                    pledged our commitment to being more than just a service –
                    we are a community, a family, dedicated to nurturing the
                    human spirit. At times, life can be a bit of a whirlwind,
                    throwing curveballs when we least expect. We&apos;ve all been
                    there, needing a friend or a guiding hand. That&apos;s exactly
                    why our support centre came into being. We see the spark in
                    every individual, and with a bit of encouragement, we know
                    that spark can turn into a flame.
                  </p>
                </div>
              </div>

              <div class="col-3">
                <div
                  class="col-2 icon-block icon-top wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {/* <div class="icon">
                    <i class="fa fa-html5 fa-2x"></i>
                  </div>

                  <div class="icon-block-description">
                    <h4>HTML5 &amp; CSS3</h4>
                    <p>
                      Has ne tritani atomorum conclusionemque, in dolorum
                      volumus cotidieque eum. At vis choro neglegentur iudico
                    </p>
                  </div> */}
                </div>

                <div
                  class="col-2 icon-block icon-top wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  {/* <div class="icon">
                    <i class="fa fa-bolt fa-2x"></i>
                  </div> */}

                  <div class="icon-block-description">
                   <Image style={{maxWidth:"none"}}
                src="/images/services-details/service-details14.jpg"
                alt="image"
                width={500}
                height={500}
              /> 
                  </div>
                </div>

                <div
                  class="col-2 icon-block icon-top wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                 

                  {/* <div class="icon-block-description">
                    <h4>Fully Responsive</h4>
                    <p>
                      Id porro tritani recusabo usu, eum intellegam consequuntur
                      et. Fugit debet ea sit, an pro nemore vivendum
                    </p>
                  </div> */}
                </div>

                <div
                  class="col-2 icon-block icon-top wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  {/* <div class="icon">
                    <i class="fa fa-rocket fa-2x"></i>
                  </div>

                  <div class="icon-block-description">
                    <h4>Parallax Effect</h4>
                    <p>
                      Id porro tritani recusabo usu, eum intellegam consequuntur
                      et. Fugit debet ea sit, an pro nemore vivendum
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* Shape Images  */}
          <div className="shape-img1">
            <img src="/images/shape/shape1.png" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/shape3.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/shape2.svg" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/shape5.svg" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/shape4.svg" alt="image" />
          </div>
          <div className="dot-shape1">
            <img src="/images/shape/dot1.png" alt="image" />
          </div>
          <div className="dot-shape2">
            <img src="/images/shape/dot3.png" alt="image" />
          </div>
        </div>
        {/* </div>
        </div> */}
      </>
    );
  }
}
