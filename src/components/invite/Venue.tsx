import { MapPin, Navigation } from "lucide-react";
import { invite } from "@/data/invite";

export function Venue() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center">
      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
        {invite.venue.name}
      </h3>
      {invite.venue.subName && (
        <p className="font-display mt-1 text-base sm:text-lg font-medium text-primary">
          {invite.venue.subName}
        </p>
      )}
      <p className="font-display mt-1 text-sm sm:text-base text-muted-foreground">
        {invite.venue.address}
      </p>

      {/* Embedded Google Maps iframe */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-gold/30 shadow-[var(--shadow-soft)] bg-card/60 backdrop-blur-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.3169978755627!2d78.03362497517018!3d29.912774874990156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949159f49bb85%3A0x2bbfdf1cba72b94e!2sTree%20of%20Life%20Ganga%20Dwar%2C%20Haridwar!5e0!3m2!1sen!2sin!4v1792044785173!5m2!1sen!2sin"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Tree of Life Hotel Location Map"
          className="w-full h-[320px] sm:h-[380px]"
        />
      </div>

      <a
        href={invite.venue.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-[1.02]"
      >
        <Navigation className="h-4 w-4" />
        Get Directions in Maps
      </a>
    </div>
  );
}
