import BaseLayout from "../../layouts/BaseLayout";
import ContentLayout from "../../layouts/ContentLayout";
const About = () => {
  return (
    <BaseLayout id="about">
      <ContentLayout>
        <section>
          <h1 className="title">
            <span>About</span>
          </h1>
          <h1 className="description">Here I tell a little about me</h1>
        </section>
        <section>
          <p className="sub_title">
            <span> This is me </span>
          </p>
          <p className="sub_body">
            I am a student pursuing a degree in technology. I have experience in
            web programming, especially in front-end development using HTML, CSS
            and JavaScript. I also have skills in using frameworks like React
            and Vue. I am very interested in doing an internship in front-end
            web development and am confident that I can add positive value to
            the company.
          </p>
        </section>
        <section>
          <p className="sub_title">
            <span>Skills </span>
          </p>
          <section id="skills">
            <img className="skill_icon" src="/icon/html.svg" />
            <img className="skill_icon" src="/icon/css.svg" />
            <img className="skill_icon" src="/icon/js.svg" />
            <img className="skill_icon" src="/icon/react.svg" />
            <img className="skill_icon" src="/icon/tailwind.svg" />
          </section>
        </section>
      </ContentLayout>
    </BaseLayout>
  );
};

export default About;
