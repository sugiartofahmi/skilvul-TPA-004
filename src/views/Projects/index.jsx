import BaseLayout from "../../layouts/BaseLayout";
import ContentLayout from "../../layouts/ContentLayout";
const Projects = () => {
  return (
    <BaseLayout id="projects">
      <ContentLayout>
        <section>
          <h1 className="title">
            <span>Projects</span>
          </h1>
          <h1 className="description">
            These are some of the projects I've made
          </h1>
        </section>
        <section className="grid">
          <section className="card">
            <a href="https://shortway.mnfs.dev/" target="_blank">
              <section className="card_image">
                <img src="/img/shortway.png" alt="" />
              </section>
              <section className="card_body">
                <p className="sub_title">Shortway</p>
                <p className="description">
                  A website application to shorten long urls
                </p>
              </section>
            </a>
          </section>
          <section className="card">
            <a href="https://weather.mnfs.dev/" target="_blank">
              <section className="card_image">
                <img src="/img/weather.png" alt="" />
              </section>
              <section className="card_body">
                <p className="sub_title">Weather App</p>
                <p className="description">
                  A website to see the weather in several places
                </p>
              </section>
            </a>
          </section>
          <section className="card">
            <a href="https://quickchat.mnfs.dev/" target="_blank">
              <section className="card_image">
                <img src="/img/quickchat.png" alt="" />
              </section>
              <section className="card_body">
                <p className="sub_title">Quickchat</p>
                <p className="description">
                  A website to generate whatsapp numbers to url
                </p>
              </section>
            </a>
          </section>
        </section>
      </ContentLayout>
    </BaseLayout>
  );
};

export default Projects;
