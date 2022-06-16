import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faGraduationCap,
  faComments,
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import teacherList from "../TeacherList";

function TeacherCard() {
  const renderStars = (nbr) => {
    let stars = [];
    for (let i = 0; i < nbr; i++) {
      stars.push(<FontAwesomeIcon className="Star-icon" icon={faStar} />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<FontAwesomeIcon className="Star-icon vide" icon={faStar} />);
    }
    return stars;
  };

  const renderTeacher = () => {
    return teacherList.map((teacher, index) => (
      <div className="Card" key={index}>
        <img src={teacher.img_src} alt="profil" className="profilPic" />
        <div className="Card-Header">
          <h2>{teacher.name}</h2>
          <div className="stars">{renderStars(teacher.star)}</div>
          <p>{teacher.hour} heures données</p>
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
            <li>{teacher.school}</li>
            <li>{teacher.langue}</li>
            <li>
              {teacher.diplome ? "Diplome vérifié" : "Diplome non-vérifié"}
            </li>
            <li>{teacher.location}</li>
          </ul>
        </div>
        <div className="Card-Footer">
          <h3>Description</h3>
          <p>{teacher.Description}</p>
        </div>
        <button className="Card-Button">CHOISIR</button>
      </div>
    ));
  };

  return renderTeacher();
}

export default TeacherCard;
