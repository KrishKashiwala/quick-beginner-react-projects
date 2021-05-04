import React , {useState} from 'react'
import './App.css';
import styled from 'styled-components'

const Main = styled.body`
    background-color : #0B0E11;
    color: #DEE3EA;
    margin : 100px;
    padding:100px;
`
const Button = styled.button`
  background-color:#94F700;
  padding: 10px;
  border-radius : 60px;
  margin-top : 30px;
  color: #0B0E11;

`
const InputOne = styled.input`
  margin-left : 10px;  
`
const InnerResult = styled.h1`
margin-bottom : 30px;
`
const OriginalContent = styled.div`
display : flex;
gap : 50px;
flex-direction : row;
`
const InputTwo = styled(InputOne)``
function App() {
  const [low , setLow] = useState(0)
  const [high , setHigh] = useState(10)
  const [output , setOutput] = useState(5)

 function handleOutput(){

      setOutput(Math.round((Math.random() * (high - low )) + low))
      
  }
  return (
     <>
          <Main>
            
              <InnerResult>Random Number  is : {output}
              </InnerResult>
              <OriginalContent>
              <p>Min Number : </p>
              <InputOne type = "number" placeholder = {low} onChange = {(e) => setLow(+e.target.value)}/>
              <p>Max Number : </p>
              <InputTwo type = "number"  placeholder = {high} onChange = {(e) => setHigh(+e.target.value)}/>
              </OriginalContent>
              <Button onClick = {handleOutput}>Get Random Number</Button>
              
          </Main>
     </> 
  );  

}

export default App;
