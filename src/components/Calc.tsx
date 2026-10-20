import { useState } from 'react';
import useCalculator from '../hooks/useCalculator';

export default function Calc() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const { result, add, sub, mul, div, pow, clearAll } = useCalculator();

    return (
        <div className="calculator">
            <div className="inputs">
                <label>First Number: <input type="text" id="first-number" value={first} onChange={(e) => setFirst(e.target.value)} /></label>
                <label>Second Number: <input type="text" id="second-number" value={second} onChange={(e) => setSecond(e.target.value)} /></label>
            </div>
            <div className="buttons">
                <button onClick={() => add(first, second)}>+</button>
                <button onClick={() => sub(first, second)}>-</button>
                <button onClick={() => mul(first, second)}>*</button>
                <button onClick={() => div(first, second)}>/</button>
                <button onClick={() => pow(first, second)}>**</button>
                <button onClick={() => { clearAll(); setFirst(''); setSecond(''); }}>Clear</button>
            </div>
            <h3 style={{ color: result < 0 ? 'red' : 'black' }}>{result}</h3>
        </div>
    );
}