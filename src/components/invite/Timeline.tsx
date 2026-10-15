import { invite } from "@/data/invite";
import { Reveal } from "./Reveal";

interface TimelineEvent {
  title: string;
  time: string;
}

interface TimelineItem {
  title: string;
  when: string;
  note?: string;
  venue?: string;
  events?: TimelineEvent[];
}

export function Timeline() {
  const timelineItems = invite.timeline as TimelineItem[];

  return (
    <ol className="mx-auto max-w-md px-6">
      {timelineItems.map((item, i) => (
        <Reveal key={item.title} delay={i * 120}>
          <li className="relative border-l border-primary/25 pb-8 pl-6 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-gold)]" />

            <h3 className="font-display text-2xl font-semibold text-primary">{item.title}</h3>

            <p className="font-display text-lg text-foreground">{item.when}</p>

            {item.events?.map((event) => (
              <p key={event.title} className="font-display mt-1 text-lg text-foreground">
                <span>{event.title}:</span> {event.time}
              </p>
            ))}

            <p className="font-display mt-1 text-lg text-foreground">{item.note}</p>

            <p className="font-display mt-1 text-lg text-foreground">{item.venue}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
