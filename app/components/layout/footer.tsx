export default function Footer() {
  return (
    <footer className="flex justify-center align-center items-center px-12 py-24 mt-auto bg-black w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="assets/white-logo.png" alt="Logo footer" />
        <p className="montserrat text-white text-[12px] md:text-xl">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
