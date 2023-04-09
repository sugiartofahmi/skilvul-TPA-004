import { useState } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import ContentLayout from "../../layouts/ContentLayout";
const Blog = () => {
  document.title = "Blog | Fahmi Sugiarto";
  const [modal, setModal] = useState(false);

  return (
    <BaseLayout id="blog">
      <ContentLayout>
        <section>
          <h1 className="title">
            <span>Blog</span>
          </h1>
          <h1 className="description">
            You can read my writings, hoping to help you understand everything
            about web developers
          </h1>
        </section>
        <section id="open_modal" onClick={() => setModal(!modal)}>
          <p className="sub_title">React app with Vite</p>
          <p className="description">How to create a new React app with Vite</p>
        </section>
        {modal && (
          <section id="my_modal" className="modal">
            <section className="modal_content">
              <span className="close" onClick={() => setModal(!modal)}>
                &times;
              </span>
              <section className="content">
                <section>
                  <p className="sub_title">
                    How to create a new React app with Vite
                  </p>
                  <p className="sub_body">
                    Vite.js is a development tool that comes with a dev server
                    and is used for modern web applications. It offers a faster
                    and smoother workflow in terms of development. It has two
                    major parts:
                  </p>

                  <ul className="sub_content">
                    <li>
                      A dev server serves the source files over native ES
                      modules, with build-in features and fast Hot Module
                      Replacement (HMR) for updating modules during the
                      execution of the application. When changes are made to the
                      source code of an application, only those changes are
                      updated, without the need to reload the entire
                      application. This helps speed up the development time.
                    </li>
                    <li>
                      A build command enables us to bundle our code with Rollup
                      and offers highly optimized static assets for production.
                    </li>
                  </ul>
                </section>
                <section>
                  <p className="sub_title">How to use</p>
                  <ol className="sub_content">
                    <li>yarn create vite</li>
                    <li>
                      Name the project to be created, example "learn-react"
                    </li>
                    <li>
                      Enter into the project folder that was created, with the
                      command, cd learn-react
                    </li>
                    <li>Install dependencies, with command yarn</li>
                    <li>
                      Run the dev command below to start the development server,
                      with command yarn dev
                    </li>
                  </ol>
                </section>
              </section>
            </section>
          </section>
        )}
      </ContentLayout>
    </BaseLayout>
  );
};
export default Blog;
