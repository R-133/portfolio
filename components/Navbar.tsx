export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-sm text-white z-50 flex justify-between px-30">
      <div className="flex justify-center gap-10 py-4 text-lg font-semibold text-cyan-400">
        Дашдор Гэлэгжамц
      </div>
      <ul className="flex justify-center gap-10 py-4 text-lg font-semibold">
        <li><a href="#home" className="hover:text-yellow-400">Нүүр</a></li>
        <li><a href="#about" className="hover:text-yellow-400">Тухай</a></li>
        <li><a href="#skill" className="hover:text-yellow-400">Ур чадвар</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Холбоо барих</a></li>
      </ul>
    </nav>
  );
}
