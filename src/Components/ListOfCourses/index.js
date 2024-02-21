import { MdCurrencyRupee } from "react-icons/md";
import './index.css';

const ListOfCourses = (props) => {
    const {listDetails} = props;
    const {imageUrl, courseName,trainerName, amount} = listDetails;
    return(
        <li className='courses-list-container'>
           <img src={imageUrl} alt='courses' className='course-image' /> 
            <p className='listof-coreses-name'>{courseName}</p>
            <p className='listof-trinernames'>{trainerName}</p>
            <span className='course-amount'><MdCurrencyRupee />{amount}</span>
        </li>
    )
}

export default ListOfCourses
