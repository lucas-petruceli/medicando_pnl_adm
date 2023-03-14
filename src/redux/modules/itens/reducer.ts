import { iItens } from "../../../pages/dashboard/DefaultPage";

interface iAddItens {
    type: string,
    itens: iItens[]
}

const initialState: iItens[] | [] = [];

const itensReducer = (state = initialState, action: iAddItens) => {
    switch (action.type) {
        case "ADD_ITENS":
            const { itens } = action
            return [...state, itens]
        default:
            return state;
    }
};

export default itensReducer;