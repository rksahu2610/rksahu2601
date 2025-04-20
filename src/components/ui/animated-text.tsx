export default function AnimatedText({ text }: { text: string }) {
    return (
        <div className="leading-loose">
            {text.split("").map((char, index) => (
                <span key={char + String(index)} className="inline-block starting:opacity-25 opacity-100 duration-750 transition-all"
                style={{ transitionDelay: `${500 * (index / 100)}ms` }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    )
}