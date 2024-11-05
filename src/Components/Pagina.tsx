import Cabecalho from "@/Components/Cabecalho";
import Rodape from "@/Components/Rodape";

export interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen"
        >
            <div
                className="flex-1 flex flex-col w-screen"
            >
                <Cabecalho />
                    <main className={`flex-1 flex flex-col`}>
                        {props.children}
                    </main>
                <Rodape/>
            </div>
        </div>
    )
}