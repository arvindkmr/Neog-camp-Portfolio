import React from 'react';
import EcomImg from '../images/Ecommerce.png';
import Todo from '.././images/ToDo.png';
import Banana from '.././images/Banana.png';
import Teams from '.././images/OOPS.png';
import Emoji from '.././images/Emoji.png';
import DarkLight from '.././images/DarkLight.png';
import Repl from '.././images/repl.png';
const Projects = () => {
  return (
    <div className="Project">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={EcomImg}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '400px' }}>
                <h5 className="card-title">Ecommerce Website</h5>
                <p>
                  Tech: React, React Router , ContentAPI(global State
                  Management), API Handling, Styled Components
                </p>
                <a
                  href="https://e-commerce-cv-project.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={Todo}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '280px' }}>
                <h5 className="card-title">Todo Application </h5>
                <p>Alert Acc. to Actions, Edit And delete, Local Storageg</p>
                <a
                  href="https://todo-neogcamp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={Banana}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '280px' }}>
                <h5 className="card-title"> Banana -Speak</h5>
                <p>Translation aap - Core javaScript Dom manipulation</p>
                <a
                  href="https://banana-neogcamp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={Teams}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '280px' }}>
                <h5 className="card-title"> Object Oriented Programing Project</h5>
                <p>
                  Pure JavaScript DOM manipulation Local Storage ES6 Arrow
                  functions
                </p>
                <a
                  href="https://js-oops-neog-camp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={Emoji}
                style={{height:"250px"}}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '280px' }}>
                <h5 className="card-title"> Emoji -Interpreter</h5>
                <a
                  href="https://emoji-interpet-neog-camp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={DarkLight}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '280px' }}>
                <h5 className="card-title"> Dark - Light Mode </h5>
                <p>React , Moment.js</p>
                <a
                  href="https://dark-light-mode-neog-camp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="card"
              style={{
                width: '400px',
                height: '400px',
                margin: '10px',
              }}
            >
              <img
                className="card-img-top"
                src={Repl}
                alt="Ecommerce website"
              />

              <div className="card-body" style={{ width: '280px' }}>
                <h5 className="card-title"> How well do you know me</h5>
                <p> ClI App - Repl.it Node.js</p>
                <a
                  href="https://replit.com/@ArvindBaloda/My-first-repl#index.js"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
