import { useState } from 'react';

function Cliques(){
    const [cliques, setCliques] = useState(0);
    
    return(
        <div>
            <button onClick={() => setCliques(cliques+1) } >
                Clique Aqui
            </button>
            <p>Você clicou {cliques} vezes</p>
        </div>
    )
}
export default Cliques
