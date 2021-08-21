import React from "react";
import Header from "../Header/Header"
import ImgDel from '../../imagens/del.svg' 
import ImgRaiz from '../../imagens/raiz.svg';
import { Container, Screen, Previous, Current, Button, ContainerMain} from "../styles";

const Calculator = () =>{

  const [previous, setPrevious] = React.useState('')
  const [current, setCurrent] = React.useState('')
  const [operation, setOperation] = React.useState('')


  const NumberValue = (el) => {
      const value = el.target.getAttribute('data')

      if(value === '.' && current.includes('.')) return
      setCurrent(current + value)
  }

  const handleDelete = () => {
      setCurrent(String(current).slice(0, -1))
  }

  const handleAllClear = () => {
      setCurrent('')
      setPrevious('')
      setOperation('')
  }

  const chooseOperation = (el) => {
      if(current === '') return
      if(previous !== ''){
          let value = compute();
          setPrevious(value)
      } else {
          setPrevious(current)
      }

      setCurrent('')
      setOperation(el.target.getAttribute('data'))

  }

  const equals = () => {
      let value = compute();
      
      if(value == undefined || value == null) return
      setCurrent(value)
      setPrevious('')
      setOperation('')
      

    
  }




  const compute = () => {
      let result
      let previousNumber = parseFloat(previous)
      let currentNumber = parseFloat(current)

      if(isNaN(previousNumber) || isNaN(currentNumber)) return

      switch(operation) {
          case '÷':
            if(currentNumber === 0){
              alert("Não é possível realizar a divisão por zero")
            }else{
              result = previousNumber / currentNumber;
            }
             
              break;
          case '×':
              result = previousNumber * currentNumber;
              break;
          case '+':
              result = previousNumber + currentNumber;
              break;
          case '-':
              result = previousNumber - currentNumber;
              break;
          
          default:
              return null
      }

      return result;

  }

  const raizOperation = () =>{
    setPrevious(current)
    let value = Math.sqrt(current)
    setCurrent(value)
  }

  const numberOperationNegative = () =>{
   let neWvalue = current;
   let value = Math.abs(neWvalue)
     value = (value)*(-1); 
     setCurrent(value)
  }
  const numberOperationPositive = () =>{
    let neWvalue = current;
    let value = Math.abs(neWvalue)
      setCurrent(value)
   }
  return (
      <>
      <Container>
      <Header/>
      <Screen>
        <Previous>{previous} {operation}</Previous>
        <Current>{current}</Current>
      </Screen>
      <ContainerMain>
      <Button onClick={handleAllClear} control>C</Button>
      <Button  onClick={handleDelete} control><img src={ImgDel} alt="Imagem Delete" /></Button>
      <Button  onClick={raizOperation} control><img src={ImgRaiz} alt="Imagem Raiz" /></Button>
      <Button data={'÷'} onClick={chooseOperation} operation>÷</Button>
      <Button data={'7'} onClick={NumberValue} number>7</Button>
      <Button data={'8'} onClick={NumberValue} number>8</Button>
      <Button data={'9'} onClick={NumberValue} number>9</Button>
      <Button data={'×'} onClick={chooseOperation} operation>×</Button>
      <Button data={'4'} onClick={NumberValue} number>4</Button>
      <Button data={'5'} onClick={NumberValue} number>5</Button>
      <Button data={'6'} onClick={NumberValue} number>6</Button>
      <Button data={'+'} onClick={chooseOperation} operation>+</Button>
      <Button data={'1'} onClick={NumberValue} number>1</Button>
      <Button data={'2'} onClick={NumberValue} number>2</Button>
      <Button data={'3'} onClick={NumberValue} number>3</Button>
      <Button data={'-'} onClick={chooseOperation} operation>-</Button>
      <Button data={'+/-'} onClick={current > 0 ? numberOperationNegative : numberOperationPositive} operation >+/-</Button>
      <Button data={'0'}  onClick={NumberValue} number>0</Button>
      <Button data={'.'} period onClick={NumberValue} >.</Button>
      <Button gridSpan={2} onClick={ equals} equals>=</Button>
    </ContainerMain>
    </Container>
    </>
   
  );
}
export default Calculator

