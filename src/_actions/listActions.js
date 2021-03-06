// import { CONSTANTS } from "../_constants";
import { userService} from "../services";
export const SET_LIST_PENDING = 'SET_LIST_PENDING';
export const SET_LIST_SUCCESS = 'SET_LIST_SUCCESS';
export const SET_LIST_ERROR = 'SET_LIST_ERROR';
export const SET_SUB_LIST_PENDING = 'SET_SUB_LIST_PENDING';
export const SET_SUB_LIST_SUCCESS = 'SET_SUB_LIST_SUCCESS';
export const SET_SUB_LIST_ERROR = 'SET_SUB_LIST_ERROR';
export const ADD_SUB_LIST = 'ADD_SUB_LIST';
export const DELETE_SUB_LIST = 'DELETE_SUB_LIST';
export const EDIT_SUB_LIST = 'EDIT_SUB_LIST'

function getListsPending() {
    return {
        type: SET_LIST_PENDING
    }
}

function getListsSuccess(products) {
    // console.log("here",products)
    return {
        type: SET_LIST_SUCCESS,
        products: products
    }
}
export const setSubProducts = (subProducts) => {
    // console.log("subProcust",subProducts)
    return {
        type: SET_SUB_LIST_SUCCESS,
        subProducts: subProducts
    }
}
export const editSubProducts = (subProducts) => {
    // console.log("edit SUB LIST",subProducts)
    return {
        type: EDIT_SUB_LIST,
        subProducts: subProducts
    }
}
export const addSubList = (product) => {
    // console.log("HEREasdawd")
    return {
        type: ADD_SUB_LIST,
    
    }
}
export const deleteSubList = (subList) => {
    // console.log("HEREdeleaction",subList)
    return {
        type: DELETE_SUB_LIST,
        subProducts : subList
    }
}


function getListsError(error) {
    return {
        type: SET_LIST_ERROR,
        error: error
    }
}
// function getSubListsPending() {
//     return {
//         type: SET_LIST_PENDING
//     }
// }

// function getSubListsSuccess(subProducts) {
//     // console.log("here",products)
//     return {
//         type: SET_LIST_SUCCESS,
//         subProducts: subProducts
//     }
// }

// function getSubListsError(error) {
//     return {
//         type: SET_LIST_ERROR,
//         error: error
//     }
// }

function getList(){
      return dispatch => {
          dispatch(getListsPending());
          userService.getList()
          .then(res => {
              
              if(res.error){
                  throw(res.error)
              }
              
              
              dispatch(getListsSuccess(res));
              return res
        //   }).then(res => {
        
        //     // const data = []
        //     for(const list of res) {
        //         // getSubList(list.id)
                
              
        //     }
            
            
           
    
          })
          .catch(error => {
            dispatch(getListsError(error));
        })
      }
  }

//   function getSubList (id) {
//     console.log("sublist",id)
//        userService.getItemList(id)
//         .then(res => {
//             console.log("AWDKJAWKJDH",res)
//             if(res.error){
//                 throw(res.error)
//             }
//             return res
//         })
//         .catch(error => {
//         //   dispatch(getListsError(error));
//         console.log(error)
//       })
    
    
// }

  
  export const addList = () => (dispatch, id,data) => {
    // console.log("hereeeee")
    userService.postItemList(id,data)
      .then(res => {
       
        dispatch({
          type: ADD_SUB_LIST
          
        });
        // dispatch({
        //     type: SET_LIST_SUCCESS
        //   });
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   function getSubList(id){
//     return dispatch => {
//         dispatch(getSubListsPending());
//         userService.getItemList(id)
//         .then(res => {
            
//             if(res.error){
//                 throw(res.error)
//             }

//             dispatch(getSubListsSuccess(res));
//             return res
//         })
//         .catch(error => {
//           dispatch(getSubListsError(error));
//       })
//     }
// }

  export default getList;
