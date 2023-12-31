import React, { useEffect } from "react";
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

import photo22 from "./assets/Mamia-Karchava.jpg";
import photo23 from "./assets/Davit-Pavliashvili.jpg";
import photo24 from "./assets/Elmira-Dashtiani.jpg";
import photo25 from "./assets/Babeq-Mohadami.jpg";
import photo26 from "./assets/Lika-Shengelaia.jpg";
import photo27 from "./assets/Mariam-Tskvitaria.jpg";
import photo28 from "./assets/Katie-Margiani.jpg";
import photo29 from "./assets/Sandro-Dzmanashvili.jpg";
import photo30 from "./assets/Mari-Jishkariani.jpg";
import photo31 from "./assets/Tako-Bukhaidze.jpeg";
import photo32 from "./assets/TeaRazmadze.jpg";
import photo33 from "./assets/BekaBerulava.jpg";
import photo34 from "./assets/BekaKelenjeridze.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import "./structure.css";
const { Meta } = Card;

function Structureen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
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
      img: photo17,
      name: "Zurab Alkhanishvili",
      dsc: "Former President (2009-2014)",
    },
    {
      img: photo10,
      name: "Nino Gvasalia ",
      dsc: "Former President (2014-2018)",
    },
    {
      img: photo,
      name: "Landa Lursmanashvili",
      dsc: "Former President (2018-2021)",
    },

    {
      img: photo20,
      name: "Gvantsa Tabaghua",
      dsc: "Former President-Elect",
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
    {
      img: photo32,
      name: "Tea Razmadze",
      dsc: "Head of Kakheti RO",
    },
  ];
  const info5 = [
    {
      img: photo3,
      name: "Beka Osepashvili",
      dsc: "Head of young leaders department",
    },
    {
      img: photo9,
      name: " Nino Alkhanishvili",
      dsc: "Coordinator of the young leaders department",
    },
  ];
  const info6 = [
    {
      img: photo22,
      name: "Mamia Karchava",
      dsc: "Member",
    },
    {
      img: photo23,
      name: "Davit Pavliashvili",
      dsc: "Member",
    },
    {
      img: photo24,
      name: "Elmira Dashtiani",
      dsc: "Member",
    },
    {
      img: photo25,
      name: "Babeq Mohadami",
      dsc: "Member",
    },
    {
      img: photo26,
      name: "Lika Shengelaia",
      dsc: "Member",
    },
    {
      img: photo27,
      name: "Mariam Tskvitaria",
      dsc: "Member",
    },
    {
      img: photo28,
      name: "Katie Margiani",
      dsc: "Member",
    },
    {
      img: photo29,
      name: "Sandro Dzmanashvil",
      dsc: "Member",
    },
    {
      img: photo30,
      name: "Mari Jishkariani",
      dsc: "Member",
    },
    {
      img: photo31,
      name: "Tako Bukhaidze",
      dsc: "Member",
    },
    {
      img: photo33,
      name: "Beka Berulava",
      dsc: "Member",
    },
    {
      img: photo34,
      name: "Beka Kelenjeridze",
      dsc: "Member",
    },
  ];

  return (
    <>
      <h1 className="structuret">Radix Team</h1>

      <div className="structure">
        {info1.map((info, i) => {
          return (
            <>
              <div className="card" data-aos="fade-right">
                <Card
                  style={{
                    width: 300,
                    border: "none",
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      style={{ borderRadius: "10px" }}
                      src={info.img}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>

      <h1 className="structureti">Board members</h1>

      <div className="structure" data-aos="fade-right">
        {info3.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="structureti">
        Representatives <p>of region</p>
      </h1>

      <div className="structure" data-aos="fade-right">
        {info4.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="structureti">
        Young Leaders <p>Department </p>{" "}
      </h1>

      <div
        className="structure"
        data-aos="fade-right"
        style={{ paddingBottom: "0" }}
      >
        {info5.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <div
        className="structure"
        data-aos="fade-right"
        style={{ marginTop: "0" }}
      >
        {info6.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",
                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="structureti">Advisory Council</h1>

      <div className="structure" data-aos="fade-right">
        {info2.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

function Structure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
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
      name: "ნინო ნებიერიძე",
      dsc: "პრეზიდენტი",
    },
    {
      img: photo14,
      name: "სოფიო გვაზავა ",
      dsc: "ვიცე პრეზიდენტი",
    },
    {
      img: photo8,
      name: "მარიამ ქურციკიძე",
      dsc: "ვიცე პრეზიდენტი",
    },
  ];
  const info2 = [
    {
      img: photo17,
      name: "ზურაბ ალხანიშვილი",
      dsc: "ყოფილი პრეზიდენტი (2009-2014)",
    },
    {
      img: photo10,
      name: "ნინო გვასალია",
      dsc: "ყოფილი პრეზიდენტი (2014-2018)",
    },
    {
      img: photo,
      name: "ლანდა ლურსმანაშვილი",
      dsc: "ყოფილი პრეზიდენტი (2018-2021)",
    },

    {
      img: photo20,
      name: "გვანცა ტაბაღუა",
      dsc: "ყოფილი არჩეული პრეზიდენტი",
    },
  ];
  const info3 = [
    {
      img: photo4,
      name: "გიორგი აფხაძე",
      dsc: "",
    },
    {
      img: photo5,
      name: "ირმა ბაკურაძე",
      dsc: "",
    },
    {
      img: photo6,
      name: "ლიკა გოგილაშვილი",
      dsc: "",
    },
    {
      img: photo7,
      name: "მარია მუშკუდიანი",
      dsc: "",
    },
    {
      img: photo2,
      name: "ანკა მაჩაიძე",
      dsc: "",
    },
    {
      img: photo15,
      name: "თამარ არზუმანოვა",
      dsc: "",
    },
    {
      img: photo16,
      name: "თეა ნაცვლიშვილი",
      dsc: "",
    },
    {
      img: photo13,
      name: "სალომე ხეცურიანი",
      dsc: "",
    },
  ];
  const info4 = [
    {
      img: photo19,
      name: "თამარ ჩიხლაძე",
      dsc: "სამეგრელოს რეგიონული ორგანიზაციის წარმომადგენელი",
    },
    {
      img: photo18,
      name: "ლევან მორჩაძე",
      dsc: "იმერეთის რეგიონული ორგანიზაციის წარმომადგენელი",
    },
    {
      img: photo21,
      name: "ლაშა ჩანტლაძე",
      dsc: "გურიის რეგიონული ორგანიზაციის წარმომადგენელი",
    },
    {
      img: photo32,
      name: "თეა რაზმაძე",
      dsc: "კახეთის რეგიონული ორგანიზაციის წარმომადგენელი",
    },
  ];
  const info5 = [
    {
      img: photo3,
      name: "ბექა ოსეფაშვილი",
      dsc: "ახალგაზრდული დეპარტამენტის ხელმძღვანელი",
    },
    {
      img: photo9,
      name: "ნინო ალხანიშვილი",
      dsc: "ახალგაზრდული დეპარტამენტის კოორდინატორი",
    },
  ];
  const info6 = [
    {
      img: photo22,
      name: "მამია ქარჩავა",
      dsc: "წევრი",
    },
    {
      img: photo23,
      name: "დავით პავლიაშვილი",
      dsc: "წევრი",
    },
    {
      img: photo24,
      name: "ელმირა დაშთიანი",
      dsc: "წევრი",
    },
    {
      img: photo25,
      name: "ბაბექ მოჰადამი",
      dsc: "წევრი",
    },
    {
      img: photo26,
      name: "ლიკა შენგელაია",
      dsc: "წევრი",
    },
    {
      img: photo27,
      name: "მარიამ ცქვიტარია",
      dsc: "წევრი",
    },
    {
      img: photo28,
      name: "ქეთი მარღიანი",
      dsc: "წევრი",
    },
    {
      img: photo29,
      name: "სანდრო ძმანაშვილი",
      dsc: "წევრი",
    },
    {
      img: photo30,
      name: "მარი ჯიშკარიანი",
      dsc: "წევრი",
    },
    {
      img: photo31,
      name: "თაკო ბუხაიძე",
      dsc: "წევრი",
    },
    {
      img: photo33,
      name: "ბექა ბერულავა",
      dsc: "წევრი",
    },
    {
      img: photo34,
      name: "ბექა კელენჯერიძე",
      dsc: "წევრი",
    },
  ];
  return (
    <>
      <h1 className="structuret">რადიქსის ჯგუფი</h1>

      <div className="structure" data-aos="fade-right">
        {info1.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    width: 300,
                    border: "none",
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      style={{ borderRadius: "10px" }}
                      src={info.img}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>

      <h1 className="structureti">გამგეობის წევრები</h1>

      <div className="structure" data-aos="fade-right">
        {info3.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="structureti">რეგიონის წარმომადგენლები</h1>

      <div className="structure" data-aos="fade-right">
        {info4.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="structureti">ახალგაზრდა ლიდერთა დეპარტამენტი</h1>

      <div
        className="structure"
        data-aos="fade-right"
        style={{ paddingBottom: "0" }}
      >
        {info5.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <div
        className="structure"
        data-aos="fade-right"
        style={{ marginTop: "0" }}
      >
        {info6.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",
                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="structureti">მრჩეველთა საბჭო</h1>

      <div className="structure" data-aos="fade-right">
        {info2.map((info, i) => {
          return (
            <>
              <div className="card">
                <Card
                  style={{
                    border: "none",

                    width: 300,
                    margin: "5vh",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={info.img}
                      style={{ borderRadius: "10px" }}
                    />
                  }
                >
                  <Meta title={info.name} description={info.dsc} />
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export { Structure, Structureen };
