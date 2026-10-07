import type { ComponentProps } from "react";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
} from "@/components/ui/testimonials-13-utils/logos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Marquee } from "@/components/ui/testimonials-13-utils/marquee";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Shinde",
    designation: "Head of Corporate Travel & Admin",
    company: "Tata Steel",
    testimonial:
      "Speedways has consistently delivered exceptional on-time reliability across manufacturing sites and city offices. Transparent digital duty slips have made month-end invoicing seamless.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    logo: Logo01,
  },
  {
    id: 2,
    name: "Ananya Deshmukh",
    designation: "Regional Procurement Lead",
    company: "Volvo Group",
    testimonial:
      "From executive delegations to zero-wait airport transfers, the professional chauffeurs and pristine vehicle quality reflect our enterprise safety and ESG commitments.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    logo: Logo02,
  },
  {
    id: 3,
    name: "Vikram Nair",
    designation: "Senior Mobility Director",
    company: "ATPI",
    testimonial:
      "Managing enterprise travel across multiple metro hubs requires flawless coordination. Speedways 24×7 command centre and rapid lead times are truly world-class.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    logo: Logo06,
  },
  {
    id: 4,
    name: "Pooja Ramanathan",
    designation: "Enterprise Administration Lead",
    company: "Newspace India",
    testimonial:
      "Our leadership and visiting delegates demand punctual, secure mobility. Speedways delivers complete peace of mind with continuous telemetry and dedicated SPOC support.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    logo: Logo05,
  },
  {
    id: 5,
    name: "Karan Mehta",
    designation: "Operations & Logistics Manager",
    company: "DABICO Airport",
    testimonial:
      "Airport transfers across India have never been smoother. Real-time flight tracking and curbside chauffeur meet-and-greet ensure zero wait times for our global teams.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    logo: Logo07,
  },
  {
    id: 6,
    name: "Sanjay Singhania",
    designation: "VP Corporate Administration",
    company: "LUX INDUSTRY",
    testimonial:
      "Speedways has been an invaluable partner for intercity outstation and executive rentals. SLA-backed vehicles and 5% GST billing provide full compliance.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    logo: Logo09,
  },
];

const Testimonials = () => (
  <div className="px-6 py-20">
    <div className="text-center max-w-3xl mx-auto mb-10">
      <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
        Enterprise Mobility Case Studies
      </span>
      <h2 className="text-center font-bold text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
        Enterprise Success Stories
      </h2>
      <p className="mt-2.5 text-center text-slate-600 text-sm sm:text-base leading-relaxed">
        Proven execution and verified trust from procurement heads, corporate travel desks, and administration leaders across India
      </p>
    </div>
    <div className="mask-x-from-80% mt-8 space-y-px border border-slate-200/90 rounded-3xl bg-slate-50/60 overflow-hidden shadow-sm">
      <Marquee className="py-0 [--duration:50s] [--gap:0px]" pauseOnHover>
        <TestimonialList />
      </Marquee>
    </div>
  </div>
);

const TestimonialList = ({ className, ...props }: ComponentProps<"div">) =>
  testimonials.map((testimonial) => (
    <div
      className="-mx-1 flex w-full max-w-sm flex-col odd:flex-col-reverse"
      key={testimonial.id}
    >
      <div
        className={cn("rounded-xl border bg-background shadow-xs/3", className)}
        {...props}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage
                  className="object-cover"
                  src={testimonial.avatar}
                />
                <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
                  {testimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.designation}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold shrink-0">
              <span>{testimonial.company}</span>
            </div>
          </div>
          <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
        </div>
      </div>
      <div className="mask-y-from-75% mask-x-from-75% relative flex h-42 w-96 items-center justify-center p-6">
        <testimonial.logo className="h-20 w-50 text-muted-foreground" />

        <div
          className="absolute inset-0 isolate -z-1 opacity-15"
          style={{
            backgroundImage: `
        linear-gradient(to right, var(--color-muted-foreground) 1px, transparent 1px),
        linear-gradient(to bottom, var(--color-muted-foreground) 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
    </div>
  ));

export default Testimonials;
