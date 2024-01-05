import { MenuItem } from "@/common";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="container mx-auto lg:max-w-screen-xl p-4 flex flex-col gap-4">
      <div>
        <div className="p-4 bg-white">
          <div
            className="p-4 py-20 flex flex-col items-center"
            style={{
              backgroundImage: "url(https://divinemetalandroofing.com/wp-content/uploads/2021/08/Architectural-Roof.jpg?id=498)",
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          >
            <div className="flex flex-col gap-4">
              <a href="#" rel="home" aria-current="page">
                <img
                  width="425"
                  height="250"
                  src="/logo.png"
                  className="custom-logo"
                  alt="Divine Metal And Roofing"
                  sizes="(max-width: 425px) 100vw, 425px"
                />
              </a>
              <p className="site-title uppercase text-4xl font-bold">
                <a href="#" rel="home">
                  Divine Metal And Roofing
                </a>
              </p>
              <p className="site-description"></p>
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex bg-[#504741] justify-center">
            <MenuItem title="Home" href="" />
            <MenuItem title="Residential" href="" />
            <MenuItem title="Commercial" href="" />
            <MenuItem title="Replacement And Installation" href="" />
            <MenuItem title="Roof Repair" href="" />
            <MenuItem title="Gallery" href="" />
            <MenuItem title="About Us" href="" />
          </ul>
        </nav>
      </div>

      <main className="bg-white text-[#303030] p-8">
        <section className="flex flex-col gap-4">
          <p>
            Updating a roof of a home or business adds to its curb appeal and the value of the property. When it is time
            to re-roof a home or business, there is a choice of materials to be used. The options can be overwhelming.
          </p>

          <p>
            Each kind of roofing material has advantages and disadvantages regarding its visual appeal, affordability,
            and longevity. Let Divine Metal and Roofing highlight the choices to help in determining the best material
            for your roofing project.
          </p>

          <p>
            We offer a broad spectrum of roofing materials that will keep your business or home looking its best and
            protected. Our services include residential and commercial installation, maintenance, and replacement. We
            treat you and your property with professionalism, respect, and courtesy.
          </p>

          <p>
            It is our goal to provide solutions and services that please our customers. With Divine Metal and Roofing,
            you get
          </p>

          <ul className="list-disc pl-8">
            <li>Ethics</li>
            <li>Experience</li>
            <li>Job site organization</li>
            <li>Knowledge of installation</li>
            <li>Knowledge of products and codes</li>
            <li>Professionalism</li>
            <li>Quality workmanship</li>
            <li>Safety and proper insurances and licensing</li>
          </ul>
          <p>
            Devine Metal and Roofing is a reliable roofing company. We have the experience, collateral, and capacity to
            handle all your roofing needs. Our service includes insurance claim assistance. We go beyond the expected to
            provide a safe environment and quality control that surpasses our competition.
          </p>

          <p>
            Our reputation for providing value in each step of the process demands we do so. We value our clients and
            understand their property is an asset of importance.
          </p>
        </section>

        <section className="bg-[#E5E5E5] p-8">
          <div data-vc-full-width="true" data-vc-full-width-init="true" className="flex gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">Residential Roofing</h3>
              <p>
                Divine Metal and Roofing raises the bar for residential roofing. We outperform the competition. Our
                roofers keep you comfortable, your peace of mind intact, and your property protected. Our product
                spotlight includes
              </p>
              <ul className="list-disc pl-8">
                <li>Metal/Standing seam roofing</li>
                <li>
                  <a
                    title="Architectural"
                    href="https://divinemetalandroofing.com/architectural/"
                    rel="nofollow sponsored ugc"
                  >
                    Architectural and designer shingle roofing
                  </a>
                </li>
                <li>
                  <a
                    title="Specialty Roof"
                    href="https://divinemetalandroofing.com/specialty-roof/"
                    rel="nofollow sponsored ugc"
                  >
                    Specialty roofs such as synthetic, shake, and slate
                  </a>
                </li>
                <li>
                  <a
                    title="Roof Repair"
                    href="https://divinemetalandroofing.com/roof-repair/"
                    rel="nofollow sponsored ugc"
                  >
                    Roof Repair
                  </a>
                </li>
              </ul>
              <p>Our services include standard and emergency repairs.</p>
            </div>
            <a href="/residential">
              <img
                width="1920"
                height="1440"
                src="https://divinemetalandroofing.com/wp-content/uploads/2021/07/Residential-2.jpg"
                className="vc_single_image-img attachment-full"
                alt="St Louis"
                loading="lazy"
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
            </a>
          </div>
        </section>

        <aside></aside>
      </main>

      <footer></footer>
    </div>
  );
}
