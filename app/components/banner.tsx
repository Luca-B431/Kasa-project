export default function Banner({ url, text }: { url: string; text: string }) {
  return (
    <div
      className="relative shadow flex flex-col justify-center items-center rounded-4xl bg-cover bg-center h-60 mx-4 md:mx-24"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute rounded-4xl inset-0 bg-black/40"></div>
      <h1 className="absolute text-l md:text-2xl lg:text-5xl font-bold text-white">
        {text}
      </h1>
    </div>
  );
}
