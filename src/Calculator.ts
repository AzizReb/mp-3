import { useState } from 'react';

export default function useCalculator() {
    const [result, setResult] = useState(0);

    function add(a: string, b: string): void {
        setResult(Number(a) + Number(b));
    }
    function sub(a: string, b: string): void {
        setResult(Number(a) - Number(b));
    }
    function mul(a: string, b: string): void {
        setResult(Number(a) * Number(b));
    }
    function div(a: string, b: string): void {
        setResult(Number(a) / Number(b));
    }
    function pow(a: string, b: string): void {
        const na = Number(a);
        const nb = Number(b);
        let s = 1;
        for (let i = 0; i < nb; i++) {
            s *= na;
        }
        setResult(s);
    }
    function clearAll(): void {
        setResult(0);
    }

    return { result, add, sub, mul, div, pow, clearAll };
}