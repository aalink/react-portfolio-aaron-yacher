import GadgetGetter from "../assets/projects/GadgetGetter-512x512.png"
import WildlifeCensus from "../assets/projects/project01-wildlife-census.png"
import ECommerce from "../assets/projects/e-commerce-back-end-512x512.png"
import EmployeeManagementSystem from "../assets/projects/employee-management-system.gif"
import ReadmeGenerator from "../assets/projects/readme-screen-shot.png"
import TeamProfile from "../assets/projects/team-profile-generator-512x512.png"
import Password from "../assets/projects/03-password-generator-512x512.png"
import WeatherDashboard from "../assets/projects/06-weather-dashboard-512x512.png"
import CodeQuiz from "../assets/projects/04-code-quiz-512x512.png"
import DayPlanner from "../assets/projects/05-day-planner-512x512.png"

const Project = () => {
  return (

      <section id="portfolio" class="text-center">
        <h2 class="text-white bg-dark">Portfolio</h2>
        <div class="container-fluid col-10 bg-secondary p-2 pt-5 mb-2">
          <a href="https://gadget-getter.herokuapp.com/">
            <img
              class="col"
              src={GadgetGetter}
              alt="Assignment Thumbnail"
            />
          </a>
          <a href="https://gadget-getter.herokuapp.com/">
            <h3 class="m-2 text-white">GadgetGetter</h3>
          </a>
          <a
            class="btn btn-primary m-1"
            href="https://gadget-getter.herokuapp.com/"
          >
            Web App
          </a>
          <a
            class="btn btn-primary m-1"
            href="https://github.com/aalink/GadgetGetter"
          >
            Repository
          </a>

          <p class="mb-5 text-white">
            This group project is a school device management website with
            front-end and back-end support. The motivation for development is to
            make it easy for public school users (admins, teachers, and
            students) to borrow/retrieve/change/use/return devices and
            accessories.
          </p>
        </div>
        <div class="container-fluid col-10 bg-secondary p-2 pt-5 mb-2">
          <a href="https://mdschenck.github.io/Wildlife-Census/">
            <img
              class="col"
              src={WildlifeCensus}
              alt="Assignment Thumbnail"
            />
          </a>
          <a href="https://mdschenck.github.io/Wildlife-Census/">
            <h3 class="m-2 text-white">Wildlife Census</h3>
          </a>
          <a
            class="btn btn-primary m-1"
            href="https://mdschenck.github.io/Wildlife-Census/"
          >
            Web App
          </a>
          <a
            class="btn btn-primary m-1"
            href="https://github.com/aalink/Wildlife-Census"
          >
            Repository
          </a>

          <p class="mb-5 text-white">
            This group project is a census of endangered species. The team was
            comprised of 5 members, including myself. It uses APIs from
            Wikipedia, GBIF, and MapBox API.
          </p>
        </div>

        <div class="container col-10">
          <div class="row">
            <div class="col-sm bg-secondary p-3 m-3">
              <img
                class="col p-0"
                src={ECommerce}
                alt="E-Commerce Back End
            "
              />
              <h3 class="text-white">E-Commerce Back End</h3>

              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/e-commerce-back-end"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                Building the back end for an e-commerce site by modifying
                starter code. This includes configuring a working Express.js API
                to use Sequelize to interact with a MySQL database.
              </p>
            </div>
            <div class="col-sm bg-secondary p-3 m-3">
              <img
                class="col p-0"
                src={EmployeeManagementSystem}
                alt="Employee Management System
            "
              />
              <h3 class="text-white">Employee Management System</h3>

              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/employee-management-system"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                An application to manage a company's employee database, using
                Node.js, Inquirer, and MySQL.
              </p>
            </div>
          </div>
        </div>

        <div class="container col-10">
          <div class="row">
            <div class="col-sm bg-secondary p-3 m-3">
              <img
                class="col p-0"
                src={ReadmeGenerator}
                alt="Password Generator"
              />

              <h3 class="text-white">Professional README Generator</h3>
              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/professional-README-generator"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                A command-line application that dynamically generates a
                professional README.md file from a user's input using the
                Inquirer package.
              </p>
            </div>
            <div class="col-sm bg-secondary p-3 m-3">
              <img
                class="col p-0"
                src={TeamProfile}
                alt="Team Profile Generator
            "
              />
              <h3 class="text-white">Team Profile Generator</h3>

              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/team-profile-generator"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                A Node.js command-line application that takes in information
                about employees on a software engineering team, then generates
                an HTML webpage that displays summaries for each person.
              </p>
            </div>
          </div>
        </div>

        <div class="container col-10">
          <div class="row">
            <div class="col-sm bg-secondary p-3 m-3">
              <a href="https://aalink.github.io/03-password-generator/">
                <img
                  class="col p-0"
                  src={Password}
                  alt="Password Generator"
                />
              </a>
              <a href="https://aalink.github.io/03-password-generator/">
                <h3 class="text-white">Password Generator</h3>
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://aalink.github.io/03-password-generator/"
              >
                Web App
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/03-password-generator"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                This web application generates a random password based on 5
                criteria. It asks how many characters should be in the password,
                as well as whether or not the user would like to include upper
                case letters, lower case letters, numbers, and special
                characters.
              </p>
            </div>
            <div class="col-sm bg-secondary p-3 m-3">
              <a href="https://aalink.github.io/06-weather-dashboard/">
                <img
                  class="col p-0"
                  src={WeatherDashboard}
                  alt="Weather Dashboard"
                />
              </a>
              <a href="https://aalink.github.io/06-weather-dashboard/">
                <h3 class="text-white">Weather Dashboard</h3>
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://aalink.github.io/06-weather-dashboard/"
              >
                Web App
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/06-weather-dashboard"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                Search for the current weather in the city of your choosing. A
                five day forecast is also provided. It displays information like
                temperature, humidity, UV Index, and wind speed.
              </p>
            </div>
          </div>
        </div>

        <div class="container col-10">
          <div class="row">
            <div class="col-sm bg-secondary p-3 m-3">
              <a href="https://aalink.github.io/04-code-quiz/">
                <img
                  class="col p-0"
                  src={CodeQuiz}
                  alt="Password Generator"
                />
              </a>
              <a href="https://aalink.github.io/04-code-quiz/">
                <h3 class="text-white">Code Quiz</h3>
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://aalink.github.io/04-code-quiz/"
              >
                Web App
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/04-code-quiz"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                An interactive quiz application with multiple choice questions.
                When the player starts the quiz, a timer counts down from 60
                seconds. When the correct answer is selected, 1 point is added
                to the score. If the incorrect option is chosen, it subtracts 10
                seconds from the timer.
              </p>
            </div>
            <div class="col-sm bg-secondary p-3 m-3">
              <a href="https://aalink.github.io/05-day-planner/">
                <img
                  class="col p-0"
                  src={DayPlanner}
                  alt="Weather Dashboard"
                />
              </a>
              <a href="https://aalink.github.io/05-day-planner/">
                <h3 class="text-white">Day Planner</h3>
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://aalink.github.io/05-day-planner/"
              >
                Web App
              </a>
              <a
                class="btn btn-primary m-1"
                href="https://github.com/aalink/05-day-planner"
              >
                Repository
              </a>
              <p class="p-2 text-white">
                A day planner that lets the use save information for each hour.
                It automatically emphasizes each hour with a different color to
                show what time of the day it is. Grey indicates an hours earlier
                in the day, red indicates the current hour, and green indicates
                future hours.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Project;
