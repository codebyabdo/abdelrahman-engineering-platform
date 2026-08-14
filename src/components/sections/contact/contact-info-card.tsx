import {
  Clock,
  Mail,
  MapPin,
} from "lucide-react";

import {
  HoverCard,
  StaggerItem,
} from "@/components/animations/motion";

import { PERSONAL_INFO } from "@/lib/constants/personal-data";
import { ContactSocialLinks } from "./contact-social-links";


interface ContactInfoCardProps {
  time: string;
}

export function ContactInfoCard({
  time,
}: ContactInfoCardProps) {
  return (
    <>
      <StaggerItem>
        <HoverCard>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-8 shadow-xl">
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
                Current Availability
              </h3>

              <div className="space-y-4">
                {/* Availability */}
                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>

                  <span>{PERSONAL_INFO.availability}</span>
                </div>

                {/* Contact Details */}
                <div className="space-y-3 pt-2 font-mono text-xs text-white/70">
                  <ContactInfoRow
                    icon={<Mail className="h-4 w-4" />}
                    value={PERSONAL_INFO.email}
                  />

                  <ContactInfoRow
                    icon={<MapPin className="h-4 w-4" />}
                    value={PERSONAL_INFO.location}
                  />

                  <ContactInfoRow
                    icon={<Clock className="h-4 w-4" />}
                    value={`Local Time: ${
                      time || "12:00 PM"
                    } (Cairo, UTC+3)`}
                  />
                </div>
              </div>

              {/* Social */}
              <div className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
                  Social Channels
                </h4>

                <ContactSocialLinks />
              </div>
            </div>
          </div>
        </HoverCard>
      </StaggerItem>

      {/* Response Window */}
      <StaggerItem>
        <div className="rounded-2xl border border-white/10 bg-white/2 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/10">
              <Clock className="h-4 w-4 text-blue-400" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Response Window
              </h4>

              <p className="text-xs leading-relaxed text-white/45">
                Messages are typically reviewed and answered within
                24 hours.
              </p>
            </div>
          </div>
        </div>
      </StaggerItem>
    </>
  );
}

function ContactInfoRow({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0 text-blue-400">
        {icon}
      </span>

      <span className="truncate">{value}</span>
    </div>
  );
}