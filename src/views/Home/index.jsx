import BaseLayout from "../../layouts/BaseLayout";
const Home = () => {
  document.title = "Home | Fahmi Sugiarto";
  return (
    <BaseLayout id="home">
      <h1 id="greeting">Hello world, i am</h1>
      <h1>
        MOHAMMAD NUR<span>FAHMI</span> SUGIARTO
      </h1>
      <h1 className="about">
        Informatics engineering student at Nusantara Islamic University, has an
        interest in website development, especially in front end web developer
      </h1>
      <section className="resume">
        <a href="https://github.com/sugiartofahmi" target="_blank">
          <img className="resume_icon" src="/icon/github.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-nurfahmi-sugiarto"
          target="_blank"
        >
          <img className="resume_icon" src="/icon/linkedin.png" alt="" />
        </a>
        <a href="https://www.instagram.com/mnfs.dev/" target="_blank">
          <img className="resume_icon" src="/icon/instagram.png" alt="" />
        </a>
      </section>
    </BaseLayout>
  );
};
export default Home;
