import React, { useState } from 'react';

function Calculadora() {
const [resultado, setResultado] = useState("");

const manejarClick = (valor) => {
setResultado((prev) => prev + valor);
};

const calcular = () => {
try {
const evalResult = eval(resultado);
if (!isFinite(evalResult)) {
setResultado("Error");
} else {
setResultado(evalResult.toString());
}
} catch {
setResultado("Error");
}
};

const limpiar = () => {
setResultado("");
};

return (
<div className="calculadora" style={{ maxWidth: 300, margin: 'auto', padding: 20, textAlign: 'center', background: '#f4f4f4', borderRadius: 10 }}>
<h2>Calculadora</h2>
<input
type="text"
value={resultado}
readOnly
role="textbox"
className="display"
style={{ width: '100%', height: 40, fontSize: 18, marginBottom: 10, textAlign: 'right' }}
/>
<div className="botones" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
{'123+456-789×0.÷='.split('').map((btn, i) => (
<button
key={i}
onClick={() => {
if (btn === '=') calcular();
else if (btn === 'C') limpiar();
else manejarClick(
btn === '×' ? '*' : btn === '÷' ? '/' : btn
);
}}
style={{
padding: 15,
fontSize: 18,
borderRadius: 5,
backgroundColor: '#fff',
border: '1px solid #ccc'
}}
>
{btn}
</button>
))}
<button
onClick={limpiar}
style={{
gridColumn: 'span 4',
padding: 10,
backgroundColor: '#ff4d4d',
color: '#fff',
fontWeight: 'bold',
border: 'none',
borderRadius: 5
}}
>
C
</button>
</div>
</div>
);
}

export default Calculadora;

