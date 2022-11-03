import {categories} from '../mocks'

const getCategories = async () => {
    try {
        const response = await categories;
        if(response.status === 200){
            return response.data
        }else{
            return null
        }
    }catch(e){
        return null;
    }
}
export {getCategories}