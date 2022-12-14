import styled from "styled-components";
import config from "../../config.json"

export const StyledFavorites = styled.div`
    width: 100%;
    display:block;
    padding: 16px;
    overflow: hidden;

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
        
    }

    img {
        object-fit: cover;
        width: 100%;
        height: auto;
        border-radius:50%;
        aspect-ratio:1/1;
        max-width:100px;
    }

    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;
    }

    section > div {
        width: auto;
        display: flex;
    }

    sectio > div > a {
        scroll-snap-align: start;
        text-align: center;
        padding-left: 5px;
    }

    section > div > a > span {
    padding-top: 8px;
    display: block;
    }
`;