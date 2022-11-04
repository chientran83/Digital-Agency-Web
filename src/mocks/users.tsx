import User1Image from '../assets/images/western-man-4975942-4159828 1.png'
import User2Image from '../assets/images/western-man-4975942-4159828 2.png'
import User3Image from '../assets/images/western-man-4975942-4159828 3.png'

interface User {
    image: String,
    name: String,
    content: String
}
interface UsersData {
    status: Number,
    data : User[]
}

const users : UsersData = {
    status: 200,
    data : [
        {
            image : User1Image,
            name : "Andrew Rathore",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel"
        },
        {
            image : User2Image,
            name : "Vera Duncan",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel"
        },
        {
            image : User3Image,
            name : "Mark Smith",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel"
        },
    ]
}

export default users;