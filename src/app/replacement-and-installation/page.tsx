import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function ReplacementAndInstallation() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-brown self-center">Roof Replacement and Installation</h3>
        <p>
          Of all home repairs, new roofing may be of the most importance. When an old roof fails, the damage spreads
          from the attic insulation to any remodeled room, to the family room in the basement. Few home problems are as
          disastrous as a roof that allows water to destroy the inside of a home.
        </p>

        <p>
          Roof replacement is not to be taken lightly. Repairs should not be delayed. If you become aware that your roof
          is near the end of a useful life, understand roofing basics before soliciting a bid from a contractor.
        </p>
      </section>
      <CustomContentCard
        title="Basic Roofing Materials"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/IMG_5659.jpg"
        placeImageRight
      >
        <p>
          The roofing material option depends on the locality and the homeowner's taste. Metal roofing is often selected
          because it is fire-resistant. A Spanish-influential tile is a predominant roofing material in some regions.
        </p>

        <p>
          The pitch (angle) of a roof affects the type of roofing material used. Wood shake shingles are usable on
          steeply pitched roofs but not low-pitched, flatter roofs. The most common choices are
        </p>

        <ul className="list-disc pl-8">
          <li>Asphalt composition shingles</li>
          <li>Clay or ceramic tile</li>
          <li>Composition slate</li>
          <li>Metal roofing</li>
          <li>Slate roofing</li>
          <li>Wooden shakes or shingles</li>
        </ul>
      </CustomContentCard>
      <CustomContentCard
        title="Second Layer or Tear-Off?"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/3-Tab-Shingles.jpg"
      >
        <p>
          Once, putting a new roof over an existing one was common practice. The approach is no longer permitted in some
          areas. A complete tear-off is now required. Even if layering is permitted, carefully consider the pros and
          cons of applying a new layer.
        </p>

        <p>
          The most potent argument against layering asphalt shingles is the weight. It may be too heavy for the roof
          framing, especially in older homes. Another problem is that layering repeats surface irregularities that may
          be present. There is a likelihood of having waves, bumps, and bubbles.
        </p>

        <p>
          New shingles over problems are unattractive. You can minimize the problem by correcting issues before
          reroofing. The main advantage of layering is the reduction in the work involved. However, roofing
          professionals like Divine Metal and Roofing can tackle the job quickly.
        </p>
      </CustomContentCard>
      <CustomContentCard
        title="Cost of Roof Replacement"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/IMG_5662.jpg"
        placeImageRight
      >
        <p>Factors that affect roof replacement cost are:</p>

        <ul className="list-disc pl-8">
          <li>Materials chosen</li>
          <li>The roofing contractor you hire</li>
          <li>The pitch of the roof</li>
          <li>The square footage</li>
        </ul>

        <p>It includes permits, demolition, cleanup, and waste disposal.</p>
      </CustomContentCard>
      <CustomContentCard
        title="Choosing a Roof Style"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/IMG_5666.jpg"
        footer={
          <div className="flex flex-col gap-4 mt-4">
            <p>
              In areas of high winds, the hip roof is sturdier than a gable roof. Areas receiving high precipitation
              require pitched roofs rather than flat ones. Flat roofs are practical where the climate is dry and hot.
              The amount of rain and snow received helps determine the pitch of a roof.
            </p>
            <p>
              Simple pitch roofs are best in climates that experience four seasons and snow. They have fewer areas where
              needles and leaves can get stuck and allow rain and snow to run off efficiently.
            </p>
          </div>
        }
      >
        <p>
          The hundreds of roof types allow for different materials and are suitable for various purposes. There are two
          primary roof categories - pitched and flat. The shape of the building helps determine the style of the roof
          needed.
        </p>

        <p>The most common roof styles are</p>

        <ul className="list-disc pl-8">
          <li>Gable Roof</li>
          <li>Flat Roof</li>
          <li>Hip and Pyramid Roofs</li>
          <li>Gambrel Roof</li>
          <li>Mansard Roof</li>
        </ul>
      </CustomContentCard>

      <CustomContentCard
        title="Choice of Materials"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/08/Standing-Seam-Metal-Roof-2.jpg"
        placeImageRight
      >
        <p>
          Roofs are made in various ways with different materials. Some styles are not suitable for specific materials.
          The framework for pitched roofs can be made of metal or wood, and the outside can be asphalt or wood shingles,
          concrete or clay tiles, or metal sheeting.
        </p>

        <p>
          Trusses are suited for different weights that play a role in the exterior materials used. Poly-vinyl,
          fiberglass, metal, or asphalt can be used for flat roofs. Shingles will not work. For humid climates,
          algae-resistant asphalt shingles are recommended.
        </p>

        <p>
          Areas receiving heavy snowfall need strong roofs. Durable materials such as asphalt shingles or metal are the
          most common materials.
        </p>
      </CustomContentCard>
      <CustomContentCard
        title="Installing the Roof"
        imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/IMG_5666.jpg"
      >
        <p>When the style and materials are chosen, there are four steps to installing the roof.</p>
        <ul className="list-disc pl-8">
          <li>Framing</li>
          <li>Sheathing</li>
          <li>Underlayment installation</li>
          <li>Roof cover installation</li>
        </ul>
      </CustomContentCard>

      <aside></aside>
    </div>
  );
}
