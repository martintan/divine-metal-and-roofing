import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function MetalRoofing() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-brown self-center">Metal/Standing Seam Roofs</h3>
        <p>
          Over the years, metal roofing has been gaining momentum for its use in residential construction. The standing
          seam is vital to the integrity of metal roof paneling. It is a point of connection that holds the proverbial
          hand of a construction project's integrity.
        </p>

        <p>
          If roof issues are not addressed, problems have a trickle-down effect. Metal roofing panels are measured in
          worth by their weakest point. The burden of installing a proper metal roof rests on a proper metal standing
          seam. Proper installation results in
        </p>

        <ul className="list-disc pl-8">
          <li>No visible fasteners</li>
          <li>No element exposure</li>
          <li>Low maintenance</li>
          <li>Longevity</li>
        </ul>
        <CustomContentCard
          placeImageRight
          title="Reasons to Choose Metal Standing Seam Roofs"
          imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/08/IMG_5663-min.jpg"
          footer={
            <div className="flex flex-col gap-4 mt-4">
              <p>
                Holes in shingles can be problematic. Tempestuous rain, high winds, and soil movement create conditions
                that may compromise the integrity of a roof. Another benefit is the ability to engineer the roof with
                snow and solar retention options.
              </p>
              <p>
                The standing seam metal roof has a definable seam extending vertically from the flat surface of the
                panels. A standing seam provides additional support and rigidity. Standing seams are well-made, which
                makes them and the panels low maintenance. Low maintenance is good news for a homeowner.
              </p>
            </div>
          }
        >
          <p>
            Few things hurt the curb appeal and aesthetic value of a home than something that does not look right.
            Standing seams create a fluid look. Less jarring options lend to the appeal of metal roofs. The hidden
            fastener system used is among the most significant benefits.
          </p>

          <p>
            A selling point of standing seams is protection from the weather. Hidden fasteners do not puncture the panel
            or expose it to the weather, which provides a higher level of protection. Nothing is more devastating than
            moisture or lousy weather finding its way into the nooks and crannies of a roof.
          </p>
        </CustomContentCard>
        <CustomContentCard
          title="Types of Standing Seam Roofs"
          imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/08/DF8A91CB-62FC-4C24-8A1F-AC8FE55009B7-min-1.jpg"
          footer={
            <div className="flex flex-col gap-4 mt-4">
              <p>
                Properly installed metal roofs have a lifespan between 40 and 60 years. The paint color also lasts for
                decades. Traditional asphalt shingles have a lifespan between 15 and 20 years.
              </p>
              <p>
                When looking for a company to install a metal roof, you want Divine Metal and Roofing for the project.
                Our experience is in every facet of residential roofing, and we maintain the proper licensing and
                classification.
              </p>
            </div>
          }
        >
          <p>
            The standing seams provide a more appealing and attractive look. There are primarily three types of standing
            metal roofs.
          </p>

          <ul className="list-disc pl-8">
            <li>Two-inch Mechanical Lock</li>
            <li>One-inch Mechanical Lock</li>
            <li>Tru Snap Series</li>
          </ul>

          <p>
            The two-inch is an excellent choice for bold roofing designs. Others find the one-inch metal lock panel
            equally appealing. The Tru Snap Series is an alternative to mechanically seamed panels. It is often selected
            for residential standing seam roofing applications.
          </p>
        </CustomContentCard>
      </section>
      <aside></aside>
    </div>
  );
}
