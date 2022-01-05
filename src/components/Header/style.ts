import styled from "styled-components";

export const Container = styled.div`
.container {
    position: absolute;
}

  .button {
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
  }
  
  .button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }

div {
    position: relative;
    text-align: center;
    text-color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
`

export const Content = styled.div`
        width: 100vw;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            padding: 10px;
        }

        @media(max-width: 768px) {
            h2 {
                font-size: Arial;
                text-color: black;
            }

            p {
                font-size: .8rem;
                text-align: center;
            }
        }
` 