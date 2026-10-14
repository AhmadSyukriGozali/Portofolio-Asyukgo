export default function Footer() {
  return (
    <footer className="relative grid gap-y-4 overflow-hidden pb-8 pt-16 text-center">
      <div className="blob-animate -bottom-12 -right-12" />

      <p className="text-title">
        Hak Cipta <span className="text-first">©</span>{" "}
        <span className="font-second">{new Date().getFullYear()}</span> Ahmad
        Syukri Gozali
      </p>
    </footer>
  );
}
