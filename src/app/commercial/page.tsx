import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function Commercial() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-brown self-center">Commercial Roofing</h3>
        <p>
          The construction and maintenance of commercial roofing systems fall to commercial roofers like Divine Metal
          and Roofing, who specialize in installing, maintaining, renovating, and repairing roofs of commercial
          establishments.
        </p>
        <p>
          The main goal of a roofing system is to keep the contents of a building dry and maintain its integrity. In the
          last 50 years, the variety of low slope or flat commercial roofing options has grown considerably.
        </p>
        <p>
          Non-sloped or flat roofs are typically used for business buildings because they are cheaper to set up and
          allow increased space for air conditioning and heating units. There is a range of factors to be considered
          when deciding on the ideal material for low-sloped roofs. They include
        </p>
        <ul className="list-disc pl-8">
          <li>TPO roofing</li>
          <li>EPDM roofing</li>
          <li>Metal roofing</li>
        </ul>
      </section>

      <CustomContentCard
        placeImageRight
        title="TPO"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/08/TPO-2.jpg"
      >
        <p>
          The single-ply roofing membrane most preferred is TPO (Thermoplastic polyolefin). It provides long-term
          durability and other benefits like a white reflective surface that reduces cooling costs, being eco-friendly
          because it produces no chlorine or toxins, and membranes available in various thicknesses and roll widths.
          Other benefits include
        </p>
        <ul className="list-disc pl-8">
          <li>Acid resistance</li>
          <li>Alcohol and solvent resistance</li>
          <li>Cold resistance</li>
          <li>Easy installation, repair, and maintenance</li>
          <li>UV resistance</li>
        </ul>
        <p>
          It is an excellent choice for roofs above restaurants and establishments that emit oil from the ventilation
          system.
        </p>
      </CustomContentCard>
      <CustomContentCard title="EPDM" imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/edm.jpg">
        <p>
          EPDM (Thermoset Roof Membrane) is also referred to as ‘rubber roofing.’ The advantages of this single-ply
          membrane are its ability to withstand extreme temperatures. It contracts and expands with the building. Other
          benefits include
        </p>
        <ul className="list-disc pl-8">
          <li>Cost</li>
          <li>Durable</li>
          <li>Lightweight</li>
          <li>Scratch resistant</li>
        </ul>
        <p>
          Minimal maintenance is required. It resists ozone and UV radiation. It is usually black but still serves as a
          cool roof because it helps deflect the sun’s rays and keeps the building cooler.
        </p>
      </CustomContentCard>
      <CustomContentCard
        placeImageRight
        title="Metal"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/08/Commercial-Metal.jpg"
      >
        <p>
          Metal roofing is a trendy commercial roof choice. When properly installed, it offers long-term performance.
          Some metal roofing systems have lasted more than 100 years. The most common metal roofs are stainless steel,
          tin, copper, aluminum, stone-coated steel, and corrugated galvanized steel.
        </p>
        <p>The benefits of metal roofing are</p>
        <ul className="list-disc pl-8">
          <li>Durability</li>
          <li>Fire resistance</li>
          <li>Holds up well in snow</li>
          <li>Versatile</li>
          <li>Wind resistant</li>
        </ul>
      </CustomContentCard>

      <h3 className="text-2xl font-bold text-default">Commercial Roofing Servicess</h3>
      <p>The types of commercial roofing services we supply are</p>
      <ul className="list-disc pl-8">
        <li>Roof replacement</li>
        <li>Roof recovery</li>
        <li>Roof renewal</li>
        <li>Roof rehabilitation</li>
        <li>New construction</li>
      </ul>
      <p>
        When replacing a roof, we completely tear off the old roof and install a new roofing system. We work directly
        with consultants or customers to develop the plan for a total replacement when the intent of the roof deck is
        changing, or the roof is near the end of its lifespan.
      </p>

      <p>
        A roof is installed over an existing roof when performing roof recovery. It may not be necessary to tear off a
        roof if the condition of the substrate is sound. Installing new roofs over old ones reduces the waste and labor
        required.
      </p>

      <p>
        Roof renewal is a standard procedure for coated roof systems. It is a fluid applied to a roof with a substrate
        in good condition. The process extends the lifespan of the roof and may renew an expiring warranty.
      </p>

      <p>
        Roof rehabilitation includes fixing an existing roof to function and perform like new. The major deficiencies
        are identified and repaired before a costly replacement is necessary.
      </p>

      <p>
        We work directly with customers or hand in hand with a general contractor when installing a roof on a new
        construction project.
      </p>

      <aside></aside>
    </div>
  );
}
