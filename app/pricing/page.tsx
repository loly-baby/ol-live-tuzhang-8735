const tiers = [
  { title: "Stamp one file", price: "$2.9", points: ["Place a saved stamp on one image or PDF", "Export the final stamped file", "Fast for one-off workflows"] },
  { title: "Extract one stamp", price: "$4.9", points: ["Upload a phone photo", "Auto-remove paper background", "Save transparent PNG"] },
  { title: "Extract + stamp", price: "$6.9", points: ["Digitize a real stamp", "Use it on a new file right away", "Best first-time package"] }
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">pricing</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">Price the workflow, not the subscription.</h1>
        <p className="mt-4 text-lg text-slate-600">Users usually want one practical outcome: extract the stamp, reuse it, and export the file. The MVP prices that outcome directly.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">{tier.title}</h2>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{tier.price}</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              {tier.points.map((point) => <li key={point}>• {point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
