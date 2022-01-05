import React, { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { ContextFavorite } from "../../context/Context";

import {
    Container,
    Content
} from './style'

export function Favorite() {
    const [favorited, setFavorited] = useContext<any>(ContextFavorite)

    const handleRemoveFavorit = (key: number) => {
        const removeFavorit = favorited.filter((favorit: any) => favorit.key !== key)
        setFavorited(removeFavorit)

        window.alert('Atividade removida dos favoritos')
    }

    return (
        <Container>
            <Header />
            <Content>
                <h2>Atividades Favoritas</h2>
                {
                    favorited.map((favorite: any) => {
                        return (
                            <div key={favorite.key}>
                                <p>Activity: {favorite.activity}</p>
                                <p>Type: {favorite.type}</p>
                                <p>Participants: {favorite.participants}</p>
                                <p>Price: {favorite.price}</p>
                                <p>Link: {favorite.link}</p>
                                <p>Key: {favorite.key}</p>
                                <button className="button" onClick={() => handleRemoveFavorit(favorite.key)}>
                                    Remover dos favoritos
                                </button>

                            </div>)
                    })
                }
            </Content>
        </Container>
    )
}
