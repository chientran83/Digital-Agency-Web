import {users} from '../mocks'

const getUsers = async () => {
    try {
        const response = await users;
        if(response.status === 200){
            return response.data;           
        }else{
            return null;
        }
    }catch(e) {
        return null;
    }

}

export {getUsers}