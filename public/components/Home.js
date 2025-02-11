import React, { useEffect, useState } from "react";
import { allMyInfosPost } from "../service/api";
import Hero from "./Hero";
export default function Home() {
  const [myInfo, setMyInfo] = useState([]);
  const [countSkills, setCountSkills] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const experienceYearsCalumet = () => {
    const thisYear = new Date().getFullYear();
    const startYear = new Date("February 2, 2022 01:15:00").getFullYear();
    setExperienceYears(thisYear - startYear);
  };
  useEffect(() => {
    allMyInfosPost().then((data) => {
      if (data && data != 2) {
        setMyInfo(data[0]);
        setCountSkills(data[1][0].count_programming_skills);
        setCountProjects(data[2][0].count_projects);
      }
    });
    experienceYearsCalumet();
  }, []);

  const renderingInfo = myInfo.map((info, index) => {
    return (
      <>
        <section key={index} class="about section-padding" id="section_2">
          <div class="container">
            <div className="row">
              <div className="col-12 mt-5 mt-lg-0 ">
                <div class="about-thumb">
                  <div class="section-title-wrap d-flex justify-content-center  align-items-center mb-4">
                    <img
                      src="./images/about.jpg"
                      class="avatar-image img-fluid"
                      alt=""
                    />
                    &nbsp;
                    <h2 class="text-white me-4 mb-0">About me</h2>
                  </div>
                  <div class="image-container float-lg-start float-md-end me-5 ">
                    <img
                      src="./images/in_web_i.png"
                      class="about-image img-thumbnail"
                      alt="my photo"
                    />
                  </div>
                  <h3 class="pt-2 mb-3">
                    HELLO I AM <span>{info.firstName.toUpperCase()}</span>
                  </h3>
                  <p>{info.position}</p>
                  <p className="h4">{info.description} </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="featured section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="profile-thumb">
                  <div class="profile-title">
                    <h4 class="mb-0">Information</h4>
                  </div>
                  <div class="profile-body">
                    <p>
                      <span class="profile-small-title">Name</span>
                      <span>{info.firstName.toUpperCase()}</span>&nbsp;
                      <span>{info.lastName.toUpperCase()}</span>
                    </p>

                    <p>
                      <span class="profile-small-title">Birthday</span>
                      <span>04 June 1984</span>
                    </p>

                    <p>
                      <span class="profile-small-title">Phone</span>
                      <span>
                        <a href={`tel:${info.phone}`}>{info.phone}</a>
                      </span>
                    </p>

                    <p>
                      <span class="profile-small-title">Email</span>
                      <span>
                        <a href={`mailto:${info.email}`}>{info.email}</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                <div class="about-thumb">
                  <div class="row">
                    <div class="col-lg-6 col-6 featured-border-bottom py-2">
                      <strong class="featured-numbers">
                        {experienceYears}
                      </strong>

                      <p class="featured-text">Years of Experiences</p>
                    </div>

                    <div class="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                      <strong class="featured-numbers">{countProjects}</strong>

                      <p class="featured-text">Projects I participated in</p>
                    </div>

                    <div class="col-lg-6 col-6 pt-4">
                      <strong class="featured-numbers">{countProjects}</strong>

                      <p class="featured-text"> Happy Customers</p>
                    </div>

                    <div class="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                      <strong class="featured-numbers">{countSkills}</strong>

                      <p class="featured-text">Programming Skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  });

  return (
    <>
      <Hero />
      {renderingInfo}
    </>
  );
}
