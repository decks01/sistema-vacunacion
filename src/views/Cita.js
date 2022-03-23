import React from "react";
import HomeChildren from "./Home";
import ReactDOM from "react-dom";
import Jalisco from "../styles/img/jalisco.png";
import Person from "../styles/img/person.png";
import Icon from "../styles/img/img_left.svg";
import IcoTel from "../styles/img/ico_tel.svg";
import Puntos from "../styles/img/puntos.svg";

function Cita() {
  return (
    <HomeChildren>
      <div className="container alig-center">
        <div className="contenedor">
          <div className="">
            <p className="tittle-cont">
              Campañas activas de vacunación contra Covid-19 (ZMG)
            </p>

            {/* <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Card subtitle
                        </h6>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="card-link">
                          Card link
                        </a>
                        <a href="#" className="card-link">
                          Another link
                        </a>
                      </div>
                    </div> */}

            <div className="contenido">
              <div id="inam" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6 col-lg-6">
                          <div className="card">
                            <div className="card-body">
                              <img src={Person} />
                              <p className="card-txt">Personas de 18 y más</p>
                              <div className="contentt">
                                <p className="number">1</p>
                                <p className="card-txt1"> Primera Dosis</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                          <div className="card">
                            <div className="card-body">
                              <img src={Person} />
                              <p className="card-txt">Personas de 18 y más</p>
                              <div className="contentt">
                                <p className="number">2</p>
                                <p className="card-txt1"> Segunda Dosis</p>
                              </div>
                              <p className="card-txt2"> AZTRAZENECA</p>
                              <p className="card-txt3">
                                Primera Dosis aplicada antes del 15 de agosto
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#inam"
                  className="carousel-control-prev"
                  data-slide="prev"
                >
                  <span className="flecha-left"></span>
                </a>
                <a
                  href="#inam"
                  className="carousel-control-next"
                  data-slide="next"
                >
                  <span className="flecha"></span>
                </a>
              </div>
              <div className="contenedor-2">
                <hr />
                <p className="comenzar">Comenzar Ahora</p>
                <div className="col-8 position-left">
                  <p className="ingress-curp">
                    Ingresa tu CURP para agendar una cita o para{" "}
                    <a className="underline-blue">cancelar una cita </a>ya
                    registrada.
                  </p>
                </div>
                <div className="row spacing">
                  <div className="col-8">
                    <div className="form-group ">
                      <i className="icon-user form-control-feedback"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Introduce tu CURP"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="button" className="btn btn-primary btn-class">
                      Continuar
                    </button>
                  </div>
                </div>
                <div className="spacing">
                  <p className="curp-txt1">Si no conoces tu CURP </p>{" "}
                  <a className="consulta-txt">consulta aquí</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid espacio-blanco">
        <img className="con-left" src={Icon} />
        <div className="border-tel">
          <img src={IcoTel} />
          <p className="tel"> 33 3823 3220</p>  
                
        </div>
        
      </div>
      <div className="container-fluid bgr-blue">
        <img className="icon-puntos" src={Puntos} />
        <img className="con-right" src={Icon} /> 
      </div>
    </HomeChildren>
  );
}

export default Cita;

if (document.getElementById("Cita")) {
  ReactDOM.render(<Cita />, document.getElementById("Cita"));
}
