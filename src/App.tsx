import { Header } from "./components/header"

function App() {
    document.addEventListener("DOMContentLoaded", () => {
        const video = document.querySelector("video");
        if (video) {
            video.muted = true; // Garante que o vídeo esteja sem som
            video.playsInline = true; // Garante que o vídeo não entre em tela cheia
            video.play().catch((err) => console.log("Autoplay falhou:", err));
        }
    });
    return (
        <>
            <Header />
            <section id="hero-fold" className="w-screen bg-black/50 shadow-2xl min-h-screen relative flex items-center justify-center">
                <video
                    autoPlay
                    loop
                    preload="auto"
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/hero-desktop.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="flex flex-col items-center px-8 lg:scale-130 z-10">
                    <img src="/logo-villa-lobos.png" alt="logo-villa-lobos" className="w-30" />
                    <h1 className="text-7xl whitespace-nowrap text-[#C3973B]">Villa Glow</h1>
                    <h4 className="text-white text-2xl">Pintando no escuro</h4>
                    <img src="/sublinhado.png" alt="sublinhado" className="w-25" />
                    <h6 className="text-white text-center">
                        Uma <span className="font-bold">experiência brilhante</span>
                        <br /> para <span className="font-bold">toda a família</span>
                    </h6>
                    <p className="text-[#C3973B] text-center font-bold">20/11 a 24/12 - Piso 3</p>
                    <a
                        target="_blank"
                        href="https://www.sympla.com.br/evento/villa-glow-pintando-no-escuro/3187225?_gl=1*1k6tqsb*_gcl_au*OTkwMzcyMzkzLjE3NjEyNTU3NDMuMTQwNzU4MzAwNS4xNzYxMzI4NTE0LjE3NjEzMjg2MDk.*_ga*MTQ5MTg4MDgyOC4xNzYxMjU1NzQ0*_ga_KXH10SQTZF*czE3NjEzMjcwMDMkbzUkZzEkdDE3NjEzMjg5ODMkajI2JGwwJGgxNDY0MTM3ODMz"
                        className="px-8 pt-1 pb-1.5 rounded-full text-lg font-semibold text-[#030332] bg-[#C3973B] text-center mt-4"
                    >
                        Quero participar <br className="md:hidden" /> do Villa Glow
                    </a>
                </div>
            </section>
            <div id="first-fold" className=" min-h-32 bg-[#C3973B] flex flex-col justify-center items-center">
                <h4 id="text-hero" className=" sm:text-2xl text-[#030332] font-bold text-center px-3 py-4 z-50 relative">Um ateliê de pintura neon no escuro para toda a família se divertir e criar lembranças!</h4>
            </div>
            <section className="overflow-hidden w-screen flex flex-col relative bg-gradient-to-b from-[#030332] to-[#010127]">
                <div className="relative w-screen min-h-76 pt-12 flex justify-center items-center">
                    <img src="/10.png" alt="" className="absolute opacity-30" />
                    <img src="/logo-villa-lobos.png" alt="" className="absolute w-40 top-7 md:top-11" />
                    <p className="text-md md:text-[21px] max-w-246 text-[#ffffff] text-center px-4 py-12 md:py-8 z-80">Neste Natal, o Shopping Villa Lobos convida você para uma experiência cheia de cor e magia: o Vila Glow – Pintando no Escuro. Entre em um ambiente iluminado por luzes blacklight, vista seu avental e solte a criatividade com tintas neon que brilham no escuro! Crianças e adultos poderão criar suas próprias obras de arte e levar para casa um pedacinho dessa experiência inesquecível</p>
                    {/* <img src="/2.png" alt="" className="hidden md:block absolute -right-50 -top-27" /> */}
                    {/* <img src="/3.png" alt="" className="hidden md:block absolute -left-20 -bottom-80" /> */}
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    playsInline
                    className="translate-y-8"
                >
                    <source src="/video-menina-desenhando.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
            </section>
            <section id="second-fold" className="w-screen overflow-hidden h-300 bg-[#C3973B] md:h-250 py-12 md:py-0 relative flex flex-col lg:flex-row justify-center lg:justify-start items-center">
                <video
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    playsInline
                    className="relative w-full lg:h-full max-w-md h-160 z-10 object-cover md:ml-0"
                >
                    <source src="/foto-mulher-desenhando.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="w-full h-full flex flex-col gap-3 max-w-136 px-4 lg:pt-36 lg:ml-18 pt-10 text-center md:text-start md:px-8 z-50">
                    <h4 className="text-3xl font-bold">20 de novembro</h4>
                    <h4 className="text-3xl font-bold">à 24 de dezembro</h4>
                    <p className="text-2xl mb-6 mt-2">Venha viver a arte, o brilho e a magia do Natal no Shopping Villa Lobos. </p>
                    <h4 className="text-[18px] md:text-[21px] font-bold">- R$ 130,00 (inteira) / 65,00 (meia entrada)</h4>
                    <h4 className="text-[18px] md:text-[21px] font-bold">- Sujeita à lotação</h4>
                    <h4 className="text-[18px] md:text-[21px] font-bold">- Para todas as idades</h4>
                    <img src="/6.png" alt="" className="hidden md:block absolute right-0 -top-40" />
                    <a
                        target="_blank"
                        href="https://www.sympla.com.br/evento/villa-glow-pintando-no-escuro/3187225?_gl=1*1k6tqsb*_gcl_au*OTkwMzcyMzkzLjE3NjEyNTU3NDMuMTQwNzU4MzAwNS4xNzYxMzI4NTE0LjE3NjEzMjg2MDk.*_ga*MTQ5MTg4MDgyOC4xNzYxMjU1NzQ0*_ga_KXH10SQTZF*czE3NjEzMjcwMDMkbzUkZzEkdDE3NjEzMjg5ODMkajI2JGwwJGgxNDY0MTM3ODMz"
                        className="px-3 py-4 rounded-full text-lg font-semibold  mt-9 text-white bg-[#030332] text-center "
                    >
                        Quero participar do Villa Glow
                    </a>
                </div>
                <div className="w-full h-10 bg-[#030332] absolute bottom-0 z-50"></div>
            </section>
            <section id="hero-fold" className="w-screen bg-black/50 shadow-2xl min-h-screen relative flex items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/video-fold-2.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="flex flex-col items-center px-8 lg:scale-130 z-10">
                    <img src="/logo-villa-lobos.png" alt="logo-villa-lobos" className="w-30" />
                    <h1 className="text-7xl whitespace-nowrap text-[#C3973B]">Villa Glow</h1>
                    <h4 className="text-white text-2xl">Pintando no escuro</h4>
                    <img src="/sublinhado.png" alt="sublinhado" className="w-25" />
                    <a
                        target="_blank"
                        href="https://www.sympla.com.br/evento/villa-glow-pintando-no-escuro/3187225?_gl=1*1k6tqsb*_gcl_au*OTkwMzcyMzkzLjE3NjEyNTU3NDMuMTQwNzU4MzAwNS4xNzYxMzI4NTE0LjE3NjEzMjg2MDk.*_ga*MTQ5MTg4MDgyOC4xNzYxMjU1NzQ0*_ga_KXH10SQTZF*czE3NjEzMjcwMDMkbzUkZzEkdDE3NjEzMjg5ODMkajI2JGwwJGgxNDY0MTM3ODMz"
                        className="px-8 pt-1 pb-1.5 rounded-full text-lg font-semibold text-[#030332] bg-[#C3973B] text-center mt-4"
                    >
                        Quero participar <br className="md:hidden" /> do Villa Glow
                    </a>
                </div>
            </section>
            <section id="third-fold" className="w-screen relative flex flex-col md:flex-row justify-center lg:justify-end px-8 py-24 items-center bg-[#030332]">
                <div className="md:mr-6 text-white z-50">
                    <h4 className="text-[28px] font-extrabold text-center md:text-end">Localização</h4>
                    <h5 className="text-[21px] font-bold text-center md:text-end">Shopping Villa Lobos <br />Piso 3</h5>
                    <a
                        href="https://maps.google.com/?q=Av.+Dra.+Ruth+Cardoso,+4777+-+Jardim+Universidade+Pinheiros,+São+Paulo+-+SP,+05477-000"
                        target="_blank"
                        className="bg-[#C3973B] flex justify-center mt-6 mb-4 text-[#030332] font-bold py-2 px-4 rounded-full transition-colors duration-200"
                    >
                        Como chegar
                    </a>
                </div>
                {/* <img src="/1.png" alt="" className="hidden md:block absolute right-0 -top-40 z-0" /> */}
                <img src="/imagem-shopping-villa-lobos.png" alt="" className="w-126 lg:mr-36 z-80" />
            </section>
            <footer className="bg-[#030332] border-t-2 border-[#C3973B] h-36 flex justify-center items-center gap-4">
                <a target="_blank" href="https://shoppingvillalobos.com.br/?cnddefault=true&utm_campaign=road_villa-lobos_perene_perene-institucional_24/07_institucional_trafego_consideracao&utm_source=google-search&utm_medium=search&utm_content=trafego_search_google_google-search_cpc_institucional_palavras-chave_search_perene-institucional_search_perene_consideracao&gad_source=1&gad_campaignid=21470813672&gbraid=0AAAAAC9H7t8T_6WRifcjrD7sHsYtokyh8&gclid=CjwKCAjwx-zHBhBhEiwA7Kjq608DzcGwaP1MPv1S2aMPxUstexYPvhrnlZPgjOa7P3au8noNHAf6LhoCdIwQAvD_BwE">
                    <img src="/logo-villa-lobos.png" alt="Logo Villa Lobos" className="w-40 h-auto object-contain" />

                </a>
                <a target="_blank" href="https://allos.co/">
                    <img src="/logo-allos.png" alt="Logo Allos" className="w-25 h-auto object-contain border-l-2 border-white pl-3" />

                </a>
            </footer>

        </>
    )
}

export default App
