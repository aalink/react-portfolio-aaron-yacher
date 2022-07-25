import portrait from "../assets/aaron-yacher-portrait.jpg";

const About = () => {
  return (
    // <p>About Me</p>
    // <a href="https://www.linkedin.com/in/aaron-yacher/">LinkedIn</a>
    <div>
      <img class="w-50" src={portrait} alt="Aaron Yacher" />
      <p>
        Hello, I'm Aaron Yacher, and thank you for visiting my portfolio page.
      </p>
      <p>
        I'm currently a student of the Georgia Tech Coding Boot Camp, which you
        can learn more about at the following link:
        <a href="https://bootcamp.pe.gatech.edu/coding/">
          Georgia Tech Coding Boot Camp</a>
      </p>
      <p>
        I am also a Technical Support Engineer at VMware. Prior to that, I was a
        Mac technician for Apple with 10 years of experience troubleshooting
        hardware and software. During my time at Apple, I participated in two
        internships with the quality assurance teams in the software engineering
        organization.
      </p>
    </div>
  );
};

export default About;


