import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faGraduationCap,
  faComments,
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function TeacherCard() {
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    const searchUsers = async () => {
      const { data } = await axios.get("https://www.data.gouv.fr/api/1/users/");
      setTeacherList(data.data);
    };

    searchUsers();
  }, []);

  const renderTeacher = () => {
    return teacherList.map((teacher) => (
      <div className="Card" key={teacher.id}>
        <img
          src="./img/profil.png"
          alt="photo de profil"
          className="profilPic"
        />
        <div className="Card-Header">
          <h2>
            {teacher.first_name} {teacher.last_name}
          </h2>
          <div className="stars">
            <FontAwesomeIcon className="Star-icon" icon={faStar} />
            <FontAwesomeIcon className="Star-icon" icon={faStar} />
            <FontAwesomeIcon className="Star-icon" icon={faStar} />
            <FontAwesomeIcon className="Star-icon" icon={faStar} />
            <FontAwesomeIcon className="Star-icon vide" icon={faStar} />
          </div>
          <p>20 heures données</p>
        </div>
        <div className="Card-Mid">
          <ul className="Card-Mid-icon">
            <li>
              <FontAwesomeIcon className="Mid-icon" icon={faGraduationCap} />
            </li>
            <li>
              <FontAwesomeIcon className="Mid-icon" icon={faComments} />
            </li>
            <li>
              <FontAwesomeIcon className="Mid-icon" icon={faCircleCheck} />
            </li>
            <li>
              <FontAwesomeIcon className="Mid-icon" icon={faLocationDot} />
            </li>
          </ul>
          <ul className="Card-Mid-txt">
            <li>HEC, 1ére année</li>
            <li>Bilingue</li>
            <li>Diplome vérifié</li>
            <li>Paris</li>
          </ul>
        </div>
        <div className="Card-Footer">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio,
            doloremque dicta blanditiis vero nostrum vitae deleniti consequatur
            corrupti soluta necessitatibus.
          </p>
        </div>
        <button className="Card-Button">CHOISIR</button>
      </div>
    ));
  };

  return renderTeacher();
}

export default TeacherCard;
