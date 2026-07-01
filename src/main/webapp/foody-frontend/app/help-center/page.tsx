import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { helpTopics } from "@/lib/home-data";

export default function HelpCenterPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Help Center"
        description="Find answers to common questions or reach our support team."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-zinc-900">Email Support</h3>
          <p className="mt-1 text-sm text-zinc-500">support@bringes.com</p>
          <p className="mt-3 text-xs text-zinc-400">Response within 24 hours</p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-zinc-900">Phone Support</h3>
          <p className="mt-1 text-sm text-zinc-500">+1 (800) 555-0199</p>
          <p className="mt-3 text-xs text-zinc-400">Mon–Sun, 9am – 9pm</p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold text-zinc-900">FAQs</h2>
        {helpTopics.map((topic) => (
          <details
            key={topic.question}
            className="group rounded-2xl border border-zinc-100 bg-white shadow-sm"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-medium text-zinc-900 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {topic.question}
                <span className="text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-zinc-100 px-5 py-4 text-sm leading-relaxed text-zinc-500">
              {topic.answer}
            </p>
          </details>
        ))}
      </div>
    </DashboardLayout>
  );
}
