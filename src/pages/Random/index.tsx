import { useContext, useState } from "react"

import api from "../../services/api"
import { Header } from "../../components/Header"
import { ContextFavorite } from "../../context/Context"

import {
    Button,
    Loading,
    Input
} from '../../styles/global'

import {
    Container,
    Content,
} from "./style"

interface ItemRandom {
    activity?: string;
    type?: string;
    participants?: string;
    price?: number | string;
    link?: string;
    key?: number | string;
}

export function Random() {
    const [input, setInput] = useState('')
    const [item, setItem] = useState<ItemRandom>()
    const [loading, setLoading] = useState(false)
    const [favorited, setFavorited] = useContext<any>(ContextFavorite)

    const handleItemType = async () => {
        setItem(undefined)
        setLoading(true)

        await api.get(`/activity?type=${input}`)
            .then(response => setItem(response.data))

        setLoading(false)
    }


    const handleFavorit = () => {
        setFavorited([
            ...favorited,
            {
                activity: item?.activity,
                type: item?.type,
                participants: item?.participants,
                price: item?.price,
                link: item?.link,
                key: item?.key,
            }
        ])

        window.alert('Atividade salva')
    }

    return (
        <html>

            <Container>
                <Header />
                <Content>
                    <body>
                        <link rel="stylesheet" type="text/css" href="style.tsx" />

                        <h2>Buscar atividade pelo seu tipo</h2>

                        <button className="button" onClick={handleItemType}>Buscar Atividade</button>


                        {
                            item ?
                                <div className="header" key={item.key}>
                                    <h3>Busca aleatória</h3>
                                    <p><span>Activity:</span> {item.activity}</p>
                                    <p><span>Type:</span> {item.type}</p>
                                    <p><span>Participants:</span> {item.participants}</p>
                                    <p><span>Price:</span> {item.price}</p>
                                    <p><span>Link:</span> {item.link}</p>
                                    <p><span>Key:</span> {item.key}</p>
                                    <button className="button" onClick={handleFavorit}>Salvar Atividade</button>
                                </div>
                                : <div>
                                    {
                                        loading ?
                                            <Loading />
                                            : ''
                                    }
                                </div>
                        }
                    </body>
                </Content>
            </Container>


        </html>
    )
}