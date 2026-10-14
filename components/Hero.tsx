import Image from "next/image";
import Reveal from "@/components/Reveal";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, MailIcon, WhatsappIcon } from "@/components/Icons";
import { email, githubUrl, whatsappUrl } from "@/data/contact";

const socials = [
  { label: "GitHub", href: githubUrl, Icon: GithubIcon },
  { label: "Email", href: `mailto:${email}`, Icon: MailIcon },
  { label: "WhatsApp", href: whatsappUrl, Icon: WhatsappIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="wrap relative grid gap-y-4 pb-40 pt-28 desk:pb-0 desk:pt-12">
        {/* Sapaan & nama */}
        <Reveal
          origin="bottom"
          delay={0.9}
          className="z-[2] desk:absolute desk:left-12 desk:top-48"
        >
          <h3 className="fs-h2 font-normal text-first">Halo, Saya</h3>
          <h1 className="fs-biggest">
            Ahmad Syukri
            <br />
            Gozali
          </h1>
        </Reveal>

        {/* Foto profil */}
        <Reveal className="relative grid overflow-y-clip">
          <div className="blob-animate left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 desk:h-[450px] desk:w-[450px]" />

          <Image
            src="/images/profile/Foto_Transparan.png"
            alt="Ahmad Syukri Gozali"
            width={600}
            height={800}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1150px) 600px, 320px"
            className="w-[320px] justify-self-center desk:w-[600px]"
          />

          <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,hsl(240_100%_2%/0)_60%,hsl(240_100%_2%)_85%)] desk:left-1/2 desk:right-auto desk:w-[700px] desk:-translate-x-1/2 desk:bg-[linear-gradient(180deg,hsl(240_100%_2%/0)_60%,hsl(240_100%_2%)_95%)]" />
        </Reveal>

        {/* Peran */}
        <Reveal
          origin="bottom"
          delay={1.2}
          className="absolute bottom-8 z-[2] justify-self-center desk:bottom-auto desk:right-4 desk:top-48 desk:justify-self-auto"
        >
          <h3 className="fs-h2 text-center font-normal text-first desk:text-left">
            Mahasiswa
          </h3>

          <h2 className="fs-bigger overflow-hidden text-center desk:fs-biggest desk:text-left">
            <AnimatedText text="Informatika" />
          </h2>

          <h2 className="fs-bigger -translate-y-1 overflow-hidden text-center desk:fs-biggest desk:-translate-y-2 desk:text-left">
            <AnimatedText text="& Developer" />
          </h2>
        </Reveal>

        {/* Media sosial */}
        <Reveal
          delay={1.2}
          className="absolute left-0 z-[2] flex flex-col gap-y-3 self-center"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="block text-title transition-[transform,color] duration-[400ms] hover:translate-x-1 hover:text-first"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
