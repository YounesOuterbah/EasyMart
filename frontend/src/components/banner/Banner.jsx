export default function Banner({
  bgImage,
  overlayColor,
  title,
  subtitle,
  buttonText,
  buttonIcon,
  offerImage,
}) {
  return (
    <div className="flex flex-1 relative p-6" style={{ backgroundColor: overlayColor }}>
      <div>
        <img
          src={bgImage}
          className="h-full absolute top-0 left-0 object-cover opacity-90 -z-[2]"
        />
        <p className="bg-[--color-primary] w-fit py-2 px-6 rounded text-white text-sm">
          {subtitle}
        </p>
        <h2 className="text-[--color-text] py-3 text-xl md:text-3xl">{title}</h2>
        <p className="text-[--color-text-second]">{subtitle}</p>
        <button className="flex items-center gap-2 bg-[--color-primary] text-white p-2 mt-8">
          {buttonText}
          {buttonIcon}
        </button>
      </div>

      <img
        src={offerImage}
        alt="offer"
        className="absolute w-fit h-full object-contain bottom-0 right-0 -z-[1] md:z-[1]"
      />
    </div>
  );
}
