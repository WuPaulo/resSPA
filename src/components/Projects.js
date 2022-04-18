import React from "react";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <h3>Smarter Snack</h3>
        <p>
          Using the Nutritionix API , we allow the user to input in a snack of
          their choice and generate a healthier option based on the sugar
          content.
        </p>
        <a
          className="projectButton"
          href="https://a-smarter-snack.netlify.app/"
        >
          <button>Live</button>
        </a>
        <a
          className="projectButton"
          href="https://github.com/WuPaulo/aSmarterSnack"
        >
          <button>Github</button>
        </a>
      </div>
      <div>
        <h3>Road Radar</h3>
        <p>
          A web appication that incoroprates the 511 Ontario API, in order to
          allow the user to search for rest areas as well as live road cameras
          according to certain locations withint Ontario.
        </p>
        <a
          className="projectButton"
          href="https://christie-tran-paulo-wu-project-three.netlify.app"
        >
          <button>Live</button>
        </a>
        <a
          className="projectButton"
          href="https://github.com/WuPaulo/christie-tran-paulo-wu-project-three"
        >
          <button>Github</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
