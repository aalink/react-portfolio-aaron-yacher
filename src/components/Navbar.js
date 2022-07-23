const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
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
          <li class="nav-item">
            <a class="nav-link text-white" href="#about-me">
              About Me <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white"
              href="assets/documents/Aaron-Yacher-Resume.pdf"
              download
            >
              Resume
            </a>
          </li>

          <li>

          </li>
          <li>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
