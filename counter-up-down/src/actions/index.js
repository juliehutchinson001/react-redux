export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const INCREMENT_BY = "INCREMENT_BY"
export const DECREMENT_BY = "DECREMENT_BY"
export const RESET = "RESET"
export const ADD_COUNTER = "ADD_COUNTER"
export const RESET_TO = "RESET_TO"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}