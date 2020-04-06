const INITIAL_STATE = {
    data : [
        {title : 'rock', contents : 'builder', author: 'Prof Abc'},
        {title : 'paper', contents : 'recyclable', author: 'Mr POP'},
        {title : 'scissor', contents : 'sharp', author: 'Mr zzz'}
      ]
}

const userreducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_FORM_DATA":
            return { data: action.payload };
        default:
            return state;
    }

}

export default userreducer;