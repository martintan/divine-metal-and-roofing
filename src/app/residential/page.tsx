import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function Residential() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-brown self-center">Residential Roofing</h3>
        <p>
          Residential roofing usually has a steep slope. The products below are necessary for a quality roofing system
          for a home, garage, or residential building. Products include shingles, underlayment, and accessories.
        </p>
      </section>
      <CustomContentCard
        title="Shingles"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/Residential-2.jpg"
      >
        <p>
          Divine Metal and Roofing has high-quality shingles in a broad spectrum of colors and styles. The most used
          product is asphalt roofing shingles. There are three main categories of shingles. They include strip,
          dimensional, and premium roofing shingles.
        </p>
        <p>
          The most basic are strip shingles. They are single-layer shingles that are designed to look like slate.
          Dimensional shingles are heavier in weight. They are multi-layered or dual-layered products. Premium shingles
          are usually laminated. They provide an increased design element and enhanced aesthetics.
        </p>
        <p className="text-2xl font-bold text-default">Underlayment</p>
        <p>
          The underlayment is a water-resistant layer beneath the shingles. Waterproofing underlayment prevents leaks
          from wind-driven rain and ice dams in vulnerable areas.
        </p>
      </CustomContentCard>

      <section>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-default">Accessories</h3>
          <p>
            Accessory shingles finish the hips and ridges of a roof. They are applied over the shingles. There is a
            variety of options that complement the shingles’ performance and appearance.
          </p>
          <h3 className="text-2xl font-bold text-default">Attic Ventilation</h3>
          <p>
            Proper attic ventilation systems create airflow from the outside through the attic, making drier attics in
            the winter and cooler attics during the summer. It is a system that balances air intake and air exhaust.
          </p>
          <h3 className="text-2xl font-bold text-default">Starter Shingles</h3>
          <p>
            Starter shingles are used to save application time. They work specifically with various shingle styles for
            consistent performance and appearance.
          </p>
          <h3 className="text-2xl font-bold text-default">Metal/Standing Seam Roofs</h3>
          <p>
            A variety of metal roofing systems are used for residential structures. Two common types are flatlock metal
            roofs and standing seam metal roofs. Metal is also used in box gutter linings, valleys, trims, wall
            flashing, and chimney flashing.
          </p>
          <p>
            Roofing professionals recommend metal roofs because of their resistance to fire, reflectivity, resistance to
            wind, appearance, durability, and longevity. Several design considerations go into successful metal roofing
            installation. They include
          </p>
          <ul className="list-disc pl-8">
            <li>Roof pitch</li>
            <li>Metal type</li>
            <li>Metal thickness</li>
            <li>Fastener type</li>
            <li>Thermal movement</li>
            <li>Slip sheets and underlayment</li>
            <li>Metal finish</li>
          </ul>
          <p>
            After specifying the design, skilled Divine Metal and Roofing installs the metal roofing system. The team is
            skilled at soldering needed to install flatlock roofs, flashing, and box gutters. Soldering fuses metal
            seams to ensure they are watertight.
          </p>
          <p>
            Standing seam roofs are becoming more popular. They are installed with concealed fasteners that eliminate
            water infiltration risk at the screw heads.
          </p>
        </div>
      </section>
      <CustomContentCard
        title="Specialty Roofs"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/Slate-Roof.jpg"
        footer={
          <div className="flex flex-col gap-4 mt-8">
            <h3 className="text-4xl font-bold text-primary">Synthetic</h3>
            <p>
              Finding the ideal materials for your roof can be challenging. It takes consideration and planning to make
              a home secure and comfortable. Choosing the suitable material is compulsory in building the perfect home.
            </p>
            <p>
              Synthetic roofing replicates the look of popular materials but is made from a superior composite material
              that is long-lasting. Benefits are
            </p>
            <ul className="list-disc pl-8">
              <li>Long-lasting</li>
              <li>Simple installation</li>
              <li>Eco-friendly</li>
              <li>Fully customizable</li>
            </ul>
          </div>
        }
      >
        <p>
          High-end roofing adds a special touch to a residential building. At Divine Metal and Roofing, we take pride in
          offering a range of specialty roofing materials. Choose the color, material, and style that suits your
          practical and aesthetic needs.
        </p>
        <p>
          We offer synthetic, shake, and slate products. Each is durable, long-lasting, and beautiful. Our
          representatives help choose a color, material, and style and provide a free estimate.
        </p>
      </CustomContentCard>
      <h3 className="text-4xl font-bold text-primary">Shake</h3>
      <p>
        Wood shakes are mainly made of western red cedar. They come in various grades and types. The wood shakes are
        categorized by the level of resistance to fire, impact, and wind. Shake shingles undergo testing and must meet
        performance standards.
      </p>
      <p>
        They may be UL-certified to wind resistance of 245 miles per hour. Ratings of Class 3 and 4 classify them for
        impact. Class 4 is most resistant to damage from impact. Fire ratings are Class A, B, C, or D. Achieving the
        desired fire rating requires adherence to recommendations from the company treating the wood shakes.
      </p>
      <h3 className="text-4xl font-bold text-primary">Slate</h3>
      <p>
        Slate is composed of shingle-like slivers of rock. It is often seen on upscale homes. Slate is nearly
        indestructible and long-lasting. It is an expensive option but affords a very natural look and can be laid in
        various patterns, creating more possibilities.
      </p>

      <aside></aside>
    </div>
  );
}
