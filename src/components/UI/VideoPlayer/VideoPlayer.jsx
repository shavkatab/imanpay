import cls from "./VideoPlayer.module.scss";
export default function VideoPlayer({ source }) {
  return (
    <div className={cls.player}>
      <iframe
        className={cls.iframe}
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
