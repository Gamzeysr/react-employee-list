
import "./Card.css"


const Card = ({ id, name, age, image, email }) => {
    return (
        <div className='Card' key={id}>
            <img src={image} alt="img" className="main-img" />
            <div className="name-info">
                <h4>{name}</h4>
                <p className="email">{email}</p>
                <p className="age">{age} years old</p>
            </div>
        </div>
    )
}

export default Card