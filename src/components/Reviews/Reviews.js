import {useState} from 'react'
import {people} from "./DataReviews"
import {FaQuoteRight, FaChevronRight, FaChevronLeft} from "react-icons/fa"
import './reviews.css'



const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, img, description} = people[index]

//Increment Person

const nextPerson = () => {
    setIndex(function(index) {
        let newIndex = index + 1
        return checkNumber(newIndex)
    })
}

//DecrementPerson
const prevPerson = () => {
    setIndex((index) => {
        let newIndex = index - 1
        return checkNumber(newIndex)
    })
}

//checkPerson 
const checkNumber = (newIndex) => {
if(newIndex > people.length - 1) {
    newIndex = 0
}
if(newIndex <0) {
    newIndex = people.length  - 1
}

return(newIndex)

}
//random person
const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length)
if (random === index) {
    random = index + 1
}

    setIndex(checkNumber(random))

}


return (
    <article className='review'>
        <div className="img-container">
            <img src={img} alt='name' className="person-img" />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>      
        </div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{description}</p>

<div className="button-container">
    <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
    </button>
        <button className="prev-btn"onClick={prevPerson}>
            <FaChevronLeft />
        </button>
        <br />

        <button className='random-btn' onClick={randomPerson}>Surprise me</button>
 
</div>



    </article>

)




} 

export  default Review










