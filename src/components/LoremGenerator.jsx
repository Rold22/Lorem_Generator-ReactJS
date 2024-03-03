import React, { useState } from 'react'
import styled from 'styled-components'
import { Highlighter, SelectionProvider } from 'react-selection-highlighter'
import {loremIpsum} from 'lorem-ipsum';

const LoremGenerator = () => {
  const [count, setCount] = useState(1); 
  const [loremText, setLoremText] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (isNaN(amount) || amount <= 0) {
      amount = 1;
    } else if (amount > 100) {
      amount = 100;
    }

    const generatedText = loremIpsum({
      count: amount,
      units: 'paragraphs',
      format: 'html'
    });
    setLoremText(generatedText);
  }

  return (
    <Wrapper>
    <section className='section-center'>
      <h3>Make  lorem ipsum text! </h3>
      <form className='lorem-form' onSubmit={handleSubmit}> 
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name='amount'
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
        </form>
            <SelectionProvider>
          <Highlighter
            className='heigh'
            htmlString={loremText} />
          </SelectionProvider>
    </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  background-color:  #1c1c1c ;
  color: white;
  .section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 40rem;
  margin-top: 5rem;
  text-align: center;
}
  h3{
    text-transform: uppercase;
    color: #eaeaea ;
  }
  .lorem-form {
  text-transform: capitalize;
  letter-spacing: 5px;
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
label {
  font-size: 1.25rem;
  color: #eaeaea ;
}
input {
  padding: 0.25rem 0.5rem;
  width: 4rem;
  border-radius: 3px;
  border: none;
  margin: 0 0.5rem;
  font-size: 1.25rem;
}
  .btn{
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: medium;
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
    border: #f6a200;
    padding: 10px 25px;
    border-radius: 5px;
    text-align: center;
    background: linear-gradient(313deg, rgba(0,17,228,1) 0%, rgba(29,4,195,1) 100%);
    cursor: pointer;
  }
  .btn:hover{
    transition: all 0.3s linear;
    transform: scale(0.9);
  }
  .underline{
    margin-bottom: 2rem;
    width: 100%;
    height: 2px;
    background-color: #636363;
  }
// highlighter CSS

.relative {
  position: relative;
}
.body {
  background-color: black;
}

.bg-lightgreen {
  background-color: #0033ff;
}
.bg-red {
  background-color: #ff0000;
}

.select-none {
  user-select: none;
}

.bg-yellow {
  background-color: #c4c400;
}

.bg-blue {
  background-color: #59d5e0;
}
`

export default LoremGenerator