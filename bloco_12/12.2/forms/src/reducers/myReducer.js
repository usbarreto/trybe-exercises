const INITIAL_STATE = {
    name: '',
    email: '',
    age: '',
    anecdote: '',
    terms: false,
    formularioComErros: false,
};

function myReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INPUT_INFOS':
            return { state: action.state };
        default:
            return state;
    }
}

export default myReducer;
