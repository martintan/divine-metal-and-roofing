import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function AboutUs() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <p>Divine Metal and Roofing is owned by Oleg and Viktoria Gura and is located in St Louis, MO.</p>

        <p>
          We are a full-service roofing and metalwork company. We offer both residential and commercial roofing services
          throughout the greater St Louis area.
        </p>

        <p>
          Oleg has many years of roofing and metalwork experience, so you can be sure that when you work with us, your
          home or business will be in the hands of a qualified professional.
        </p>

        <p>
          Please feel free to contact us if you have any questions or if you'd like a 100% free, no-obligation quote to
          replace or install a new roof on your commercial or residential property.
        </p>

        <p>We look forward to working on your project!</p>

        <p>Kind regards, Oleg and Viktoria 636-751-2237</p>
      </section>
      <aside></aside>
    </div>
  );
}
