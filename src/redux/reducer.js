let initialState = {
    prop_name: '',
    prop_desc: '',
    prop_address: '',
    prop_city: '',
    prop_state: '',
    prop_zip: 0,
    prop_image: '',
    prop_loan: 0,
    prop_mortgage: 0,
    prop_rent: 0
}

const STEP_ONE = 'STEP_ONE'
    , STEP_TWO = 'STEP_TWO'
    , STEP_THREE = 'STEP_THREE'
    , STEP_FOUR = 'STEP_FOUR'
    , STEP_FIVE = 'STEP_FIVE'
    , HANDLE_PROPERTY = 'HANDLE_PROPERTY'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
        const Step_One = state.prop_name && state.prop_desc
            return Object.assign({}, state, { Step_One: [...state.Step_One, action.payload]})
        case STEP_TWO:
        const Step_Two = state.prop_address && state.prop_city && state.prop_state && state.prop_zip
            return Object.assign({}, state, { Step_Two: [...state.Step_Two, action.payload]})
        case STEP_THREE:
            return Object.assign({}, state , [...state.prop_image, action.payload])
        case STEP_FOUR:
        const Step_Four = state.prop_loan && state.prop_mortgage
            return Object.assign({}, state, {Step_Four: [...state.Step_Four, action.payload]})
        case STEP_FIVE:
            return Object.assign({}, state, [...state.prop_rent, action.payload])
    }
    return state;
}


export function nameDesc(property) {

    return {
        type: STEP_ONE,
        payload: property
    }
}

export function propLocation(property) {

    return {
        type: STEP_TWO,
        payload: property
    }
}

export function propImage(property) {

    return {
        type: STEP_THREE,
        payload: property
    }
}

export function loanMortgage(property) {

    return {
        type: STEP_FOUR,
        payload: property
    }
}

export function Rent(property) {

    return {
        type: STEP_FIVE,
        payload: property
    }
}