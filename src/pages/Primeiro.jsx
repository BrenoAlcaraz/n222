import LinkSegundo from "../components/LinkSegundo";
import LinkGenerico from "../components/LinkGenerico/LinkGenerico";

const Primeiro = () => {
    const dados = [
        ["https://www.ibmec.br/","ibmec"],

        ["https://estude.ibmec.br/ibmec-hubs","ibmec-hubs"],

        ["https://www.botafogo.com.br/","botafogo"],

        ["https://www.flamengo.com.br/","flamengo"]
    ];

        const links = dados.map((ele, i) => (
            <LinkGenerico
            key={i}
                texto={ele[1]}
                endereco={ele[0]}
            />
        ) )

    return (<div>
            <h5>mini título</h5>
            <p>Meu texto</p>
            {links}
        </div>);
};

export default Primeiro;