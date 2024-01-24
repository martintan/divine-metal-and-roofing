import CustomContentCard from "@/common/components/custom-content-card";

/* eslint-disable @next/next/no-img-element */
export default function RoofRepair() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-brown self-center">
          Who To Call When Roof Repair Is Needed, Especially In An Emergency
        </h3>
        <p>
          Discovering a leaking roof can be upsetting. Most people begin to panic when they notice the leak and damage
          to the interior. Often, the leak is detected when it is raining, or there is snow on the roof. Drastic
          situations call for extreme measures.
        </p>

        <p>
          Other than the people who reside in a home, the roof may be the most essential part of the home. A damaged
          roof is a cause for prompt action. It directly affects the stability of the house’s structure. Extreme weather
          conditions often cause the need for emergency roof repair.
        </p>
        <CustomContentCard
          placeImageRight
          title="Timing"
          imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/IMG_1218.jpg"
        >
          <p>
            Deciding on the time and place to begin repairs requires careful consideration. Experienced roofers like
            Divine Metal and Roofing should tackle the job. You are advised to wait until extreme weather conditions
            pass and the situation supports initiating the repair.
          </p>

          <p>
            Starting too soon can cause more damage than good. There is a danger of being struck by lightning or swept
            away by winds. The inspection is a critical activity before starting the repair. It requires being done
            under favorable light and weather condition.
          </p>

          <p>
            Leaks are not something to be ignored for very long. They may or may not need an emergency repair. If a
            severe leak allows a large amount of water to come in, the problem such be addressed immediately.
          </p>
        </CustomContentCard>
        <CustomContentCard
          title="Repair Process"
          imgUrl="https://divinemetalandroofing.com/wp-content/uploads/2021/07/Roof-Repair.jpg"
          footer={
            <div className="flex flex-col gap-4 mt-4">
              <p>
                New shingles are placed in the previous positions. The shingles are secured with nails. If damage is
                extensive, the entire or partial area of the roof needs to be framed. Plywood is used as sheathing to
                cover the hole. Felt paper is placed on the plywood and shingles are placed on the felt paper.
              </p>
              <p>
                When your roof is damaged and vulnerable to further deterioration, call the experienced and trained team
                of craftsmen from Divine Metal and Roofing.
              </p>
            </div>
          }
        >
          <p>
            When a roofing system is compromised, it allows water infiltration. Quick roof repair or installing
            protective covering is needed to remediate further structural or interior damage. Divine Metal and Roofing
            will apply an emergency tarp to the damaged area or hole in the roof until the weather system passes.
          </p>
          <p>
            We then assess the damage and propose permanent roof repair. If the roof is sloped, the leak source may be
            higher than where the water enters the home. Minor damage requires replacing shingles. The roofers remove
            shingles a couple of rows above the damage and work their way down.
          </p>
        </CustomContentCard>
      </section>
      <aside></aside>
    </div>
  );
}
