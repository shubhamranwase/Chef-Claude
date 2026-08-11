import ReactMarkdown from "react-markdown";
export default function ClaudeRecipe({ recipe, ref }) {
  return (
    <div className="Recipe-section-flex">
      <section className="Recipe-section" ref={ref} aria-live="polite">
        <h2>Chef Claude Recommends</h2>
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </section>
    </div>
  );
}
