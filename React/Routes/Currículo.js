import Header from "../Header/Header";
import "./curriculo.css"

function Currículo(){
    return(
        <>
            <Header />
            <h1>Currículo</h1>
            <section id="endereço">
                <h2>Luis Felipe Silva de Melo</h2>
                <ul>
                    <li>Idade: 19 anos</li>
                    <li>Cidade: Petrolina - PE</li>
                </ul>
            </section>
            <section>
                <h2>Formações</h2>
                <ul>
                    <li>Graduando em Ciência da Computação na FACAPE</li>
                    <li>Cursando Front-End pela Softex</li>
                    <li>DG Essential, Profissão Criativo, Design para Social Media, Design de Marcas</li>
                </ul>
            </section>
            <section>
                <h2>Experiência</h2>
                <ul>
                    <li>Designer gráfico freelancer há mais de 4 anos</li>
                </ul>
            </section>
            <section>
                <h2>Linguagens</h2>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C</li>
                </ul>
            </section>
        </>
    )
}
export default Currículo;
