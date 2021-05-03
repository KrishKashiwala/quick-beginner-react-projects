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
  const [low , setLow] = useState()
  const [high , setHigh] = useState()
  const [output , setOutput] = useState()

  const handleOutput = () => {

      var rand = Math.round((Math.random() * (high - low)) + low)
      rand <= low || rand >= high ? rand = "failed" : setOutput(rand)
  }
  return (
     <>
          <Main>
            <Content>
              <label htmlFor="output">Random Output is : </label>
              <p id ="output">{output}</p>
              </Content>
              <label htmlFor="input1">Low Range</label>
              <InputOne type = "number" id = "input1" onChange = {(e) => setLow(e.target.value)}/>
              <label htmlFor="input2">High Range</label>  
              <InputTwo type = "number"  id = "input2" onChange = {(e) => setHigh(e.target.value)}/>
              <Button onClick = {handleOutput}>Get Random Number</Button>
              
          </Main>
     </> 
  );  

}

export default App;
