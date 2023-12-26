import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');
  const [isCalculatorVisible, setCalculatorVisible] = useState(true);

  const toggleCalculator = () => {
    setCalculatorVisible(!isCalculatorVisible);
  };

  const handleOperator = (operator) => {
    setResult((prevResult) => prevResult + operator);
  };

  const calculate = () => {
    try {
      const processedExpression = result.replace('^', 'Math.pow');
      const calculatedResult = eval(processedExpression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearScreen = () => {
    setResult('');
  };

  const display = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const deleteLastCharacter = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  const calcTrigono = (operation) => {
    const angle = parseFloat(result);
    if (operation === 'sin') {
      setResult(Math.sin(angle).toString());
    } else if (operation === 'cos') {
      setResult(Math.cos(angle).toString());
    } else if (operation === 'tan') {
      setResult(Math.tan(angle).toString());
    }
  };

 

  const calculateLogarithm = () => {
    try {
      const currentResult = parseFloat(result);
      const resultValue = Math.log10(currentResult);
      setResult(resultValue.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const calculateSquareRoot = () => {
    try {
      const currentResult = parseFloat(result);
      const resultValue = Math.sqrt(currentResult);
      setResult(resultValue.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={{paddingTop:"1rem"}}>
      <div className="container1">
        <center>
          <table>
            <tr>
              <td width="400" height="50">
                <input className="display-box" placeholder="0" type="text" id="result" value={result} disabled />
              </td>
              <td width="100">
                <input type="button" value="Clear" onClick={clearScreen} id="btn" />
              </td>
            </tr>
          </table> </center>
       
        {isCalculatorVisible && (
          <div id="info">
          
          <table className="calculator">
          <tr>
          <td colSpan={2}  > 
          <button  onClick={toggleCalculator} className="toggle-button">
        {isCalculatorVisible ? (
          <i style={{ fontSize: 'x-large', width: '3.5rem', height: '1rem' }} className="fas fa-toggle-off"></i>
        ) : (
          <i style={{ fontSize: 'x-large', width: '3.5rem', height: '1rem' }} className="fas fa-toggle-on"></i>
        )}
      </button>
          </td>
          <td></td>
          <td>
  <input type="button" value="&larr;" onClick={deleteLastCharacter} id="btn" />
</td>

        </tr>
          <tr>
            <td>
              <input type="button" value="1" onClick={() => display('1')} />
            </td>
            <td>
              <input type="button" value="2" onClick={() => display('2')} />
            </td>
            <td>
              <input type="button" value="3" onClick={() => display('3')} />
            </td>
            <td>
              <input type="button" value="+" onClick={() => handleOperator('+')} id="opbtn" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4" onClick={() => display('4')} />
            </td>
            <td>
              <input type="button" value="5" onClick={() => display('5')} />
            </td>
            <td>
              <input type="button" value="6" onClick={() => display('6')} />
            </td>
            <td>
              <input type="button" value="-" onClick={() => handleOperator('-')} id="opbtn" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7" onClick={() => display('7')} />
            </td>
            <td>
              <input type="button" value="8" onClick={() => display('8')} />
            </td>
            <td>
              <input type="button" value="9" onClick={() => display('9')} />
            </td>
            <td>
              <input type="button" value="*" onClick={() => handleOperator('*')} id="opbtn" />
            </td>
          </tr>
          <tr><td>
              <input type="button" value="=" onClick={calculate} id="btn1" />
            </td>
            
            <td>
              <input type="button" value="0" onClick={() => display('0')} />
            </td>
            <td>
              <input type="button" value="." onClick={() => display('.')} />
            </td>
            <td>
              <input type="button" value="/" onClick={() => handleOperator('/')} id="opbtn" />
            </td>
          </tr>
        </table>
          </div>
        )}

        {!isCalculatorVisible && (
          <div id="info2" className='hidden'>
          <table className="calculator">
          <tr>
            <td colspan="2">
              <button onClick={toggleCalculator}   className="toggle-button">
                {isCalculatorVisible ? (
                  <i style={{ fontSize: 'x-large', width: '4rem', height: '1rem' }} className="fas fa-toggle-off"></i>
                ) : (
                  <i style={{ fontSize: 'x-large', width: '4rem',height:'1rem' }} className="fas fa-toggle-on"></i>
                )}
              </button>
            </td>
            
            <td>
              <input type="button" value="Mod" onClick={() => handleOperator('%')} id="opbtn2" />
            </td>
            <td>
              <input type="button" value="^" onClick={() => handleOperator('**')} id="opbtn2" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="button" value="sin" onClick={() => calcTrigono('sin')} id="opbtn2" />
            </td>
            <td >
              <input type="button" value="cos" onClick={() => calcTrigono('cos')} id="opbtn2" />
            </td>
            <td>
              <input type="button" value="tan" onClick={() => calcTrigono('tan')} id="opbtn2" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="button" value="π" onClick={() => display('Math.PI')} id="opbtn2" />
            </td>
            <td>
              <input type="button" value="√" onClick={calculateSquareRoot} id="opbtn2" />
            </td>
            <td>
              <input type="button" value="log" onClick={calculateLogarithm} id="opbtn2" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="1" onClick={() => display('1')} />
            </td>
            <td>
              <input type="button" value="2" onClick={() => display('2')} />
            </td>
            <td>
              <input type="button" value="3" onClick={() => display('3')} />
            </td>
            <td>
              <input type="button" value="&larr;" onClick={deleteLastCharacter} id="btn" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4" onClick={() => display('4')} />
            </td>
            <td>
              <input type="button" value="5" onClick={() => display('5')} />
            </td>
            <td>
              <input type="button" value="6" onClick={() => display('6')} />
            </td>
            <td>
              <input type="button" value="-" onClick={() => display('-')} id="opbtn" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7" onClick={() => display('7')} />
            </td>
            <td>
              <input type="button" value="8" onClick={() => display('8')} />
            </td>
            <td>
              <input type="button" value="9" onClick={() => display('9')} />
            </td>
            <td>
              <input type="button" value="+" onClick={() => display('+')} id="opbtn" />
            </td>
          </tr>
          <tr>
           <td>
              <input type="button" value="=" onClick={calculate} id="btn1" />
            </td>
            
            <td>
              <input type="button" value="0" onClick={() => display('0')} />
            </td>
           <td>
              <input type="button" value="." onClick={() => display('.')} />
            </td>
            <td>
              <input type="button" value="*" onClick={() => display('*')} id="opbtn" />
            </td>
          </tr>
        </table>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Calculator;
