import React from "react";
import { useParams } from "react-router-dom";
import { info, info1, infoen, info1en } from "./data";
import { useEffect } from "react";
import "./speakerinfo.css";
export const Speakerdetail = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {info
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="toyinfo">
                <div>
                  <img
                    className="toyp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="toyinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr /> <p>{product.desc}</p>
                  <hr />
                </div>
              </div>
              <div className="toydesc">
                <hr />
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
                <p>{product.desc3}</p>
                <hr />
              </div>
            </div>
          );
        })}{" "}
      {info1
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="toyinfo">
                <div>
                  <img
                    className="toyp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="toyinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr /> <p>{product.desc}</p>
                  <hr />
                </div>
              </div>
              <div className="toydesc">
                <hr />
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
                <p>{product.desc3}</p>
                <hr />
              </div>
            </div>
          );
        })}
    </>
  );
};
export const Speakerdetailen = () => {
  const { link } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {infoen
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="toyinfo">
                <div>
                  <img
                    className="toyp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="toyinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr /> <p>{product.desc}</p>
                  <hr />
                </div>
              </div>
              <div className="toydesc">
                <hr />
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
                <p>{product.desc3}</p>
                <hr />
              </div>
            </div>
          );
        })}{" "}
      {info1en
        .filter((product) => product.link === link)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="toyinfo">
                <div>
                  <img
                    className="toyp"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="toyinfo1">
                  <h1 className="">{product.title}</h1>
                  <hr /> <p>{product.desc}</p>
                  <hr />
                </div>
              </div>
              <div className="toydesc">
                <hr />
                <p>{product.desc1}</p>
                <p>{product.desc2}</p>
                <p>{product.desc3}</p>
                <hr />
              </div>
            </div>
          );
        })}
    </>
  );
};
