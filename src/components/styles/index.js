import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  margin: 20px auto;
  height: 100vh;
`
export const ContainerMain = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 100%;
    grid-template-columns: repeat(4, 87px);
    grid-template-rows: minmax(70px, auto) repeat(4, 70px);
    box-shadow: 2px 2px 10px #333;
    border-top: none;
    background-color: #006a6a;
`

export const Screen = styled.div`
    height: 140px;
    background-color: #070706;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-left: 1px solid #006a6a;
    border-right: 1px solid #006a6a;

`

export const Previous = styled.div`
    color: white;
    font-size: 1.5rem;
` 
export const Current = styled.div`
    color: white;
    font-size: 2.5rem;
` 

export const Button = styled.button`
    cursor: pointer;
    font-family: Gotham Rounded, sans-serif;
    font-size: 1.5rem;
    color: white;
    border: 1px outset #070706;
    outline: none;
    background-color: #373737;
    &:hover {
        background-color:#df7f00;
        
    }


    ${({operation}) => operation && `background-color: #262626; font-family: ui-sans-serif; `}
    ${({control}) => control && `background-color: #262626; font-size: 2rem;`}
    ${({equals}) => equals && ` background-color: #df7f00; font-family: ui-sans-serif;`}
    ${({period}) => period && ` background-color: #262626; font-family: ui-sans-serif;`}
    ${({number}) => number && ` font-weight: 900;`}

    img{
      width: 2rem;
    }

`