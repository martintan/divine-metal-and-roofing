import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function CommercialRoofServices() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-brown self-center">
          Commercial Roofing Materials - TPO, EPDM, and Metal
        </h3>
        <p>
          If you are a commercial building owner who needs a new roof or wants to have a new structure built, the debate
          over the different types of roofing materials can be overwhelming. Though a roof is barely seen, it is under
          constant assault from the elements that include contaminants, UV rays, extreme heat and cold, wind, and rain.
        </p>
        <p>
          It is the first defense against unwanted and unexpected expenses. Commercial roofs’ recommended material is
          different from those of residential buildings: Divine Metal and Roofing deals in three types of commercial
          roofing - TPO, EPDM, and metal. There are pros and cons for each style.
        </p>
      </section>

      <CustomContentCard
        placeImageRight
        title="TPO"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/tpo.jpg"
      >
        <p>
          A thermoplastic polyolefin roof has become a popular commercial building roof option. TPO is among the most
          inexpensive roofing materials. Because it is white, it reduces heat buildup by reflecting the sun's rays.
        </p>

        <p>
          It is lightweight and can be installed in various ways. TPO can be adhered to the roof deck with adhesives or
          fastened directly to the roof's deck. It is resistant to breakdown and corrosion. TPO is not prone to mildew
          or algae growth.
        </p>

        <p>
          It does not have to be power washed. The plastics membranes melt together to create a more dependable bond
          between the seams, commonly responsible for roof leaks. TPO is an experimental membrane.
        </p>
      </CustomContentCard>

      <CustomContentCard title="EPDM" imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/edm.jpg">
        <p>
          Among the most significant advantages of an ethylene diene monomer roof is the price. EPDM is also very
          lightweight and comparatively easy to install. The roof deck does not have to be reinforced. High-quality EPDM
          roofs may have a lifespan of as much as 20 years.
        </p>

        <p>
          They are relatively durable and do not easily scratch or scuff. Because EPDM is black, it absorbs heat. There
          are lighter colors available to help reflect heat, but they cost about 30 percent more. UV rays do not easily
          damage it. Adhesives are used to bond the seams. EPDM roofs are not the most appealing roofs.
        </p>
      </CustomContentCard>

      <CustomContentCard
        placeImageRight
        title="Metal"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/08/IMG_5664-min.jpg"
      >
        <p>
          Metal roofing systems consist of metal shingles or panels that overlap and are fastened to a solid substrate
          or open framing. A standing seam system has panel seams attached to the open frame or solid roof deck with
          concealed flanges or clips.
        </p>

        <p>
          Some utilize a seam cap, others an in-field seamer that creates a double-lock seam. A metal roof system that
          uses R-panels is another system of metal roofing that is distinct from a standing seam system. It is held in
          place by exposed fasteners penetrating each panel.
        </p>
      </CustomContentCard>

      <aside></aside>
    </div>
  );
}
