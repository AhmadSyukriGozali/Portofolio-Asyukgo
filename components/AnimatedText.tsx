// Teks yang naik huruf demi huruf lalu keluar, berulang (seperti di situs referensi).
export default function AnimatedText({ text }: { text: string }) {
  return (
    <span aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span
          key={`${character}-${index}`}
          aria-hidden="true"
          className="char"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {character === " " ? " " : character}
        </span>
      ))}
    </span>
  );
}
