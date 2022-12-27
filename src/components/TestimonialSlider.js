import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsSlider } from '../sliderProps';
const TestimonialSlider = () => {
  return (
    <div className='m-testimonials' style={{ paddingTop: '80px' }}>
      <Swiper
        {...testimonialsSlider}
        className='swiper-container js-testimonials'
      >
        <div className='swiper-wrapper'>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  Charles is a great developer to work with, He's professional
                  and reliable and has a really good knowledge of ReactJS,
                  NextJs and Strapi CMS.
                </p>
              </div>
              <div className='info'>
                <h3 className='name'>Xiangmei</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIzMDYwMDAxOSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  He did exceptional work on a project that I needed help with.
                  He has exceptional communications skills and kept me updated
                  every step of the way. If I had any questions he was sure to
                  explain thoroughly what needed to be done. If I need another
                  project worked on, I will be sure to rehire Charles.
                </p>
              </div>
              <div className='info'>
                <h3 className='name'>Arlene Rodriguez</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIyNTYzMDI2NyIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  Charles is professional and experienced. He understood
                  requirements and communicates clearly.
                </p>
              </div>
              <div className='info'>
                <h3 className='name'>Martin Z.</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIyOTY0Njg3MyIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  Charles did a good job and delivered beyond expectation. He
                  was available whenever needed and did not hesitate to make any
                  changes we needed. Recommend!
                </p>
              </div>
              <div className='info'>
                <h3 className='name'>Mick G.</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIyOTI5OTA4MSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  Professional and experienced developer. Great to work with.
                </p>
              </div>
              <div className='info'>
                <h3 className='name'>Martin Z. [ again :) ]</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIyOTI3Njc0OCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  Charles did a great job. He understand my requirements and
                  build a creative design website for me. I love the hard work
                  he did.
                </p>
              </div>
              <div className='info'>
                <h3 className='name'>Raza</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIyOTAyOTI4MyIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className='testimonials-item'>
              <div className='text'>
                <div className='icon'>
                  <svg
                    width={58}
                    height={44}
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 58 44'
                  >
                    <defs />
                    <g>
                      <g>
                        <path
                          d='M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039'
                          fill='#ffffff'
                          fillOpacity={1}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>Great freelancer.</p>
              </div>
              <div className='info'>
                <h3 className='name'>S Vano</h3>
                <a
                  href='https://www.upwork.com/ab/g/pub/wom/bnr/eyJwZXJzb25VaWQiOiIxMjc1MDMwMjEyMTYwNjYzNTUyIiwiY29udHJhY3RSaWQiOiIyNTY3MTg3NCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiJ9'
                  className='lnk'
                  target='_blank'
                >
                  verify testimonial
                </a>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className='swiper-button-prev'>
          <svg
            width={13}
            height={25}
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 13 25'
          >
            <defs />
            <g>
              <g>
                <path
                  d='M0.27409,11.8138l11.13338,-11.53183c0.36484,-0.37766 0.95535,-0.37766 1.3195,0.00191c0.36392,0.37861 0.36301,0.99277 -0.00183,1.37043l-10.47066,10.84518v0l10.471,10.84423c0.36484,0.37861 0.36575,0.99087 0.00195,1.37043c-0.18253,0.18883 -0.42171,0.28515 -0.6609,0.28515c-0.23849,0 -0.47676,-0.09537 -0.65895,-0.28229l-11.1335,-11.53183c-0.17567,-0.18215 -0.2742,-0.4282 -0.2742,-0.68569c0,-0.25749 0.09888,-0.50449 0.2742,-0.68569z'
                  fill='#ffffff'
                  fillOpacity={1}
                />
              </g>
            </g>
          </svg>
        </div>
        <div className='swiper-button-next'>
          <svg
            width={13}
            height={25}
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 13 25'
          >
            <defs />
            <g>
              <g>
                <path
                  d='M0.27409,11.8138l11.13338,-11.53183c0.36484,-0.37766 0.95535,-0.37766 1.3195,0.00191c0.36392,0.37861 0.36301,0.99277 -0.00183,1.37043l-10.47066,10.84518v0l10.471,10.84423c0.36484,0.37861 0.36575,0.99087 0.00195,1.37043c-0.18253,0.18883 -0.42171,0.28515 -0.6609,0.28515c-0.23849,0 -0.47676,-0.09537 -0.65895,-0.28229l-11.1335,-11.53183c-0.17567,-0.18215 -0.2742,-0.4282 -0.2742,-0.68569c0,-0.25749 0.09888,-0.50449 0.2742,-0.68569z'
                  fill='#ffffff'
                  fillOpacity={1}
                />
              </g>
            </g>
          </svg>
        </div>
      </Swiper>
    </div>
  );
};
export default TestimonialSlider;
