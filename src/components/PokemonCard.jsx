import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

function PokemonCard(props) {
    const { name, url_img, types, id,favorite } = props;
    const typesString = types.map((element) => element.type.name).join(", ");

    const dispatch = useDispatch();
    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }));
    };
    return (
        <Card
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
            title={name}
            cover={<img src={url_img} alt={name} />}
        >
            <Meta description={typesString} />
        </Card>
    );
}

export default PokemonCard;
