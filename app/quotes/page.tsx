'use client';

import { useState } from 'react';

const quotes = [
  {
    text: "\"But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.\" \"In fact,\" said Mustapha Mond, \"you're claiming the right to be unhappy.\" \"All right then,\" said the Savage defiantly, \"I'm claiming the right to be unhappy.\" \"Not to mention the right to grow old and ugly and impotent; the right to have syphilis and cancer; the right to have too little to eat; the right to be lousy; the right to live in constant apprehension of what may happen tomorrow; the right to catch typhoid; the right to be tortured by unspeakable pains of every kind.\" There was a long silence. \"I claim them all,\" said the Savage at last.",
    author: "Aldous Huxley",
    work: "Brave New World",
    highlights: ["I'm claiming the right to be unhappy", "I claim them all"],
  },
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
    author: "Theodore Roosevelt",
    work: "The Man in the Arena",
    highlights: ["The credit belongs to the man who is actually in the arena", "at least fails while daring greatly"],
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    work: null,
    highlights: ["it is the courage to continue that counts"],
  },
];

function QuoteCard({ quote }: { quote: typeof quotes[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimit = 200;
  const needsTruncation = quote.text.length > charLimit;

  const highlightText = (text: string, highlights: string[]) => {
    if (!highlights || highlights.length === 0) {
      return <>{text}</>;
    }

    let result = text;
    const parts: { text: string; highlighted: boolean }[] = [];
    let lastIndex = 0;

    const sortedHighlights = [...highlights].sort((a, b) => {
      return text.indexOf(a) - text.indexOf(b);
    });

    sortedHighlights.forEach((highlight) => {
      const index = result.indexOf(highlight, lastIndex);
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push({ text: result.substring(lastIndex, index), highlighted: false });
        }
        parts.push({ text: highlight, highlighted: true });
        lastIndex = index + highlight.length;
      }
    });

    if (lastIndex < result.length) {
      parts.push({ text: result.substring(lastIndex), highlighted: false });
    }

    return (
      <>
        {parts.map((part, i) => (
          part.highlighted ? (
            <span key={i} className="bg-[#E0E0E0] text-[#121212]">
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          )
        ))}
      </>
    );
  };

  const displayText = needsTruncation && !isExpanded
    ? quote.text.substring(0, charLimit) + '...'
    : quote.text;

  return (
    <div className="border-l border-[#E0E0E0] pl-4 py-2">
      <p className="mb-3 leading-relaxed">
        {highlightText(displayText, isExpanded || !needsTruncation ? quote.highlights : [])}
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 text-sm opacity-70 hover:opacity-100 hover:bg-[#E0E0E0] hover:text-[#121212] transition-none px-1"
          >
            [{isExpanded ? 'read_less' : 'read_more'}]
          </button>
        )}
      </p>
      <div className="text-sm opacity-70">
        -- {quote.author}{quote.work && `, ${quote.work}`}
      </div>
    </div>
  );
}

export default function Quotes() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold"># quotes</h1>
      <div className="space-y-8">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
}
