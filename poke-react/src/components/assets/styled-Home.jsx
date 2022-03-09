import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    

    div {
        border: 1px solid gray;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 200px;
        width: 250px;
        margin: 10px;

        p:first-child {
            display: flex;
            align-self: flex-end;
            margin-right: 10px;
        }

        p:nth-child(2) {
            display: flex;
            align-self: flex-start;
            margin-left: 10px;
            border: 1px solid black;
            border-radius: 12px;
            padding: 5px;
        }

    }
`