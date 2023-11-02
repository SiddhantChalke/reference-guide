const initialCount = 1000;

const cntReducer = (state = initialCount, action) => {
    if (action.type === 'increment') {
        return state += 500;
    } else if (action.type === 'decrement') {
        return state -= 500;
    } else if (action.type === 'reset') {
        return state = 0;
    } else {
        return state;
    }
}

export default cntReducer