import "../App.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    // ==========================
    // SHOPIFY
    // ==========================
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205112.png?v=1788277767",
      title: "Think Rich Brand",
      category: "Shopify",
      description:
        "Complete Shopify store development and customization with a modern, responsive and user-friendly shopping experience.",
      link: "https://thinkrichbrand.com",
    },
{
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/potsforfun.png?v=1791695291",
      title: "Pots for Fun",
      category: "Shopify",
      description:
        "Complete Shopify store development and customization with a modern, responsive and user-friendly shopping experience.",
      link: "https://potsforfun.com/",
    },
    // ==========================
    // WOrdpress
    // ==========================
     {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_231744.png?v=1792520073",
      title: "Padrinos Pizza",
      category: "WordPress",
      description:
        "A restaurant website showcasing freshly made pizzas, oven-baked sandwiches, crepes, and drinks, with convenient dine-in, takeaway, and online ordering options.",
      link: "https://padrinospizza1982.com/",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_231412.png?v=1792519854",
      title: "VEHICLE RECOVERY IN LONDON",
      category: "WordPress",
      description:
        "A vehicle recovery website offering 24/7 breakdown assistance, roadside support, car transportation, and commercial fleet recovery across London.",
      link: "https://caliperecovery.co.uk/",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_231006.png?v=1792519614",
      title: "PACIFIC ISLAND FOODS",
      category: "WordPress",
      description:
        "A global food sourcing and export website specializing in meat, poultry, seafood, and frozen food products for international markets.",
      link: "https://pacificislandfoods.com/",
    },
      {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_230716.png?v=1792519443",
      title: "BUILT TOP NOTCH.",
      category: "WordPress",
      description:
        "A professional garage door services website offering residential and commercial installation, repairs, maintenance, and opener solutions.",
      link: "https://topnotchgd.com/",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_230242.png?v=1792519176",
      title: "HOMEFRONT PEACE OF MIND",
      category: "WordPress",
      description:
        "A support-focused website providing resources and assistance to individuals and families, with a focus on guidance, community support, and peace of mind.",
      link: "https://anchorsofsupport.com/",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_230053.png?v=1792519065",
      title: "Witness the Next Wave",
      category: "WordPress",
      description:
        "A sports ticketing website for the Saint John Sea Dogs, featuring season ticket memberships, single-game bookings, flexible ticket packages, group tickets, and a streamlined experience for hockey fans.",
      link: "https://tickets.sjseadogs.com/",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-20_223850.png?v=1792517804",
      title: "Her Subconscious Blueprint",
      category: "WordPress",
      description:
        "A personal growth and self-discovery website focused on subconscious patterns, mindset transformation, and empowering individuals to create positive changes in their lives.",
      link: "https://hersubconsciousblueprint.com/",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-19_222224.png?v=1792430483",
      title: "DIY Truckbed Drawer",
      category: "WordPress",
      description:
        "Custom truck bed drawer storage system featuring practical organization solutions, durable design and a user-friendly shopping experience for truck owners.",
      link: "https://bdthrive.com/truckbedmultisystem/",
    },
   {
  image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-19_223404.png?v=1792431058",
  title: "North Coast Arms Group",
  category: "WooCommerce",
  description:
    "Professional WooCommerce e-commerce website for North Coast Arms Group, featuring a product-focused storefront, organized product listings and a streamlined online shopping experience.",
  link: "https://northcoastarmsgroup.com/",
},
 {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_210136.png?v=1788278321",
      title: "Peachstatepeps",
      category: "WooCommerce",
      description:
        "Professional WooCommerce e-commerce store with product management, responsive design and a smooth online shopping experience.",
      link: "https://peachstatepeps.com/",
    },
    
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205446.png?v=1788277921",
      title: "PointRN",
      category: "WordPress",
      description:
        "Professional WordPress business website with a clean layout, responsive design and an optimized user experience.",
      link: "https://pointrn.com",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-03_202608.png?v=1791041152",
      title: "Second Chance Hausllc",
      category: "WordPress",
      description:
        "Professional WordPress business website with a clean layout, responsive design and an optimized user experience.",
      link: "https://secondchancehausllc.com/",
    },
       {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-19_224655.png?v=1792431832",
      title: "BdThrive",
      category: "WordPress",
      description:
        "Professional WordPress business website with a clean layout, responsive design and an optimized user experience.",
      link: "https://bdthrive.com/",
    },
      {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-03_202659.png?v=1791041151",
      title: "Trading & Investment",
      category: "WordPress",
      description:
        "Professional WordPress business website with a clean layout, responsive design and an optimized user experience.",
      link: "https://tradingandinvestingexplaindasifyouwereafiveyeaold.com/",
    },

{
  image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213405.png?v=1788280287",
  title: "Quillsnappress",
  category: "WordPress",
  description:
    "Immersive fantasy storytelling website featuring magical visual effects, enchanting faery adventures and the Faery Academy book series, bringing a captivating world of imagination to life.",
  link: "https://quillsnappress.com/",
},

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213552.png?v=1788280379",
      title: "At Your Pace Mental Health",
      category: "WordPress",
      description:
        "Professional mental health service website designed with a clean interface and accessible user experience.",
      link: "https://atyourpacementalhealth.com/",
    },
   {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-10-26_203756.png?v=1793028935",
      title: "Apex Legal",
      category: "Squarespace",
      description:
        "Professional legal services website with responsive design, practice area showcases, industry insights, and a modern user experience.",
      link: "https://www.apex-legal.com/",
    },
    // ==========================
    // SEO
    // ==========================
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213735.png?v=1788280484",
      title: "TheScriptFlow",
      category: "GMB (Google Business Profile)",
      description:
        "Local SEO and Google Business Profile optimization focused on improving local visibility and business presence.",
      link: "https://share.google/f5ZfAEZfNtIm32w1l",
    },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213907.png?v=1788280578",
      title: "SZ Vision",
      category: "GMB (Google Business Profile",
      description:
        "Google Business Profile optimization and local SEO work focused on improving business visibility in local search.",
      link: "https://share.google/7xfT7jfLODT0nL3Rc",
    },
  ];

  return (
    <section className="projects-page">

      {/* ==========================
          PAGE HEADER
      ========================== */}

      <div className="projects-page-header">

        <span className="projects-page-subtitle">
          MY WORK
        </span>

        <h1>Projects &amp; Work</h1>

        <p>
          A selection of websites, e-commerce stores and SEO projects
          I have worked on for businesses and brands.
        </p>

      </div>


      {/* ==========================
          ALL PROJECTS
      ========================== */}

      <div className="all-projects-grid">

        {projects.map((project, index) => (

          <div className="all-project-card" key={index}>

            {/* Project Image */}

            <div className="all-project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>


            {/* Project Content */}

            <div className="all-project-content">

              {/* Category */}

              <div className="all-project-top">

                <span>
                  {project.category}
                </span>

              </div>


              {/* Title */}

              <h3>
                {project.title}
              </h3>


              {/* Description */}

              <p>
                {project.description}
              </p>


              {/* Link */}

              <div className="all-project-bottom">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;