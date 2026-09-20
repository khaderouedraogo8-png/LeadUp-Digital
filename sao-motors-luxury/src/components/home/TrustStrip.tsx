import { CircuitBoard, Car, BatteryCharging, MapPin } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";

const items = [
  {
    icon: CircuitBoard,
    title: "Diagnostic électronique",
    text: "Codes défaut, capteurs, calculateurs",
  },
  {
    icon: Car,
    title: "Véhicules chinois",
    text: "Spécialisation affirmée et assumée",
  },
  {
    icon: BatteryCharging,
    title: "Thermiques & EV",
    text: "Périmètre clair sur l'électrique",
  },
  {
    icon: MapPin,
    title: "Ouagadougou",
    text: "Atelier local, contact direct",
  },
];

export function TrustStrip() {
  return (
    <Section className="border-b border-border py-10 sm:py-12">
      <Container>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
