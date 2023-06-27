import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import randomInput from '../images/randomInput.png'


const Home = () => {
    const [carModel, setCarModel] = useState();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [annualSalary, setAnnualSalary] = useState('');
    const [debt, setDebt] = useState('');
    const [netWorth, setNetWorth] = useState('');

    const [prediction, setPrediction] = useState(0);

    return (
        <Container>
            <h1>Estimating Consumer Spending: A Model Based on Customer Characteristics</h1>
            <p>The car price prediction model, is based on ANN deep learning concepts. </p>
            <p>As a vehicle salesperson, you would like to create a model that can estimate the overall amount that consumers would spend given the following characteristics: 
                <i> customer name, customer email, country, gender, age, annual salary, credit card debt, and net worth </i>
                .
            </p>
            <p>We remove all the non-technical values and just keep 
                <i> gender, age, annual Salary,	credit card debt, net worth, car purchase amount</i>
                .
            </p>
            <img className='randomInput' src={randomInput} alt="" />
            
            <h4>Take inputs : </h4>
            <div className="inputs">
                <input type="text" placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)} />
                <input type="text" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder='Annual Salary' value={annualSalary} onChange={(e) => setAnnualSalary(e.target.value)} />
                <input type="text" placeholder='Credit Card Debt' value={debt} onChange={(e) => setDebt(e.target.value)} />
                <input type="text" placeholder='Net Worth' value={netWorth} onChange={(e) => setNetWorth(e.target.value)} />
            </div>
            <button>Submit</button>
            
            <h4>Price Prediction : </h4>
            <p>Overall amount that consumers would spend : {prediction}</p>

        </Container>
    )
}

export default Home


const Container = styled.div`
    padding: 50px;
    p{
        margin: 10px 0 0 0;
        color: #808080;
        font-weight: 300;

        i{
            font-weight: 500;
        }
    }

    .randomInput{
        height: 200px;
        margin: 20px 0;
    }

    .inputs{
        input{
          display: block;
          width: 30%;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: 1px solid #dac8c8;
          margin-bottom: 5px;
          font-weight: 400;
          letter-spacing: 0.06rem;
          font-size: 0.75rem;
          outline: none;

          &:hover{
            /* border: 1px solid grey; */
          }
        }
      }
    
    button{
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 1px solid #dac8c8;
        margin-bottom: 5px;
        font-weight: 400;
        letter-spacing: 0.06rem;
        font-size: 0.75rem;
        cursor: pointer;
    }

      h4{
        margin: 35px 0 10px 0;
      }

`