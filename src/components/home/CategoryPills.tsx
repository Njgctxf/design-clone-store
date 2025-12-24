import { Button } from "@/components/ui/button";
import { Smartphone, Headphones, Watch, Battery, ShieldCheck } from "lucide-react";

const pills = [
  { icon: Smartphone, label: "Smartphones", active: true },
  { icon: Headphones, label: "Audio & Speakers", active: false },
  { icon: Watch, label: "Smartwatches", active: false },
  { icon: Battery, label: "USB cables & doc", active: false },
  { icon: ShieldCheck, label: "Essential Items", active: false },
];

const CategoryPills = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {pills.map((pill) => (
            <Button
              key={pill.label}
              variant={pill.active ? "pillActive" : "pill"}
              size="pill"
              className="flex items-center gap-2 shrink-0"
            >
              <pill.icon className="h-4 w-4" />
              {pill.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPills;
