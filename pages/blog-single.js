import Layout from "../src/layout/Layout";
const BlogSingle = () => {
  return (
    <Layout extraWrapClass={"single-post"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* titles */}
              <div className="m-titles">
                <h1
                  className="m-title"
                >
                  How to Become a Successful UI/UX Designer
                </h1>
                <div
                  className="m-category"
                >
                  <a href="#" rel="category tag">
                    UX Design
                  </a>{" "}
                  / November 28, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Single Post */}
      <section className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              {/* image */}
              <div className="m-image-large">
                <div className="image">
                  <div
                    className="img"
                    style={{ backgroundImage: "url(assets/images/blog5.jpg)" }}
                  />
                </div>
              </div>
              {/* content */}
              <div className="description">
                <div
                  className="post-content"
                >
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <blockquote>
                    <p>
                      Photography is the story I fail to put into words get
                      ligula vel, commodo luctus felis. Ut dignissim sapien sit
                      amet molestie rutr
                    </p>
                    <p>
                      <cite>– Destin Sparks</cite>
                    </p>
                  </blockquote>
                  <p>
                    <br />
                  </p>
                  <h3>Aliquam vel sem vel vellesuada</h3>
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <ul className="gallery gallery-columns-2">
                    <li className="gallery-item">
                      <figure>
                        <img src="assets/images/blog8.jpg" alt="" />
                      </figure>
                    </li>
                    <li className="gallery-item">
                      <figure>
                        <img src="assets/images/blog7.jpg" alt="" />
                      </figure>
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <ul>
                    <li>
                      Donec arcu lacus, ornare eget ligula vel, commodo luctus
                      felis.
                    </li>
                    <li>Ut dignissim sapien sit amet molestie rutrum.</li>
                    <li>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes.
                    </li>
                    <li>
                      Ut at nulla ut libero mollis viverra sed vitae purus.
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex.
                  </p>
                  <span className="tags-links">
                    <span>Tags:</span>
                    <a href="#">Design</a>
                    <a href="#">HTML</a>
                    <a href="#">UX</a>
                    <a href="#">WordPress</a>
                  </span>
                </div>
              </div>
            </div>
            {/* Comments */}
            <div
              className="comments-post"
            >
              <div className="section__comments">
                <div className="m-titles">
                  <div className="m-title align-left">2 Comments</div>
                </div>
                <ul className="comments">
                  <li className="comment comment-item">
                    <div className="comment comment-box">
                      <img
                        src="assets/images/avatar.png"
                        className="avatar"
                        alt=""
                      />
                      <div className="comment-box__body">
                        <div className="content-caption post-content description">
                          <h5 className="comment-box__details">
                            Robert Brown <span>December 9, 2021</span>
                          </h5>
                          <p>
                            Nam dui mauris, congue vel nisi in, tempus gravida
                            enim. Nulla et tristique orci. Pellentesque lectus
                            sapien, maximus id gravida sit amet, tristique non
                            eros. Etiam aliquet, sem vitae sagittis convallis,
                            ante sapien tincidunt nisl, eget dapibus tortor
                            velit quis ex.
                          </p>
                        </div>
                      </div>
                      <div className="comment-footer">
                        <a className="comment-reply-link" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="comment comment-item">
                    <div className="comment comment-box">
                      <img
                        src="assets/images/avatar.png"
                        className="avatar"
                        alt=""
                      />
                      <div className="comment-box__body">
                        <div className="content-caption post-content description">
                          <h5 className="comment-box__details">
                            Ryan Berg <span>December 9, 2021</span>
                          </h5>
                          <p>
                            Proin et condimentum est, sed pretium ex. Mauris
                            posuere est metus, vitae commodo sem posuere eget.
                          </p>
                        </div>
                      </div>
                      <div className="comment-footer">
                        <a className="comment-reply-link" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="form-comment">
                  <div className="comment-respond">
                    <div className="m-titles">
                      <div className="m-title align-left">Leave a comment</div>
                    </div>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      method="post"
                      className="comment-form"
                    >
                      <div className="group-row">
                        <div className="group">
                          <textarea
                            className="textarea"
                            name="comment"
                            rows={3}
                            placeholder="Comment"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="group-row">
                        <div className="group">
                          <input
                            type="text"
                            name="author"
                            className="input"
                            placeholder="Name"
                          />
                        </div>
                        <div className="group">
                          <input
                            type="text"
                            name="email"
                            className="input"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="group-row">
                        <div className="group">
                          <button type="submit" name="submit" className="btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogSingle;
