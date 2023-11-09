import React from "react";
import { Card } from "antd";
import photo from "./assets/landa.jpg";
import photo1 from "./assets/Aliona-Tsitsishvili.jpg";
import photo2 from "./assets/Anka-Machaidze.jpg";
import photo3 from "./assets/Beka-Osepashvili.jpg";
import photo4 from "./assets/Giorgi-Apkhadze.jpg";
import photo5 from "./assets/Irma-Bakuradze.jpg";
import photo6 from "./assets/Lika-Gogilashvili.jpg";
import photo7 from "./assets/Maria-Mushkudiani.jpg";
import photo8 from "./assets/Mariam-Kurtsikidze.jpg";
import photo9 from "./assets/Nino-Alkhanishvili.jpg";
import photo10 from "./assets/Nino-Gvasalia.jpg";
import photo11 from "./assets/Nino-Nebieridze.jpg";
import photo12 from "./assets/Piruz-Tamazashvili.jpg";
import photo13 from "./assets/Salome-Khetsuriani.jpg";
import photo14 from "./assets/Sophio-Gvazava.jpg";
import photo15 from "./assets/Tamar-Arzumanova.jpg";
import photo16 from "./assets/Tea-Natsvlishvili.jpg";
import photo17 from "./assets/Zurab-Alkhanishvili-1.jpeg";
import photo18 from "./assets/levan-morchadze.jpg";
import photo19 from "./assets/tamar-chikhladze.jpg";
import photo20 from "./assets/Gvantsa-Tabaghua.jpg";
import photo21 from "./assets/lasha-chantladze.jpg";

import "./structure.css";
const { Meta } = Card;

