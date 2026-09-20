import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Seo } from "./components/Seo";

// PROJECT BEACON
// Route: "/" is registered in AppRouter and wrapped by Layout.
// Connects to: Journal for thinking, Lab for experiments, Work for proof.
// Shared shell: Layout owns the persistent Navbar and animated background.
export default function App() {
  return (
    <div className="min-h-screen text-foreground flex flex-col items-center justify-center px-8 py-16">
      <Seo
        title="h777 | Property Management Operations Tools"
        description="h777 is a public portfolio for property management operations tools, field notes, workflow experiments, and PMC consulting by Carlos Sanchez."
        path="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "h777",
            url: "https://h777.dev",
            description:
              "Property management operations tools, field notes, workflow experiments, and PMC consulting.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Carlos Sanchez",
            alternateName: "hypnoticdata777",
            url: "https://h777.dev",
            sameAs: ["https://github.com/hypnoticdata777"],
            knowsAbout: [
              "Property management operations",
              "Maintenance workflows",
              "PMC consulting",
              "PropTech tools",
              "Remote operations",
            ],
          },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="max-w-3xl w-full text-center space-y-16 relative z-10"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeIn" }}
            className="flex items-center justify-center gap-3"
          >
            <h1 className="text-5xl tracking-wider">h777</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeIn" }}
            className="text-lg text-foreground/60 leading-relaxed tracking-wide"
          >
            Creating, iterating, and leading frictionless operations, systems,
            and tools toward better property management experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeIn" }}
          className="space-y-12"
        >
          <div className="h-px bg-foreground/10" />

          <div className="space-y-6">
            <h2 className="text-brand text-display leading-tight font-bold tracking-[0.02em]">
              Making messy operations behave themselves.
            </h2>

            <div className="space-y-4 text-foreground/80 leading-loose text-lg">
              <p className="italic">Vendor and maintenance chaos.</p>
              <p className="italic">Scattered requests, proof, and follow-ups.</p>
              <p className="italic">Tech gaps and manual admin overload.</p>
            </div>
          </div>

          <div className="h-px bg-foreground/10" />

          <div className="space-y-6">
            <p className="text-foreground/90 leading-loose text-lg">
              I have spent 7+ years inside property management operations,
              managed 250+ client accounts remotely, led small remote teams,
              and spent more than 10 years working across service, systems,
              clients, and distributed operations.
            </p>
            <p className="text-foreground/60 leading-loose text-lg italic">
              Now I am turning that experience into open-source tools,
              workflow experiments, practical systems, and consulting support
              for owners, investors, managers, admins, and teams trying to make
              property management less painful.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16"
        >
          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">1</div>
            <p className="text-foreground/70 leading-relaxed">Transparency.</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">2</div>
            <p className="text-foreground/70 leading-relaxed">Outcomes.</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="font-display text-brand opacity-60 text-xl">3</div>
            <p className="text-foreground/70 leading-relaxed">Less friction.</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.5, ease: "easeIn" }}
        className="mt-32 flex flex-col items-center gap-5 relative z-10 w-full max-w-md"
      >
        <p className="text-foreground/45 tracking-wide leading-relaxed">
          The journal holds the thinking. The lab tests the experiments. Work
          holds the tools that have earned a clearer case study.
        </p>

        <div className="flex flex-wrap justify-center gap-3 w-full">
          <Link
            to="/journal"
            className="px-6 py-2.5 bg-brand/10 border border-brand/30 text-brand rounded hover:bg-brand/20 transition-colors tracking-wide"
          >
            Read Journal
          </Link>
          <Link
            to="/lab"
            className="px-6 py-2.5 border border-foreground/15 text-foreground/70 rounded hover:border-foreground/30 hover:text-foreground transition-colors tracking-wide"
          >
            Visit Lab
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
