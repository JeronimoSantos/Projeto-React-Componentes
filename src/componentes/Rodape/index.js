
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://www.instagram.com/jeronimo_santos_oficial/" target="_blank">
                    <img src="/imagens/intagram.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://github.com/JeronimoSantos" target="_blank">
                    <img src="/imagens/github.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jeronimo-s-rodrigues-dev/" target="_blank">
                    <img src="/imagens/linkedin.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Jerônimo S.Rodrigues.
        </p>
       </section>
    </footer>)
}

export default Rodape