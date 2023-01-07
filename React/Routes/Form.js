import "./form.css";

function Form(props){
    return(
        <section>
            <button id="whats"><a href="https://api.whatsapp.com/send?phone=5575998003884">WhatsApp</a></button>
            <button id="insta"><a href="https://www.instagram.com/felipemelo.dsg/">Instagram</a></button>
            <button id="git"><a href="https://github.com/felipemelo10">GitHub</a></button>
            <button id="twitter"><a href="https://twitter.com/felipemelo10">Twitter</a></button>
        </section>
    )
}
export default Form;