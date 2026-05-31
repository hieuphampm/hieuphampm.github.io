export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 relative z-10 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Phuoc Minh Hieu PHAM.</p>
      </div>
    </footer>
  );
}
