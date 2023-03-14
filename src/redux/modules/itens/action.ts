import { iItens } from "../../../pages/dashboard/DefaultPage"

export const addItens = (itens: iItens[]) => {
    return {
        type: "ADD_ITENS",
        itens
    }
}