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

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
            return Object.assign({}, state, { prop_name: action.payload.name, prop_desc: action.payload.description })
        case STEP_TWO:
            return Object.assign({}, state, { prop_address: action.payload.add, prop_city: action.payload.city, prop_state: action.payload.state, prop_zip: action.payload.zip })
        case STEP_THREE:
            return Object.assign({}, state, { prop_image: action.payload })
        case STEP_FOUR:
            return Object.assign({}, state, { prop_loan: action.payload.loan, prop_mortgage: action.payload.mortgage })
        case STEP_FIVE:
            return Object.assign({}, state, { prop_rent: action.payload })
    }
    return state;
}


export function nameDesc(name, description) {
    return {
        type: STEP_ONE,
        payload: { name, description }
    }
}

export function propLocation(add, city, state, zip) {

    return {
        type: STEP_TWO,
        payload: { add, city, state, zip }
    }
}

export function propImage(image) {

    return {
        type: STEP_THREE,
        payload: image
    }
}

export function loanMortgage(loan, mortgage) {

    return {
        type: STEP_FOUR,
        payload: { loan, mortgage }
    }
}

export function Rent(rent) {

    return {
        type: STEP_FIVE,
        payload: rent
    }
}

