import { Header } from "./components/header"

function App() {

    return (
        <>
            <Header />
            <section id="hero-fold" className="w-screen min-h-screen flex items-center justify-center sm:justify-start">
                <div className="flex flex-col items-center px-8 lg:pl-36 lg:scale-130">
                    <img src="/logo-villa-lobos.png" alt="logo-villa-lobos" className="w-30 mb-2" />
                    <h1 className="text-7xl whitespace-nowrap text-[#00D900]">Villa Glow</h1>
                    <h3 className="text-white text-3xl">Pintando no escuro</h3>
                    <img src="/sublinhado.png" alt="sublinhado" className="w-30" />
                    <h6 className="text-white text-center shadow-2xl shadow-black/50">Uma <span className="font-bold">experiência brilhante</span ><br /> para <span className="font-bold">toda a família</span></h6>
                    <p className="text-[#00DA00] text-center font-bold">20/11 a 24/12 - Piso 3</p>
                    <a className="px-8 pt-1 pb-1.5 rounded-full text-lg font-semibold text-[#030332] bg-[#ff00d4] text-center mt-4">Quero participar <br className="md:hidden" /> do Villa Glow</a>
                </div>
            </section>
            <section id="first-fold" className="w-screen relative">
                <div className=" min-h-32 bg-[#00CB01] flex flex-col justify-center items-center">
                    <h4 style={{fontSize: "31px", fontFamily: "bartex-regular"}} className=" sm:text-2xl text-[#030332] font-bold text-center px-3 py-4 z-50 relative">Um ateliê de pintura neon no escuro para toda a família se divertir e criar lembranças!</h4>
                </div>
                <div className="relative w-screen min-h-96 bg-[#030332] flex justify-center items-center">
                    <img src="/10.png" alt="" className="absolute opacity-30" />
                    <img src="/logo-villa-lobos.png" alt="" className="absolute w-40 top-7 md:top-11" />
                    <p className="text-md md:text-[21px] max-w-246 text-[#ffffff] text-center px-4 py-12 md:py-8 z-80">Neste Natal, o Shopping VillaLobos convida você para uma experiência cheia de cor e magia: o Vila Glow – Pintando no Escuro. Entre em um ambiente iluminado por luzes blacklight, vista seu avental e solte a criatividade com tintas neon que brilham no escuro! Crianças e adultos poderão criar suas próprias obras de arte e levar para casa um pedacinho dessa experiência inesquecível</p>
                    <img src="/2.png" alt="" className="hidden md:block absolute -right-50 -top-27" />
                    <img src="/3.png" alt="" className="hidden md:block absolute left-0 -bottom-40" />
                </div>
            </section>
            <section  id="second-fold" className="w-screen relative pb-36 pt-26 flex flex-col lg:flex-row justify-center lg:justify-start items-center px-8 bg-[#ff00d4]">
                <img src="/9.png" alt="" className="absolute w-300 -left-10 z-0" />
                <div className="w-full max-w-126 h-76 mx-6 bg-white border-2 border-black flex items-center justify-center z-50">
                    <p>Foto</p>
                </div>
                <div className="w-full max-w-136 md:px-8 z-50">
                    <h4 className="text-3xl font-bold">20 de novembro</h4>
                    <h4 className="text-3xl font-bold">à 24 de dezembro</h4>
                    <p className="text-2xl mb-6 mt-2">Venha viver a arte, o brilho e a magia do Natal no Shopping VillaLobos. </p>
                    <h4 className="text-[18px] md:text-[21px] font-bold">- R$ 130,00 (inteira) / 65,00 (meia entrada)</h4>
                    <h4 className="text-[21px] font-bold">- Sujeita à lotação</h4>
                    <h4 className="text-[21px] font-bold">- Para todas as idades</h4>
                    <img src="/6.png" alt="" className="hidden md:block absolute right-0 -top-40" />
                    <a className="px-8 py-4 absolute bottom-32 lg:bottom-42 rounded-full text-lg font-semibold translate-y-20 mt-6 text-white bg-[#030332] text-center ">Quero participar do Villa Glow</a>
                </div>
            </section>
            <section id="third-fold" className="w-screen relative flex flex-col md:flex-row justify-center lg:justify-end px-8 py-24 items-center bg-[#030332]">
                <img src="/10.png" alt="" className="absolute w-300 -right-10 z-0 opacity-40" />
                <div className="md:mr-6 text-white z-50">
                    <h4 className="text-[28px] font-extrabold text-center md:text-end">Localização</h4>
                    <h5 className="text-[21px] font-bold text-center md:text-end">Shopping Villa Lobos <br />piso 3</h5>
                    <a
                        href="https://maps.google.com/?q=Av.+Dra.+Ruth+Cardoso,+4777+-+Jardim+Universidade+Pinheiros,+São+Paulo+-+SP,+05477-000"
                        target="_blank"
                        className="bg-[#ff00d4] flex justify-center hover:bg-[#ff00d4] mt-6 mb-4 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                    >
                        Como chegar
                    </a>
                </div>
                <img src="/1.png" alt="" className="hidden md:block absolute right-0 -top-40 z-0" />
                <img src="/imagem-shopping-villa-lobos.png" alt="" className="w-126 lg:mr-36 z-80" />
            </section>
            <footer className="bg-[#030332] border-t-2 border-[#00CB01] h-56 flex justify-center items-center gap-4">
                <img src="/logo-villa-lobos.png" alt="Logo Villa Lobos" className="w-40 h-auto object-contain" />
                <img src="/logo-allos.png" alt="Logo Allos" className="w-25 h-auto object-contain border-l-2 border-white pl-3" />
            </footer>

        </>
    )
}

export default App
