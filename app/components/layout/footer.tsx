export default function Footer() {
  return (
    <footer className="flex justify-center align-center items-center mt-auto max-w-screen-xl mx-auto ">
      <div className="flex flex-col justify-center items-center w-full py-12 bg-black gap-4 xl:mx-24 md:rounded">
        <img src="/assets/white-logo.png" alt="Logo footer" />
        <p className="montserrat text-white text-[12px] md:text-xl">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