function Structure() {
  const info = [
    {
      img: photo,
      name: "Landa Lursmanashvili",
      dsc: "Counselor",
    },
    {
      img: photo1,
      name: "Aliona Tsitsishvili",
      dsc: "president",
    },
    {
      img: photo2,
      name: "Anka Machaidze",
      dsc: "",
    },
    {
      img: photo3,
      name: "Beka Osepashvili",
      dsc: "Head of young leaders department",
    },
    {
      img: photo4,
      name: "Giorgi Apkhadze ",
      dsc: "",
    },
    {
      img: photo5,
      name: " Irma Bakuradze",
      dsc: "",
    },
    {
      img: photo6,
      name: " Lika Gogilashvili",
      dsc: "",
    },
    {
      img: photo7,
      name: " Maria Mushkudiani",
      dsc: "",
    },
    {
      img: photo8,
      name: "Mariam Kurtsikidze ",
      dsc: "Vice President",
    },
    {
      img: photo9,
      name: " Nino Alkhanishvili",
      dsc: "president",
    },
    {
      img: photo10,
      name: "Nino Gvasalia ",
      dsc: "Counselor",
    },
    {
      img: photo11,
      name: " Nino Nebieridze",
      dsc: "President",
    },
    {
      img: photo12,
      name: "Piruz Tamazashvili ",
      dsc: "president",
    },
    {
      img: photo13,
      name: "Salome Khetsuriani ",
      dsc: "",
    },
    {
      img: photo14,
      name: "Sophio Gvazava ",
      dsc: "Vice President",
    },
    {
      img: photo15,
      name: "Tamar Arzumanova ",
      dsc: "",
    },
    {
      img: photo16,
      name: " Tea Natsvlishvili",
      dsc: "",
    },
    {
      img: photo17,
      name: "Zurab Alkhanishvili",
      dsc: "Counselor",
    },
    {
      img: photo18,
      name: "levan morchadze ",
      dsc: "Head of Imereti RO",
    },
    {
      img: photo19,
      name: "tamar chikhladze ",
      dsc: "Head of Samegrelo RO",
    },
    {
      img: photo20,
      name: "Gvantsa Tabaghua",
      dsc: "Counselor",
    },
    {
      img: photo21,
      name: "Lasha Chantladze",
      dsc: "Head of Guria RO",
    },
  ];
  const info1 = [
    {
      img: photo11,
      name: " Nino Nebieridze",
      dsc: "President",
    },
    {
      img: photo14,
      name: "Sophio Gvazava ",
      dsc: "Vice President",
    },
    {
      img: photo8,
      name: "Mariam Kurtsikidze ",
      dsc: "Vice President",
    },
  ];
  const info2 = [
    {
      img: photo,
      name: "Landa Lursmanashvili",
      dsc: "Counselor",
    },
    {
      img: photo17,
      name: "Zurab Alkhanishvili",
      dsc: "Counselor",
    },
    {
      img: photo20,
      name: "Gvantsa-Tabaghua",
      dsc: "Counselor",
    },
    {
      img: photo10,
      name: "Nino Gvasalia ",
      dsc: "Counselor",
    },
  ];
  const info3 = [
    {
      img: photo4,
      name: "Giorgi Apkhadze ",
      dsc: "",
    },
    {
      img: photo5,
      name: " Irma Bakuradze",
      dsc: "",
    },
    {
      img: photo6,
      name: " Lika Gogilashvili",
      dsc: "",
    },
    {
      img: photo7,
      name: " Maria Mushkudiani",
      dsc: "",
    },
    {
      img: photo2,
      name: "Anka Machaidze",
      dsc: "",
    },
    {
      img: photo15,
      name: "Tamar Arzumanova ",
      dsc: "",
    },
    {
      img: photo16,
      name: " Tea Natsvlishvili",
      dsc: "",
    },
    {
      img: photo13,
      name: "Salome Khetsuriani ",
      dsc: "",
    },
  ];
  const info4 = [
    {
      img: photo19,
      name: "Tamar Chikhladze ",
      dsc: "Head of Samegrelo RO",
    },
    {
      img: photo18,
      name: "Levan Morchadze ",
      dsc: "Head of Imereti RO",
    },
    {
      img: photo21,
      name: "Lasha Chantladze",
      dsc: "Head of Guria RO",
    },
  ];
  const info5 = [
    {
      img: photo3,
      name: "Beka Osepashvili",
      dsc: "Head of young leaders department",
    },
  ];
  return (
    <>
      <h1 className="structuret">Structure</h1>

      <div className="structure">
        {info1.map((info, i) => {
          return (
            <>
              <Card
                style={{
                  width: 300,
                  margin: "5vh",
                }}
                cover={<img alt="example" src={info.img} />}
              >
                <Meta title={info.name} description={info.dsc} />
              </Card>
            </>
          );
        })}
      </div>
      <h1 style={{ paddingTop: "1%" }} className="structuret">
        Advisory Board
      </h1>

      <div className="structure">
        {info2.map((info, i) => {
          return (
            <>
              <Card
                style={{
                  width: 300,
                  margin: "5vh",
                }}
                cover={<img alt="example" src={info.img} />}
              >
                <Meta title={info.name} description={info.dsc} />
              </Card>
            </>
          );
        })}
      </div>
      <h1 style={{ paddingTop: "1%" }} className="structuret">
        Board members
      </h1>

      <div className="structure">
        {info3.map((info, i) => {
          return (
            <>
              <Card
                style={{
                  width: 300,
                  margin: "5vh",
                }}
                cover={<img alt="example" src={info.img} />}
              >
                <Meta title={info.name} description={info.dsc} />
              </Card>
            </>
          );
        })}
      </div>
      <h1 style={{ paddingTop: "1%" }} className="structuret">
        representatives of the region
      </h1>

      <div className="structure">
        {info4.map((info, i) => {
          return (
            <>
              <Card
                style={{
                  width: 300,
                  margin: "5vh",
                }}
                cover={<img alt="example" src={info.img} />}
              >
                <Meta title={info.name} description={info.dsc} />
              </Card>
            </>
          );
        })}
      </div>
      <h1 style={{ paddingTop: "1%" }} className="structuret">
        Members of the youth department
      </h1>

      <div className="structure">
        {info5.map((info, i) => {
          return (
            <>
              <Card
                style={{
                  width: 300,
                  margin: "5vh",
                }}
                cover={<img alt="example" src={info.img} />}
              >
                <Meta title={info.name} description={info.dsc} />
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Structure;
