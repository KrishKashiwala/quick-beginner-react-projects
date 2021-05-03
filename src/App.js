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
  color: #0B0E11;
  margin-left:100px;
`
const InputOne = styled.input`
  margin-left : 10px;  
`
const Content = styled.div`
  margin-left:100px;
`
const InputTwo = styled(InputOne)``
function App() {
  const [low , setLow] = useState(0)
  const [high , setHigh] = useState(1)
  const [output , setOutput] = useState(0)
  const handleOutput = () => {
    setOutput(Math.floor(Math.random()*(high-low+1)+low))
  }
  return (
     <>
          <Main>
            <Content>
              <label htmlFor="output">Random Output is : </label>
              <p id ="output">{output}</p>
              </Content>
              <label htmlFor="input1">Low Range</label>
              <InputOne type = "text" id = "input1" onChange = {(e) => setLow(e.target.value)}/>
              <label htmlFor="input2">High Range</label>
              <InputTwo type = "text"  id = "input2" onChange = {(e) => setHigh(e.target.value)}/>
              <Button onClick = {handleOutput}>Get Random Number</Button>
              
          </Main>
     </> 
  );  

}

export default App;
