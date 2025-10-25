import { useEffect, useRef, useState } from "react";

interface VideoComponentProps {
    src: string;
    poster: string; 
    className?: string; 
}

export const VideoComponent: React.FC<VideoComponentProps> = ({ src, poster, className }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "true");
        video.setAttribute("webkit-playsinline", "true");

        const tryPlay = async () => {
            try {
                await video.play();
            } catch (err) {
                console.log("Autoplay falhou:", err);

                const playOnInteraction = () => {
                    video.play().catch((e) => console.log("Play após interação falhou:", e));
                    document.removeEventListener("touchstart", playOnInteraction);
                    document.removeEventListener("click", playOnInteraction);
                };
                document.addEventListener("touchstart", playOnInteraction, { once: true });
                document.addEventListener("click", playOnInteraction, { once: true });
            }
        };

        const handleLoadedData = () => {
            setLoaded(true);
            tryPlay();
        };

        video.addEventListener("loadeddata", handleLoadedData);

        return () => {
            video.removeEventListener("loadeddata", handleLoadedData);
        };
    }, []);

    return (
        <div className={` ${className || ""}`}>
            {!loaded && (
                <img
                    src={poster}
                    alt="Pré-carregamento do vídeo"
                    loading="eager"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                />
            )}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            >
                <source src={src} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
            </video>
        </div>
    );
};