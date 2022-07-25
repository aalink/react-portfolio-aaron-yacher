import resume from "../assets/Aaron-Yacher-Resume.pdf"

const Navigation = () => {
  return (
    <nav class="p-0 navbar navbar-expand-sm navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item border m-1">
            <a class="nav-link text-white" href="#about-me">
              About Me <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item border m-1">
            <a class="nav-link text-white" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item border m-1">
            <a class="nav-link text-white" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item border m-1">
            <a
              class="nav-link text-white"
              href={resume}
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
