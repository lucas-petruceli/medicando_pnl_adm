import { useSelector } from "react-redux";
import { iItens } from "../../../pages/dashboard/DefaultPage";
import CardStyle from "./card";

interface iState {
    itensState: iItens[] | [];
};

const Cards = () => {
    const itens = useSelector((state: iState) => state.itensState);

    return (
        <CardStyle>
            {
                itens.map((item, index) => {
                    return (
                        <li key={ index }>
                            <img src={ item.picture } alt={ item.book }/>
                            <h2>{ item.book }</h2>
                            <p>{ item.description }</p>
                            <p>{ item.location }</p>
                            <p>{ item.subway }</p>
                        </li>
                    )
                })
            }
        </CardStyle>
    );
};

export default Cards;