import React from "react";
const Card = ({ arrObj }) => {
  return (
    <div>
      <div className="row row-cols-md-3 g-5" style={{background:"blue", justifyItems:"center"}}>
        {arrObj.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="col">
                  <div className="card h-100">
                    {/*<img src="..." class="card-img-top" alt="...">*/}
                    <div className="card-body">
                      <h5 className="card-title text-muted text-uppercase text-center">
                        {item.plan}
                      </h5>
                      <h5>
                        <h3 className="card-price text-center">
                          ${item.price}
                          <span className="period">/month</span>
                        </h3>
                      </h5>

                      <hr />
                      <ul className="fa-ul">
                        <li className={item.isUser ? "" : "text-muted"}>
                          <span className="fa-li">
                            <i
                              className={
                                item.isUser ? "fas fa-check" : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.plan !== "FREE" ? (
                            <p>{item.user}</p>
                          ) : (
                            item.user
                          )}
                        </li>{" "}
                        <br />
                        <li className={item.isStorage ? "" : "text-muted"}>
                          <span className="fa-li">
                            <i
                              className={
                                item.isStorage ? "fas fa-check" : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.storage}
                        </li>{" "}
                        <br />
                        <li
                          className={item.isPublicProjects ? "" : "text-muted"}
                        >
                          <span className="fa-li">
                            <i
                              className={
                                item.isPublicProjects
                                  ? "fas fa-check"
                                  : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.publicProjects}
                        </li>{" "}
                        <br />
                        <li
                          className={item.isCommunityAccess ? "" : "text-muted"}
                        >
                          <span className="fa-li">
                            <i
                              className={
                                item.isCommunityAccess
                                  ? "fas fa-check"
                                  : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.communityAccess}
                        </li>{" "}
                        <br />
                        <li
                          className={item.isPrivateProjects ? "" : "text-muted"}
                        >
                          <span className="fa-li">
                            <i
                              className={
                                item.isPrivateProjects
                                  ? "fas fa-check"
                                  : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.privateProjects}
                        </li>{" "}
                        <br />
                        <li className={item.isPhoneSupport ? "" : "text-muted"}>
                          <span className="fa-li">
                            <i
                              className={
                                item.isPhoneSupport
                                  ? "fas fa-check"
                                  : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.phoneSupport}
                        </li>{" "}
                        <br />
                        <li className={item.isSubDomain ? "" : "text-muted"}>
                          <span className="fa-li">
                            <i
                              className={
                                item.isSubDomain
                                  ? "fas fa-check"
                                  : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.plan === "PRO" ? (
                            <>{item.subDomain}</>
                          ) : (
                            item.subDomain
                          )}
                        </li>
                        {""}
                        <br />
                        <li className={item.isReports ? "" : "text-muted"}>
                          <span className="fa-li">
                            <i
                              className={
                                item.isReports ? "fas fa-check" : "fas fa-times"
                              }
                            ></i>
                          </span>
                          {item.reports}
                        </li>
                      </ul>
                      <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">
                          Button
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
