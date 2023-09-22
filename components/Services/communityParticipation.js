import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function communityParticipation() {
  return (
    <>
      <section class="py-5">
        <div class="container">
          <div class="row gx-4 align-items-center justify-content-between">
            <div class="col-md-6 order-2 order-md-1">
              <div class="mt-5 mt-md-0">
                <span class="text-muted">
                  Maranatha Wellbeing Support Service
                </span>
                <h2 class="display-5 fw-bold">Community Participation</h2>

                <p class="lead">
                  Human connection and an active community life are threads that
                  weave the fabric of our daily existence. We, at Able,
                  wholeheartedly believe in fostering these connections,
                  enabling you to seamlessly integrate and actively participate
                  in your community. Our approach is deeply personal. We invest
                  time with you and your support circle, tuning into your
                  interests, aspirations, and the unique ways you&apos;d like to
                  engage with your surroundings. Our goal? To map out community
                  participation initiatives that resonate with your spirit and
                  help you chase those dreams. Your interests guide our
                  strategy. We strive to tailor each activity ensuring they
                  align with your passion and are paced to your current social
                  and communicative prowess. And the beauty of it? Our offerings
                  are versatile.
                </p>
                <p className="lead">
                  Whether you fancy the camaraderie of group activities or seek
                  a more personalized experience alongside an Able Australia
                  support companion, we&apos;ve got you covered. With our seasoned
                  team&apos;s expertise, we pride ourselves in catering to an
                  expansive spectrum of needs, including those with intricate
                  nuances. We&apos;re here to not just organize outings and
                  activities but to ensure each one echoes your aspirations,
                  addressing your specific goals and desires.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div class="col-md-5 offset-md-1 order-1 order-md-2">
              <div class="row gx-2 gx-lg-3">
                <div class="col">
                  <div class="mb-2">
                  <Image  style={{maxWidth:"none"}}
                src="/images/services-details/service-detail-4.jpg"
                alt="image" width={500} height={500}/>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-2">
                  <Image style={{maxWidth:"none"}}
                src="/images/services-details/service-detail-3.jpg"
                alt="image" width={500} height={500}/>
                  </div>
                </div>
                {/* <div class="col-6">
                  <div class="mb-2">
                    <img
                      class="img-fluid rounded-3"
                      src="https://freefrontend.dev/assets/square.png"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-2">
                    <img
                      class="img-fluid rounded-3"
                      src="https://freefrontend.dev/assets/square.png"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            
             {/* <div class="col-md-6 offset-md-1 order-1 order-md-2">
				<div class="row gx-2 gx-lg-3">
					<div class="col">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png"/></div>
					</div>
				</div>
			</div> */}
          </div>
        </div>
      </section>
    </>
  );
}
