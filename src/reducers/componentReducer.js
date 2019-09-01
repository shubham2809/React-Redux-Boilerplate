const initialState = {
    attribute1: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
};
