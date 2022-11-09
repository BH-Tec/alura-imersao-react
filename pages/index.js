import React from "react";
import styled from "styled-components";

import config from "../config.json";
import Menu from "../src/components/Menu";

import { StyledFavorites } from "../src/components/Favorites";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const [ valorDoFiltro, setValorDoFiltro ] = React.useState('');
    
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Favorites favorites={config.favorites} />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.div`
    
    background-color: ${({theme}) => theme.backgroundLevel1};

    img {
        width: 100%;
        height: 345px;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-info > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <img src={config.banner} />
            {/* <StyledBanner /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(props) {
    const favoritesTitle = Object.keys(props.favorites)

    return (
        <StyledFavorites className="comp">
            {favoritesTitle.map((FavSectionTitle) => {
                const favorites = props.favorites[favoritesTitle];
                return (
                    <section key="Favorites">
                        <h2>{FavSectionTitle}</h2>
                        <div key={FavSectionTitle}>
                            {favorites.map((item) => {
                                return (
                                    <a key={item.url} href={item.url} target="_blank">
                                        <img className="favorites-img" src={`https://github.com/${item.user}.png`} />
                                        <span>
                                            @{item.user}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}
