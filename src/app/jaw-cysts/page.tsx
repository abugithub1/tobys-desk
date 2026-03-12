import FlashcardDeck from "@/components/FlashcardDeck";

export default function JawCystsPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl font-bold text-rose-900">Jaw Cysts Flashcards</h1>
        <p className="text-rose-400 mt-2">
          Click the card to flip it. Identify the cyst from the slide, then check your answer.
        </p>
      </div>
      <FlashcardDeck />
    </div>
  );
}
