import React, { useEffect, useState } from "react";
import {
  GITHUB_USER_API,
  GITHUB_USERNAME,
  GiTHUB_LINK,
  GITHUB_REPOSITORY_NAME,
  GITHUB_REPO_API,
} from "../../../../assets/constant";
import Shimmer from "./ShimmerUI";
import SocialMedia from "./SocialMedia";

const User = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loader, setLoader] = useState(false);
  const [repoInfo, setRepoInfo] = useState({});
  const [loaderRepo, setLoaderRepo] = useState(false);

  const fetchUserInfo = async () => {
    try {
      setLoader(true);
      const response = await fetch(GITHUB_USER_API + GITHUB_USERNAME);
      const json = await response.json();
      setUserInfo(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };

  const fetchRepoInfo = async () => {
    try {
      setLoaderRepo(true);
      const response = await fetch(
        `${GITHUB_REPO_API}${GITHUB_USERNAME}/${GITHUB_REPOSITORY_NAME}`
      );
      const json = await response.json();
      setRepoInfo(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoaderRepo(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    fetchRepoInfo();
  }, []);

  return loader || loaderRepo ? (
    <Shimmer type="profile" />
  ) : (
    <div className="user-card">
      <div className="left-profile">
        <h1 className="profile-title">About Me</h1>
        <a href={GiTHUB_LINK}>
          {" "}
          <img
            className="profile-pic"
            src={userInfo.avatar_url}
            alt="User Avatar"
          />
          <h2>{userInfo.name}</h2>
          <p className="profile-user-bio">{userInfo.bio}</p>
        </a>
      </div>

      <div className="right-profile">
        <div className="skills-section">
          <div className="skills-title">Repository</div>
          <div className="skills-list">
            <span className="skill-chip">
              <a
                className="repo-name"
                href={repoInfo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repoInfo.name}
              </a>
            </span>
          </div>
        </div>
        <div className="skills-section">
          <div className="skills-title">Skills</div>
          <div className="skills-list">
            <span className="skill-chip">React</span>
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">HTML</span>
            <span className="skill-chip">CSS</span>
            <span className="skill-chip">Tailwind</span>
            <span className="skill-chip">Redux</span>
            <span className="skill-chip">REST APIs</span>
          </div>
        </div>
        <div className="skills-section">
          <div className="skills-title">Social</div>
          <div className="skills-list">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
