import Link from "next/link";

export default function Cabecalho() {
    return (
        <div
            className="flex flex-col h-20"
            style={{
                backgroundColor: '#D9D9D9',
            }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    teste
                    <Link href="/login">
                        Logar
                    </Link>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}