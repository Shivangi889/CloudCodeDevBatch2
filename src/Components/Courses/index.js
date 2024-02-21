import { TiArrowSortedDown } from "react-icons/ti";
import { Scrollbars } from 'react-custom-scrollbars-2';
import ListOfCourses from "../ListOfCourses";
import {useState} from 'react';
import Button from '@mui/material/Button';
import './index.css';

const smapleData = [
    {
        id: '1',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708147745/tainingAndPlacement_rlvjpr.webp",
        courseName: "Placement Training & Networking Live Course",
        trainerName: "Mr. Ragella Manish",
        amount: "2000"
    },
    {
        id: '2',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708147666/placementTraining_bgt7zh.png",
        courseName: "LinkedIn for Undergards",
        trainerName: "Mr. Ragella Manish",
        amount: "1000"
    }
]

const Courses = () => {
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const onClickCategory = () => {
        setDropdownClicked(prevState => !prevState);
    }

    return (
        <div className="category-top-container">
            <div className="category-container">
                <span className="category-name">Category</span>
                <button type="button" className="dropdown-arrow-button" onClick={onClickCategory}>
                    <TiArrowSortedDown color="white"/>
                </button>
            </div>
            {dropdownClicked && (
                    <Scrollbars style={{ width: 250, height: 300 }}>
                        <ul className="category-dropdown-ul">
                            <li className="category-dropdown-li">
                                <a href="#1-2-1" target="_self" className="li-link">1-2-1</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Accelerator-Program" target="_self" className="li-link">Accelerator Program</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Career-Growth-Combos" target="_self" className="li-link">Career Growth Combos</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Data-Science" target="_self" className="li-link">Data Science</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Diwali-Carnival" target="_self" className="li-link">Diwali Carnival</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Finance" target="_self" className="li-link">Finance</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Language" target="_self" className="li-link">Language</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Marketing" target="_self" className="li-link">Marketing</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Offline-Workshop" target="_self" className="li-link">Offline Workshop</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Placement-Internship" target="_self" className="li-link">Placement & Internship</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Pre-Recorded-Courses" target="_self" className="li-link">Pre-Recorded Courses</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Psychology" target="_self" className="li-link">Psychology</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#Soft-Skills" target="_self" className="li-link">Soft Skills</a>
                            </li>
                        </ul>
                    </Scrollbars>
            )}
            <div id="Placement-Internship">
                <div className="courses-name-container">
                    <h2 className="courses-names">Placement & Internship</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Soft-Skills">
                <div className="courses-name-container">
                    <h2 className="courses-names">Soft Skills</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Marketing">
                <div className="courses-name-container">
                    <h2 className="courses-names">Marketing</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Finance">
                <div className="courses-name-container">
                    <h2 className="courses-names">Finance</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="1-2-1">
                <div className="courses-name-container">
                    <h2 className="courses-names">1-2-1</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Career-Growth-Combos">
                <div className="courses-name-container">
                    <h2 className="courses-names">Career Growth Combos</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Accelerator-Program">
                <div className="courses-name-container">
                    <h2 className="courses-names">Accelerator Program</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Pre-Recorded-Courses">
                <div className="courses-name-container">
                    <h2 className="courses-names">Pre-Recorded Courses</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Data-Science">
                <div className="courses-name-container">
                    <h2 className="courses-names">Data Science</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Diwali-Carnival">
                <div className="courses-name-container">
                    <h2 className="courses-names">Diwali Carnival</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Language">
                <div className="courses-name-container">
                    <h2 className="courses-names">Language</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Offline-Workshop">
                <div className="courses-name-container">
                    <h2 className="courses-names">Offline Workshop</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="Psychology">
                <div className="courses-name-container">
                    <h2 className="courses-names">Psychology</h2>
                    <Button>View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Courses
