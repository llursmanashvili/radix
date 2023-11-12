import "./about.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="abouthead">
      <div className="aboutbody" data-aos="zoom-in">
        <h1
          style={{ marginBottom: "20px", fontWeight: "200", fontSize: "30px" }}
        >
          მიზნები
        </h1>
        <h3
          className="h3"
          style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}
        >
          სამეცნიერო-კვლევით ცენტრ RADIX-ის მიზანია საზოგადოების
          ინფორმირებულობის დონის ამაღლება მედიცინის მეცნიერებების უახლესი
          მიღწევების შესახებ; ახალგაზრდა მეცნიერების საგანმანათლებლო, სამეცნიერო
          და პრაქტიკული მუშაობის წახალისება, ხელშეწყობა, რეალიზება და
          პოპულარიზაცია რეგიონულ, რესპუბლიკის და საერთაშორისო დონეზე; ახალგაზრდა
          მეცნიერების საერთაშორისო ინტეგრირების ხელშეწყობა; ეფექტური
          ახალგაზრდული პოლიტიკის შემუშავება და კომპეტენციის ამაღლება
          არაფორმალური განათლების მიდგომების დანერგვისა და პოპულარიზაციის
          საშუალებით. პროცესში მომავალი მეცნიერების მაქსიმალური ჩართვით, როგორც
          ორგანიზების და მართვის, ასევე კვლევითი საქმიანობის წახალისების
          თვალსაზრისით;
        </h3>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "200",
            fontSize: "30px",
          }}
        >
          საქმიანობის ფორმები
        </h1>
        <h3 style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}>
          სამეცნიერო-კვლევითი ცენტრი RADIX: ეწევა საგანმათებლო – შემეცნებით
          საქმიანობას სტუდენტების, ასევე სხვა ახალგაზრდა მეცნიერების პროფესიულ
          დაოსტატებისა და კვალიფიკაციის ამაღლებისათვის; ეწევა სამეცნიერო და
          კვლევით საქმიანობას; თანამშრომლობს ადგილობრივ და საერთაშორისო
          ორგანიზაციებთან, მათ შორის პროფესიულ გაერთიანებებთან; ქმნის
          ორგანიზაციულ სტრუქტურულ ერთეულს საქართველოს მთელ ტერიტორიაზე;
          თანამშრომლობს კერძო და სახელმწიფო სამედიცინო დაწესებულებებთან;
          ორგანიზაციის უმაღლესი ხელმძღვანელი ორგანოა ორგანიზაციის წევრთა საერთო
          კრება. ორგანიზაციის ხელმძღვანელი პირი არის პრეზიდენტი. წევრთა საერთო
          კრების გადაწყვეტილებით 2009 წლის 26 აგვისტოდან ორგანიზაციის
          პრეზიდენტია – ზურაბ ალხანიშვილი. გამგეობის წევრები – რადიქსის I
          ვიცე-პრეზიდენტი ლანდა ლურსმანაშვილი და II ვიცე-პრეზიდენტი – ნინო
          გვასალია. 2011 წლიდან, ორგანიზაციის გენერალური მდივნის თანამდებობას
          გვანცა ტაბაღუა უძღვება.
        </h3>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "200",
            fontSize: "30px",
          }}
        >
          მიმართულებები
        </h1>
        <h3 style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}>
          რადიქსი მუშაობს სამი მიმართულებით – ბავშვებთან, სტუდენტებთან და
          მეცნიერებთან/პრაქტიკოსებთან. ხორციელდება საბავშვო და სოციალური
          პროგრამები, რომელიც ჯანსაღი სამოქალაქო საზოგადოების ჩამოყალიბებას
          ემსახურება; არაფორმალური განათლების პროექტების ხელშეწყობით, ხდება
          სტუდენტების სამეცნიერო მუშაობის წახალისება. ზრუნავს მეცნიერთა და
          პრაქტიკოსთა უწყვეტი განათლების პროგრამების ხელშეწყობასა და
          განხორციელებაზე.
        </h3>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "200",
            fontSize: "30px",
          }}
        >
          წევრობა
        </h1>
        <h3 style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}>
          ორგანიზაციის წევრი შეიძლება გახდეს ნებისმიერი ადამიანი, რომელიც
          იზიარებს ორგანიზაციის მიზნებს. პირი, რომელიც აქტიურად უჭერს მხარს
          ორგანიზაციის საქმიანობას, ორგანიზაციის დამფუძნებელთა გადაწყვეტილებით,
          შეიძლება მიღებულ იქნას ორგანიზაციის საპატიო წევრად. RADIX – ის პირველი
          საპატიო წევრი, 2009 წლის 26 ნოემბრიდან, გახლავთ პროფესორი, მედიცინის
          მეცნიერებათა დოქტორი, საქართველოს სტომატოლოგთა ასოციაციის
          ვიცე-პრეზიდენტი ქეთევან გოგილაშვილი.
        </h3>
      </div>
    </div>
  );
}
function Abouten() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="abouthead">
      <div className="aboutbody" data-aos="zoom-in">
        <h1
          style={{ marginBottom: "20px", fontWeight: "200", fontSize: "30px" }}
        >
          Who We Are
        </h1>
        <h3
          className="h3"
          style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}
        >
          The goal of Radix is improvement of the level of knowledge in society
          about the latest achievements of medicine, Stimulation, supporting,
          realization and popularization of medical and practical work of young
          scientists in the frames of regional, national and international
          level, supporting the integration of young scientists worldwide.
          Obtaining effective practice for youth and improving the competence
          with popularization and establishing new approach of non formal
          education. In addition to that, the main goal of Radix is involving
          future scientists in process, which includes organization and managing
          and stimulation of research activities as well.
        </h3>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "200",
            fontSize: "30px",
          }}
        >
          Forms of activities
        </h1>
        <h3
          className="h3"
          style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}
        >
          Scientific Research Center RADIX is carrying out: Educative activities
          for young scientists in order to improve professional skills and
          qualification, scientific and research activities, collaboration with
          local and international organizations. Radix is establishing regional
          representations all over the Georgia. Radix is collaborating with
          private and public medical organizations. The supreme body of the
          organization is board of administrators.
        </h3>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "200",
            fontSize: "30px",
          }}
        >
          Directions
        </h1>
        <h3
          className="h3"
          style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}
        >
          Radix’s activities have three directions-Radix works with children,
          students and scientists/practitioners. Radix is providing social
          projects which serves the formation of healthy civil society. With
          supporting of Non formal education, stimulation of scientific
          activities of students is provided. Radix is ensuring the permanent
          support of realization of educational projects for scientists and
          students as well.
        </h3>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "200",
            fontSize: "30px",
          }}
        >
          Membership
        </h1>
        <h3
          className="h3"
          style={{ textAlign: "left", margin: "30px", fontSize: "15px" }}
        >
          Anyone who share the organization’s goals can become a member of the
          organization. A person who is actively supporting the organization’s
          activities, may be adopted as a honorable member by the decision of
          organization’s founders.
        </h3>
      </div>
    </div>
  );
}
export { About, Abouten };
