const items = [
  {
    src: "/images/products/Precast Slabs/1.jpg",
    altText: "Slide 1",
    caption: "Precast Slabs",
    key: 1,
  },
  {
    src: "/images/products/Precast Slabs/2.jpg",
    altText: "Slide 2",
    caption: "Precast Slabs",
    key: 2,
  },
  {
    src: "/images/products/Precast Slabs/3.jpg",
    altText: "Slide 3",
    caption: "Precast Slabs",
    key: 3,
  },
];

const fenceItems = [
  {
    src: "/images/products/Fencing Poles/1.jpg",
    altText: "Slide 1",
    caption: "Fencing Poles",
    key: 1,
  },
  {
    src: "/images/products/Fencing Poles/2.jpg",
    altText: "Slide 2",
    caption: "Fencing Poles",
    key: 2,
  },
  {
    src: "/images/products/Fencing Poles/3.jpg",
    altText: "Slide 3",
    caption: "Fencing Poles",
    key: 3,
  },
];

export const products = [
  {
    title: "PRECAST SLABS",
    description: `
        Reinforced Cement Concrete / Plain Cement Concrete.
        We manufacture Precast Slabs using various raw materials of high-grade. The array of slabs we offer is highly appreciated due to excellent stress-bearing capacity, aesthetics, and the sheer variety offered in terms of dimensions and designs.
        These covering slabs can be used for driveways, roadways, patios, walkways, covering underground trench cables and wires for industrial purposes.
      `,
    images: items,
  },
  {
    title: "FENCING PILLAR POSTS",
    description: `
        Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts.
        Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession. Manufactured by us in a variety of sizes and widths.
        Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market. The fencing poles can be supplied in bulk at affordable prices.
      `,
    images: fenceItems,
  },
  // Add more products as needed
];

type PrecastItem = {
  images: string[];
  title: string;
  description: string;
};
type precastItemsWhatsapp = {
  images: string[];
  title: string;
  description: string;
  subDescription?: string[];
  specification?: any;
};

export const precastItemsWhatsapp: precastItemsWhatsapp[] = [
  {
    images: [
      "/images/tiles/Rcc/1.txt",
      "/images/tiles/Rcc/2.txt",
      "/images/tiles/Rcc/3.txt",
      "/images/tiles/Rcc/4.txt",
      "/images/tiles/Rcc/5.txt",
      "/images/tiles/Rcc/6.txt",
      "/images/tiles/Rcc/7.txt",
    ],
    title:
      "RCC / PCC Base Plate Pad SLABS For PCC Electricity Distribution Poles",
    description: `We are the leading Manufacturers of RCC / PCC Base Plate Pad SLABS used under 8Meters / 9Meters PCC Electricity Distribution Poles in West Bengal. Our Chief Intake Vendors are:`,
    subDescription: [
      "WBSEDCL (West Bengal State Electricity Distribution Company)",
      "L&T Power Transmission & Distribution",
      "Lumino Industries Ltd",
      "Voltas Limited",
      "Bajaj Electricals Ltd",
      "KEI Industries Limited",
      "Laser Power & Infra Pvt. Ltd",
      "Gupta Power Infrastructure Ltd",
      "NCC Limited",
    ],
    specification: [
      " ✅️ We Provide Base Plate Slabs With / Without Reinforcement as per Customer's Specifications & Requirements such as the following:<br>",
      "1️⃣ 450mm × 450mm × 75mm <strong>RCC Base Plate</strong> (M20 Grade) for 8Meters Pole<br>",
      "2️⃣ 500mm × 500mm × 100mm <strong>PCC Base Plate</strong> (M25 Grade) for 8Meters Pole<br>",

      "3️⃣ 600mm × 600mm × 100mm <strong>PCC Base Plate</strong> (M25 Grade) for 9Meters Pole<br>",

      "4️⃣ 600mm × 600mm × 100mm <strong>RCC Base Plate</strong> (M20 Grade) for 9Meters Pole<br><br>",
      "☑️ Our Base Plate SLABS Carry Pay Load of the 8Meters / 9Meters PCC Poles of 550 to 700 Kgs Weight at Ease.<br>",

      "These Slabs are specially designed according to our Chief Vendors' Requirements.",
    ],
    // `,
  },

  {
    images: [
      "/images/tiles/ZigZagUniPaver/1.txt",
      "/images/tiles/ZigZagUniPaver/2.txt",
      "/images/tiles/ZigZagUniPaver/3.txt",
      "/images/tiles/ZigZagUniPaver/4.txt",
      "/images/tiles/ZigZagUniPaver/5.txt",
      "/images/tiles/ZigZagUniPaver/6.txt",
      "/images/tiles/ZigZagUniPaver/7.jpg",
      // "/images/tiles/ZigZagUniPaver/8.jpg",
      // "/images/tiles/ZigZagUniPaver/9.jpg",
      "/images/tiles/ZigZagUniPaver/10.txt",
      "/images/tiles/ZigZagUniPaver/11.txt",
    ],
    title: "ZIG - ZAG INTERLOCKING PAVER",
    description: `A unique zig-zag pattern that provides strong interlocking support for outdoor paving needs.
      Available on 60mm or 80mm Height of Different Grades & Standards.
    `,
    subDescription: [
      "A unique zig-zag pattern that provides strong interlocking support for outdoor paving needs.Available on 60mm or 80mm Height of Different Grades & Standards.",
    ],

    specification: [
      "🟡 Economical",
      "🟢 Variety in Design Patterns, Styles & Colours",
      "🟣 Easy & Fast Installation",
      "🔵 Maintenance Free",
      "🟠 Highly Durable",
      "🟤 High Strength",
      "🔴 Stronger than Poured Concrete",
      "⚫️ Weather & Water Resistant",
    ],
  },
  {
    images: [
      "/images/tiles/Chequered/1.jpg",
      "/images/tiles/Chequered/2.jpg",
      "/images/tiles/Chequered/3.jpg",
      "/images/tiles/Chequered/4.jpg",
      "/images/tiles/Chequered/5.jpg",
      "/images/tiles/Chequered/6.txt",
      "/images/tiles/Chequered/7.txt",
      "/images/tiles/Chequered/8.txt",
      "/images/tiles/Chequered/9.txt",
      "/images/tiles/Chequered/10.txt",
      "/images/tiles/Chequered/11.txt",
    ],
    title: "25 SQUARE CHEQUERED TILES (CADBURRY)",
    description: `A classic chequered pattern that brings a bold, timeless style to interiors and exteriors.`,
    subDescription: [
      `
  Usage / Application:  *Ramps, Parking, Driveways, Footpaths, Walkway,* Etc.

  `,
    ],
    specification: [
      "🟨 Thickness: *25mm*",

      "🟥 Size: *300mm × 300mm*",

      "🟦 Shape: *Square*",

      "🟪 Manufactured as per *IS* Standards.",
    ],
  },
  {
    images: [
      "/images/products/Fencing Poles/1.jpg",
      "/images/products/Fencing Poles/2.jpg",
      "/images/products/Fencing Poles/3.jpg",
      "/images/products/Fencing Poles/4.jpg",
      "/images/products/Fencing Poles/5.jpg",
      "/images/products/Fencing Poles/6.jpg",
      "/images/products/Fencing Poles/7.jpg",
      "/images/products/Fencing Poles/8.txt",
      "/images/products/Fencing Poles/9.txt",
      "/images/products/Fencing Poles/10.txt",
      "/images/products/Fencing Poles/11.txt",
      "/images/products/Fencing Poles/12.txt",
    ],
    title: "Fencing Pillar Post",
    description: `Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts.
    `,
    subDescription: [
      "Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession.",
      " Manufactured by us in a variety of sizes and widths.",
      " Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market.",
      " The fencing poles can be supplied in bulk at affordable prices",
    ],
    specification: [
      "🔴 Usage/Application: *Fencing Boundary / Demarcation* ",
      "🟢 Length of Pillar: *3feet to 10feet*",
      "🟡 Design: *RCC (Reinforced Cement Concrete)*",
      "🔵 Shape: *Cubical*",
      "🟠 Surface Treatment: *Precast Concrete Shuttering Finish*",
      "🟣 Concrete Grade: *M30 Onwards*",
      "⚫️ Mould Frame Finishing: *Mild Steel*",
    ],
  },

  {
    images: [
      "/images/products/Precast Drains/1.jpg",
      "/images/products/Precast Drains/2.webp",
      "/images/products/Precast Drains/3.jpg",
      "/images/products/Precast Drains/4.webp",
      "/images/products/Precast Drains/5.jpg",
      "/images/products/Precast Drains/6.jpg",
    ],
    title: "Precast RCC Drains",
    description: `We are one of the topmost manufacturers and supplier of a wide range of Precast R.C.C. Drains in our domain. We accept Order of Precast Drains only in Bulk /Huge Quantities.
     `,
    subDescription: [
      "These drains have holes and permit the collected water to get discharges into another drainage system.",
      "  these drains exhibit optimum operational features.Precast U / V- Shaped Drains of various sizes for drainage of water along road sides, and in commercial, residential, and industrial areas.",
      " These products are made available to the customers in varied specifications, in order to meet their diverse requirements effectively.",
      " We are offering a wide range of Precast Concrete Box Culverts provide high flow capacity even where there is low gradient or headroom is not allowed.",
      " Our range of precast concrete box culverts are highly durable and can be easily installed on the site. ",
      "  Each Box Culverts are individually designed so as to cater to a varied external loading conditions.",
    ],
    specification: [
      "🟣 Shape: *Customerised Specifications & Sizes*",
      "🟠 Material: *RCC*",
      "🟡 Grade: *M-25 / M-30 / M-40*",
      "🔵 Built Type: *Precast*",
    ],
  },
  {
    images: [
      "/images/products/Precast Boundary Walls/1.jpg",
      "/images/products/Precast Boundary Walls/2.jpg",
      "/images/products/Precast Boundary Walls/3.jpg",
      "/images/products/Precast Boundary Walls/4.jpg",
      "/images/products/Precast Boundary Walls/5.webp",
      "/images/products/Precast Boundary Walls/6.webp",
      "/images/products/Precast Boundary Walls/7.txt",
    ],
    title: "Boundary wall",
    description: `Our product range includes a wide range of Boundary Walls such as Concrete Boundary Walls, Industrial Boundary Walls, Precast RCC Wall Panels, Precast RCC Columns/ Struts/ Posts and many more items. In order to meet clients’ specific demands, our entire range is available in various standard length options such as 1800mm , 2100mm , 2400mm and also can be customerized according to client's requirements
   `,
    subDescription: [
      "Our offered walls are manufactured from optimum quality materials and advanced technology at our sound manufacturing premises in adherence to the defined industry standards.",
      "We have performed strict quality inspection regarding strength and quality of the walls.",
      "Thereby, these are widely preferred and appreciated among our clients.",
      "",
      "🟡 Reliability",
      "🟣 Excellent finish",
      "🟠 Unique outlook",
      "🔵 Cost Economical Compared to Traditional Brick Boundary Wall.",
    ],
    specification: [
      "🟩 Built Type: Modular Panel Build",
      "🟦 Material: Steel",
      "🟨 Beam size: 6 x 6 inches (150 mm x 150 mm)",
      "🟪 Plank length: 5 feet",
      "🟧 Plank height: 1 feet",
      "🟥 Plank width: 1.7 inch",
    ],
  },

  {
    images: [
      "/images/products/Newly Launch Product/cement bench2.jpg",

      "/images/products/Newly Launch Product/4.avif",
      "/images/products/Newly Launch Product/5.jfif",
      "/images/products/Newly Launch Product/7.txt",
      "/images/products/Newly Launch Product/8.txt",
      "/images/products/Newly Launch Product/9.txt",
      "/images/products/Newly Launch Product/10.txt",
      "/images/products/Newly Launch Product/11.txt",
      "/images/products/Newly Launch Product/12.txt",
    ],
    title: "Precast RCC Garden Bench",
    description: ` We Manufacture & Supply superior quality RCC Garden Benches With / Without Arm Rests. 
   `,
    subDescription: [
      " The offered array of RCC garden benches is designed by our professionals in compliance with the global quality standards.",

      " These spacious RCC garden benches are very beautiful and provide aesthetic looks to parks and lawns.",

      " Clients can avail these benches from us in various types and other specifications.",
    ],
    specification: ["Coustomised"],
  },
  {
    images: [
      "/images/tiles/SquaredStoneFinish/1.jpg",
      "/images/tiles/SquaredStoneFinish/2.webp",
      "/images/tiles/SquaredStoneFinish/3.jpg",
      "/images/tiles/SquaredStoneFinish/4.jpg",
      "/images/tiles/SquaredStoneFinish/5.jpg",
      "/images/tiles/SquaredStoneFinish/6.txt",
      "/images/tiles/SquaredStoneFinish/7.txt",
      "/images/tiles/SquaredStoneFinish/8.txt",
      "/images/tiles/SquaredStoneFinish/9.txt",
    ],
    title: "SQUARED SHAPED STONE FINISH PAVER BLOCKS ",
    description:
      "Transform your spaces with the timeless elegance of our paver blocks, featuring a natural stone finish that brings earthy tones and textures to life. Designed to mimic the charm and authenticity of cobblestone, these exquisite pavers add character and sophistication to any floor or wall. Perfect for creating stunning outdoor patios, walkways, or accent walls, their durable and versatile design ensures both beauty and functionality for years to come.",
    subDescription: [
      "Features a natural stone finish that adds earthy tones and texture to floors or walls.",
      "These exquisite designs of paver blocks make you feel like cobblestone finishes and touches.",
    ],
    specification: [
      "Natural Stone",
      "Earthy Tones and Textures",
      "Cobblestone Finish",
      "Floors or Walls",
    ],
  },
  {
    images: [
      "/images/tiles/LShapedSandBlast/1.jpg",
      "/images/tiles/LShapedSandBlast/2.jpg",
      "/images/tiles/LShapedSandBlast/3.jpg",
      "/images/tiles/LShapedSandBlast/4.jpg",
      "/images/tiles/LShapedSandBlast/5.txt",
      "/images/tiles/LShapedSandBlast/6.txt",
      "/images/tiles/LShapedSandBlast/7.txt",
      "/images/tiles/LShapedSandBlast/8.txt",
      "/images/tiles/LShapedSandBlast/9.txt",
    ],
    title: "L-SHAPED Interlocking PAVER BLOCKS",
    description:
      "The L-shaped design with a sandblast finish adds texture and modernity to any project.",

    subDescription: [
      "  _These paving blocks are most suitable for heavy-duty applications, able to support substantial loads and resist shearing and braking forces._",
    ],
    specification: [
      "Available with Sand-Blast Texture & various Colour Option.",
      "🔴🟡⚪️⚫️🔵🟢🟤",
    ],
  },
  {
    images: [
      "/images/tiles/BrickShaped/1.txt",
      "/images/tiles/BrickShaped/3.txt",
      "/images/tiles/BrickShaped/5.txt",
      "/images/tiles/BrickShaped/8.txt",
      "/images/tiles/BrickShaped/9.txt",
      "/images/tiles/BrickShaped/2.txt",
      "/images/tiles/BrickShaped/4.txt",

      "/images/tiles/BrickShaped/10.txt",
      "/images/tiles/BrickShaped/6.txt",
      "/images/tiles/BrickShaped/7.txt",
    ],
    title: "BRICK SHAPED PAVER BLOCKS",
    description:
      "A classic brick shape that offers a rustic, timeless appeal for both indoor and outdoor spaces.",

    subDescription: [
      "  These paving blocks are most suitable for heavy-duty applications, able to support substantial loads and resist shearing and braking forces.",
    ],
    specification: [
      "🟩 Thickness: 40mm / 60mm",
      "🟧 Dimension: 200mm × 100 mm",
      "🟦 Application: Low Traffic Area, Footpath, Parking.",
      "🟪 Finish: Matt ",
      "⬛️ Manufacturing Technique: Hydraullic Vibro-Compaction",
    ],
  },

  {
    images: [
      "/images/tiles/Milano/1.jpg",
      "/images/tiles/Milano/2.jpg",
      "/images/tiles/Milano/3.jpg",
      "/images/tiles/Milano/4.jpg",
      "/images/tiles/Milano/5.jpg",
      "/images/tiles/Milano/6.txt",
      "/images/tiles/Milano/7.txt",
      "/images/tiles/Milano/8.txt",
    ],
    title: "MILANO INTERLOCKING PAVER BLOCKS",
    description:
      "Elegant and smooth, Milano tiles are designed to bring Italian charm and sophistication to any surface.",

    subDescription: [
      "  It is made out of Appropriate Grade of Concrete with the incorporation of cutting-edge technology.",

      " The Paver Block is the most suitable for exterior applications as the tile is capable of enduring tough climate conditions, dust, chemical attacks, and other degrading factors.",

      " Milano Paver Block has got an impressive design and unique appearance, for this reason, we are seeing a huge demand for the Paver Block in the marketplace.",
    ],
  },
  {
    images: [
      "/images/tiles/TRIHEX/1.jpg",
      "/images/tiles/TRIHEX/2.txt",
      "/images/tiles/TRIHEX/3.txt",
      "/images/tiles/TRIHEX/4.txt",
      "/images/tiles/TRIHEX/5.txt",
      "/images/tiles/TRIHEX/6.txt",
      "/images/tiles/TRIHEX/7.txt",
    ],
    title: "TRI - HEX INTERLOCKING PAVER BLOCKS",
    description:
      "Combines triangular and hexagonal shapes, perfect for creating eye-catching, intricate patterns.",
    subDescription: [
      " Owing to our rich industrial experience, we are engaged in manufacturing and supplying a commendable range of  *TRI - HEX Interlocking PAVER BLOCK.",

      "These blocks are precision-engineered by our team of highly qualified and experienced professionals in order to ensure their adherence with the well-defined standards.",
    ],
    specification: [
      `
        Manufactured by Hydraullic Vibro-Press Technique of Variable Thickness from 40mm to 100mm as per Client's requirement.
        `,
    ],
  },
  {
    images: [
      "/images/tiles/RoofTile/1.txt",
      "/images/tiles/RoofTile/2.txt",
      "/images/tiles/RoofTile/3.txt",
      "/images/tiles/RoofTile/4.txt",
      "/images/tiles/RoofTile/5.txt",
    ],
    title: "PRECAST PCC ROOF TILE",
    description:
      "Durable and weather-resistant, this tile is ideal for roofing with a stylish, traditional look.",
  },
  {
    images: [
      "/images/products/Kerbstones/1.jpg",
      "/images/products/Kerbstones/2.jpg",
      "/images/products/Kerbstones/3.jpg",
      "/images/products/Kerbstones/4.jpg",
      "/images/products/Kerbstones/5.jpg",
      "/images/products/Kerbstones/6.jpg",
      "/images/products/Kerbstones/7.jpg",
      "/images/products/Kerbstones/8.jpg",
      "/images/products/Kerbstones/9.jpg",
    ],
    title: "Precast Kerb Stone",
    description:
      "We are a prominent manufacturer & supplier of huge assortment of Kerbstone, Precast Concrete Kerb Stones, Curbstone; that are widely used in construction sector and available in various sizes and shapes.We are concerned in offering an adequate range of Kerb Stones which have Cutting - Edge Or Champhered Edge Finish as per client's requirements. These are manufactured using the quality raw material and are widely used in the construction industries using Vibration or Hydraullic Manufacturing Process.Various tests are done by our quality controllers in order to achieve prevailing industrial standards. Apart from these, we offer these ranges to the clients at market-leading prices with Durability & Dimensions & Designs.",
    subDescription: [
      "Our Roof Tiles are designed in such a way that it reflects more Sunlight and absorbs less heat.",

      " By reflecting the heat of the Sun instead of absorbing it, they keep buildings cooler and reduces the amount of energy needed to cool them, in turn reducing the use of air conditioners and electricity consumption.",

      " Our Roof Tiles are Water Proof in property keeping Your Terrace free from any Dampness due to Rain.",
    ],
    specification: [
      "🔵 Pattern : Flat Tiles",
      "🟡 Size : 250mm × 250mm",
      "🟣 Thickness : 20mm to 25mm",
      "🟠 Colour : Light Grey",
      "🟢 Features : Water Proof",
      "🔴 Material : Precast Plain Cement Concrete (M15 Grade)",
      "🟤 Finish : Matt (Can be Polished Further after Installation by Tiles Poloshing Machine)",
    ],
  },

  //new Products
  {
    images: [
      "/images/products/Precast Cement Products/1.avif",
      "/images/products/Precast Cement Products/2.jpg",
      "/images/products/Precast Cement Products/3.avif",
      "/images/products/Precast Cement Products/4.jpg",
      "/images/products/Precast Cement Products/5.webp",
      "/images/products/Precast Cement Products/6.webp",
    ],
    title: "Precast Cement Products",
    description:
      "We specialize in precast concrete products, offering solutions from 50 lbs to 10 tons in bulk quantities. Crafted from high-quality materials, our products ensure durability, structural integrity, and cost-effectiveness. With a focus on honesty, quality, timely delivery, and customer satisfaction, we deliver exceptional service tailored to your needs.",
    subDescription: [
      "We are a leading supplier and processor of all allied precast concrete products, regardless of bulk quantity.",
      "Provide us with your requirements in precasting, and we will deliver the best solutions and services.",
      "We produce precast concrete products ranging from 50 lbs to 10 tons, accommodating various shapes and sizes.",
      "Specially designed precast products are catered to only in bulk or large quantity requirements.",
      "All products are made from high-quality raw materials, ensuring durability, structural soundness, versatility, and cost-effectiveness compared to cast-in-situ methods.",
      "Our core values of honesty, quality, timely delivery, affordable pricing, and customer satisfaction strengthen our client relationships.",
    ],
    specification: [
      "50 lbs to 10 tons",
      "Precast Concrete Products",
      "Available for bulk or large quantities only",
      "High-quality raw materials",
      "Durable, structurally sound, versatile, and cost-effective",
      "Superior to cast-in-situ methods",
      "Honesty, quality, timely delivery, affordability, customer satisfaction",
    ],
  },
  {
    images: [
      "/images/products/Newly Launch Product/1.jfif",
      "/images/products/Newly Launch Product/2.jfif",
      "/images/products/Newly Launch Product/3.jfif",
    ],
    title: "CELLULAR LIGHT WEIGHT CONCRETE BLOCKS",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
    subDescription: [
      "🟨 Provide additional strength to the edge of the carriageway.",
      "🟩 Provide a demarcation line between roads and footway and deter traffic from mounting on the footway, thereby ensuring the safety of the pedestrians.",
      "🟦 Prevent vegetation from encroaching on to the roads.",
      "🟪 Generally improve the aesthetics and contribute to a formal paved environment. ",

      "❇️ KerbStones can be effectively used in pedestrian areas, domestic drives, public, private and commercial footways, school playgrounds, pedestrian precincts and industrial pavements.",
    ],
    specification: [
      "🟠 Type: Outdoor",
      "🟢 Usage: Roadway, Side Walls, Gutter Drainage, etc.",
      "🔵 Color: Grey Cement Color",
      "🟤 Form: Block",
      "⚫️ Grade: M-20",
      "🔴 Size: (300×230×100)mm , (300×250×150)mm , (300×450×100)mm.",
      "🟣 Material: Plain Cement Concrete",
    ],
  },

  {
    images: [
      "/images/products/Newly Launch Product/precast Door Frame.webp",
      "/images/products/Newly Launch Product/precast-door-frame.avif",
      "/images/products/Newly Launch Product/images.jfif",
    ],
    title: "CEMENT DOOR WINDOW FRAME",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
    subDescription: [
      "Foam concrete products designed for lightweight and versatile construction solutions.",
      "CLC bricks offering excellent thermal insulation and durability for sustainable building practices.",
      "CLC blocks engineered for strength and reduced environmental impact in construction.",
      "Eco-friendly lightweight bricks crafted to minimize load while ensuring structural integrity.",
    ],
    specification: [
      "Foam Concrete Products",
      "CLC Bricks",
      "CLC Blocks",
      "Eco-Friendly Lightweight Bricks",
    ],
  },

  {
    images: [
      "/images/products/Newly Launch Product/precast beam and coloumn.jfif",
      "/images/products/Newly Launch Product/precast wall pannels.jfif",
      "/images/products/Newly Launch Product/stairs.jfif",
      "/images/products/Newly Launch Product/precast housing unit.jpg",
    ],
    title: "Beam & columns / Wall Panels / Stairs / Structural Slab",
    description: "Beam & columns / Wall Panels / Stairs / Structural Slab",
    subDescription: [
      "Beam and columns designed for robust structural support and load-bearing applications.",
      "Wall panels crafted for durability and aesthetic appeal in modern construction.",
      "Precast stairs offering precision, safety, and ease of installation.",
      "Structural slabs engineered for strength and versatility in various construction projects.",
    ],
    specification: [
      "Beam & Columns",
      "Wall Panels",
      "Stairs",
      "Structural Slab",
    ],
  },
  {
    images: [
      "/images/products/Cement/1.jpg",
      "/images/products/Cement/2.jpg",

      "/images/products/Cement/3.jpg",
      "/images/products/Cement/4.jpg",
      "/images/products/Cement/5.jpg",
      "/images/products/Cement/6.jpg",
    ],
    title: "Cement ",
    description:
      "For any Cement (Trade Materials) PPC / PSC Enquiry of Requirement You can contact us for Bulk Quantity. We can Provide You the following Brands (Trade Material) depending on their Availability",
    subDescription: [
      `
   For any Cement (Trade Materials) PPC / PSC Enquiry of Requirement You can contact us for Bulk Quantity._
  `,
    ],
    specification: [
      "🟡 AMBUJA",
      "🟢 AMBUJA +PLUS",
      "🟣 LAFARGE CONCRETO",
      "🔵 ULTRATECH",
      "🟠 NU VISTA",
      "🟤 High Strength",
      "🔴 EMAMI DOUBLE BULL",
    ],
  },
];
export const precastItems: PrecastItem[] = [
  {
    //tiles
    images: [
      "/images/tiles/Dotted/1.jpg",
      "/images/tiles/Dotted/2.webp",
      "/images/tiles/Dotted/3.jpg",
      "/images/tiles/Dotted/4.jpg",
    ],
    title: "DOTTED",
    description:
      "A versatile, dotted pattern tile ideal for adding subtle texture and depth to any space.",
  },
  {
    images: [
      "/images/tiles/Barfi/1.jpg",
      "/images/tiles/Barfi/2.webp",
      "/images/tiles/Barfi/3.jpg",
      "/images/tiles/Barfi/4.jpg",
    ],
    title: "BARFI",
    description:
      "Inspired by classic Barfi shapes, this tile brings a unique charm with its geometric elegance.",
  },
  {
    images: [
      "/images/tiles/QuarterCircle/1.jpg",
      "/images/tiles/QuarterCircle/2.webp",
      "/images/tiles/QuarterCircle/3.jpg",
      "/images/tiles/QuarterCircle/4.jpg",
      "/images/tiles/QuarterCircle/5.jpg",
    ],
    title: "QUARTER CIRCLE",
    description:
      "Features a unique quarter-circle design, perfect for creating dynamic patterns in floors or walls.",
  },
  {
    images: [
      "/images/tiles/Chequered/1.jpg",
      "/images/tiles/Chequered/2.webp",
      "/images/tiles/Chequered/3.jpg",
      "/images/tiles/Chequered/4.jpg",
      "/images/tiles/Chequered/5.jpg",
    ],
    title: "CHEQUERED",
    description:
      "A classic chequered pattern that brings a bold, timeless style to interiors and exteriors.",
  },

  {
    images: [
      "/images/tiles/Cadburry/2.jpg",
      "/images/tiles/Cadburry/1.jpg",
      "/images/tiles/Cadburry/3.jpg",
      "/images/tiles/Cadburry/4.jpg",
      "/images/tiles/Cadburry/5.jpg",
      "/images/tiles/Cadburry/6.jpg",
    ],
    title: "CADBURRY",
    description:
      "Rich and smooth, the Cadbury tile adds an elegant, luxurious feel to any surface.",
  },
  {
    images: [
      "/images/tiles/RoofTile/1.txt",
      "/images/tiles/RoofTile/2.txt",
      "/images/tiles/RoofTile/3.txt",
      "/images/tiles/RoofTile/4.txt",
      "/images/tiles/RoofTile/5.jpg",
    ],
    title: "ROOF TILE",
    description:
      "Durable and weather-resistant, this tile is ideal for roofing with a stylish, traditional look.",
  },
  {
    images: [
      "/images/tiles/B&W  Checker/1.jpg",
      "/images/tiles/B&W  Checker/2.webp",
      "/images/tiles/B&W  Checker/3.jpg",
      "/images/tiles/B&W  Checker/4.jpg",
      "/images/tiles/B&W  Checker/5.webp",
    ],
    title: "BLACK AND WHITE CHECKER",
    description:
      "A bold black-and-white checker pattern that enhances spaces with a striking, modern appeal.",
  },
  {
    images: [
      "/images/tiles/LShapedSandBlast/1.jpg",
      "/images/tiles/LShapedSandBlast/2.jpg",
      "/images/tiles/LShapedSandBlast/3.jpg",
      "/images/tiles/LShapedSandBlast/4.jpg",
      "/images/tiles/LShapedSandBlast/5.txt",
      "/images/tiles/LShapedSandBlast/6.txt",
      "/images/tiles/LShapedSandBlast/7.txt",
      "/images/tiles/LShapedSandBlast/8.txt",
    ],
    title: "L-SHAPED SAND BLAST",
    description:
      "The L-shaped design with a sandblast finish adds texture and modernity to any project.",
  },
  {
    images: [
      "/images/tiles/TRIHEX/1.jpg",
      "/images/tiles/TRIHEX/2.txt",
      "/images/tiles/TRIHEX/3.txt",
      "/images/tiles/TRIHEX/4.txt",
      "/images/tiles/TRIHEX/5.txt",
      "/images/tiles/TRIHEX/6.txt",
      "/images/tiles/TRIHEX/7.txt",
    ],
    title: "TRI - HEX",
    description:
      "Combines triangular and hexagonal shapes, perfect for creating eye-catching, intricate patterns.",
  },
  {
    images: [
      "/images/tiles/ZigZagUniPaver/1.txt",
      "/images/tiles/ZigZagUniPaver/2.txt",
      "/images/tiles/ZigZagUniPaver/3.txt",
      "/images/tiles/ZigZagUniPaver/4.txt",
      "/images/tiles/ZigZagUniPaver/5.txt",
      "/images/tiles/ZigZagUniPaver/6.txt",
      "/images/tiles/ZigZagUniPaver/7.jpg",
      "/images/tiles/ZigZagUniPaver/8.jpg",
      "/images/tiles/ZigZagUniPaver/9.jpg",
    ],
    title: "ZIG - ZAG INTERLOCKING PAVER",
    description:
      "A unique zig-zag pattern that provides strong interlocking support for outdoor paving needs.",
  },
  {
    images: [
      "/images/tiles/Milano/1.jpg",
      "/images/tiles/Milano/2.jpg",
      "/images/tiles/Milano/3.jpg",
      "/images/tiles/Milano/4.jpg",
      "/images/tiles/Milano/5.jpg",
      "/images/tiles/Milano/6.txt",
      "/images/tiles/Milano/7.txt",
      "/images/tiles/Milano/8.txt",
      "/images/tiles/Milano/9.txt",
    ],
    title: "MILANO",
    description:
      "Elegant and smooth, Milano tiles are designed to bring Italian charm and sophistication to any surface.",
  },
  {
    images: [
      "/images/tiles/SquaredStoneFinish/1.jpg",
      "/images/tiles/SquaredStoneFinish/2.webp",
      "/images/tiles/SquaredStoneFinish/3.jpg",
      "/images/tiles/SquaredStoneFinish/4.jpg",
      "/images/tiles/SquaredStoneFinish/5.jpg",
    ],
    title: "SQUARED SHAPED STONE FINISH",
    description:
      "Features a natural stone finish that adds earthy tones and texture to floors or walls.",
  },

  {
    images: [
      "/images/tiles/BrickShaped/1.txt",
      "/images/tiles/BrickShaped/2.txt",
      "/images/tiles/BrickShaped/3.txt",
      "/images/tiles/BrickShaped/4.txt",
      "/images/tiles/BrickShaped/5.txt",
      "/images/tiles/BrickShaped/6.txt",
      "/images/tiles/BrickShaped/7.txt",
      "/images/tiles/BrickShaped/8.txt",
      "/images/tiles/BrickShaped/9.txt",
      "/images/tiles/BrickShaped/10.txt",
    ],
    title: "BRICK SHAPED",
    description:
      "A classic brick shape that offers a rustic, timeless appeal for both indoor and outdoor spaces.",
  },
  //precast items
  {
    images: [
      "/images/products/Precast Slabs/1.jpg",
      "/images/products/Precast Slabs/2.jpg",
      "/images/products/Precast Slabs/3.jpg",
      "/images/products/Precast Slabs/4.jpg",
      "/images/products/Precast Slabs/5.jpg",
      "/images/products/Precast Slabs/6.jpg",
      "/images/products/Precast Slabs/7.jpg",
      "/images/products/Precast Slabs/8.webp",
    ],
    title: "Precast Slabs",
    description:
      "Reinforced Cement Concrete / Plain Cement Concrete. We manufacture Precast Slabs using various raw materials of high-grade. The array of slabs we offer is highly appreciated due to excellent stress-bearing capacity, aesthetics, and the sheer variety offered in terms of dimensions and designs. These covering slabs can be used for driveways, roadways, patios, walkways, covering underground trench cables and wires for industrial purposes.",
  },
  {
    images: [
      "/images/products/Fencing Poles/1.jpg",
      "/images/products/Fencing Poles/2.jpg",
      "/images/products/Fencing Poles/3.jpg",
      "/images/products/Fencing Poles/4.jpg",
      "/images/products/Fencing Poles/5.jpg",
      "/images/products/Fencing Poles/6.jpg",
      "/images/products/Fencing Poles/7.jpg",
    ],
    title: "Fencing Pillar Post",
    description:
      "Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts. Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession. Manufactured by us in a variety of sizes and widths. Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market. The fencing poles can be supplied in bulk at affordable prices",
  },
  {
    images: [
      "/images/products/Precast Boundary Walls/1.jpg",
      "/images/products/Precast Boundary Walls/2.jpg",
      "/images/products/Precast Boundary Walls/3.jpg",
      "/images/products/Precast Boundary Walls/4.jpg",
      "/images/products/Precast Boundary Walls/5.webp",
      "/images/products/Precast Boundary Walls/6.webp",
    ],
    title: "Boundary wall",
    description:
      "Our product range includes a wide range of Boundary Walls such as Concrete Boundary Walls, Industrial Boundary Walls, Precast RCC Wall Panels, Precast RCC Columns/ Struts/ Posts and many more items.Our offered walls are manufactured from optimum quality materials and advanced technology at our sound manufacturing premises in adherence to the defined industry standards.We have performed strict quality inspection regarding strength and quality of the walls. Thereby, these are widely preferred and appreciated among our clients. In order to meet clients’ specific demands, our entire range is available in various standard length options such as 1800mm , 2100mm , 2400mm and also can be customerized according to client's requirements",
  },

  {
    images: [
      "/images/products/precast cable cover/1.jpeg",
      "/images/products/precast cable cover/2.webp",
      "/images/products/precast cable cover/3.jfif",
      "/images/products/precast cable cover/4.webp",
      "/images/products/precast cable cover/5.jpeg",
    ],
    title: "Cable Cover /Tiles",
    description:
      "Concrete Cable Protection Cover Tiles, also known as Cable Route Markers, are used frequently by utility companies to provide a clear indication to site staff who may be working close to underground electrical cables.The cables and wires are generally used in mechanical lines. These RCC / PCC Cover Slabs are constructed, keeping in view its quality construction. We have been catering to the bulk requirements to attain the satisfaction level of our customer. Moreover, our offered price range has helped in earning the trust of our customers.On request, bespoke covers can be manufactured to order for other services such as Telephone, Gas, Oil, Chemicals, Fibre Optics, etc.",
  },
  {
    images: [
      "/images/products/Precast Drains/1.jpg",
      "/images/products/Precast Drains/2.webp",
      "/images/products/Precast Drains/3.jpg",
      "/images/products/Precast Drains/4.webp",
      "/images/products/Precast Drains/5.jpg",
      "/images/products/Precast Drains/6.jpg",
    ],
    title: "Precast RCC Drains",
    description:
      "We are one of the topmost manufacturers and supplier of a wide range of Precast R.C.C. Drains in our domain.  These drains have holes and permit the collected water to get discharges into another drainage system. Designed by experienced and knowledgeable professionals, these drains exhibit optimum operational features.Precast U / V- Shaped Drains of various sizes for drainage of water along road sides, and in commercial, residential, and industrial areas. These products are made available to the customers in varied specifications, in order to meet their diverse requirements effectively.We are offering a wide range of Precast Concrete Box Culverts provide high flow capacity even where there is low gradient or headroom is not allowed. Our range of precast concrete box culverts are highly durable and can be easily installed on the site. Each Box Culverts are individually designed so as to cater to a varied external loading conditions.We accept Order of Precast Drains only in Bulk /Huge Quantities.",
  },

  {
    images: [
      "/images/products/Kerbstones/1.jpg",
      "/images/products/Kerbstones/2.jpg",
      "/images/products/Kerbstones/3.jpg",
      "/images/products/Kerbstones/4.jpg",
      "/images/products/Kerbstones/5.jpg",
      "/images/products/Kerbstones/6.jpg",
      "/images/products/Kerbstones/7.jpg",
      "/images/products/Kerbstones/8.jpg",
      "/images/products/Kerbstones/9.jpg",
    ],
    title: "Precast Kerb Stone",
    description:
      "We are a prominent manufacturer & supplier of huge assortment of Kerbstone, Precast Concrete Kerb Stones, Curbstone; that are widely used in construction sector and available in various sizes and shapes.We are concerned in offering an adequate range of Kerb Stones which have Cutting - Edge Or Champhered Edge Finish as per client's requirements. These are manufactured using the quality raw material and are widely used in the construction industries using Vibration or Hydraullic Manufacturing Process.Various tests are done by our quality controllers in order to achieve prevailing industrial standards. Apart from these, we offer these ranges to the clients at market-leading prices with Durability & Dimensions & Designs.",
  },
  {
    images: [
      "/images/products/Precast garbag bin/1.jpg",
      "/images/products/Precast garbag bin/2.jfif",
      "/images/products/Precast garbag bin/3.jfif",
      "/images/products/Precast garbag bin/4.jpg",
    ],
    title: "Precast Garbage Bin",
    description:
      "We Manufacture and Supply a range of RCC Garbage Bins to best of its quality.The RCC Garbage Bins conform to the standards and are made available in a variety of classes and sizes according to local Municipal Corporations.Known for their superior strength and resistance to damage, the Reinforced Cement Concrete Garbage Bins are made available at reasonable rates for the clients.The Garbage bins are heavy enough so that it will not be moved around or stolen. They are not easy to turn over. The Bins are suitable for large standard size plastic refuse bags that fold over the top for good hygiene and easy service which are generally preferred in Municipal Cleaning.",
  },
  {
    images: [
      "/images/products/Precast Water Tank/1.jpg",
      "/images/products/Precast Water Tank/2.webp",
      "/images/products/Precast Water Tank/3.jpg",
    ],
    title: "Precast Water Tank",
    description:
      "​We are a progressive company based on Asansol with the mission of becoming the premier Precast Concrete Water Tank and Precast Septic Tank manufacturers in Burdwan District.We pride ourselves on manufacturing high quality concrete water tanks and providing the best professional service.We manufacture a diverse range of Precast Overhead Water Tank supplied to a wide cliental base that includes local governments, civil & mining contractors, project builders, plumbing and landscaping specialists across the domain on a bulk quantity only.Quality, pricing and availability of various sizes of the range of Precast Water Storage Tanks has positioned us a pioneer supplier of these products in our area.",
  },
  {
    images: [
      "/images/products/Precast Concrete Block/1.jpg",
      "/images/products/Precast Concrete Block/2.webp",
      "/images/products/Precast Concrete Block/3.webp",
      "/images/products/Precast Concrete Block/4.jfif",
      "/images/products/Precast Concrete Block/5.jpg",
      "/images/products/Precast Concrete Block/6.jpg",
    ],
    title: "Precast Concrete Block",
    description:
      "We are one of the leading manufacturers of Concrete Blocks and hence widely appreciated in the entire domestic market for the fine quality of our products.These concrete blocks are sturdy in build and are extremely appreciated in the markets due to their environment friendly nature and manufactured from natural raw materials.These are not only resistant to fire but do not emit any toxic gas when exposed to fire. Available in even sizes these help in creating even and polished walls with minimum plastering.Our Concrete Blocks are well-known for features like fascinating designs, durable finish standards, sturdiness and easy installation.",
  },

  {
    images: [
      "/images/products/Precast Cement Products/1.avif",
      "/images/products/Precast Cement Products/2.jpg",
      "/images/products/Precast Cement Products/3.avif",
      "/images/products/Precast Cement Products/4.jpg",
      "/images/products/Precast Cement Products/5.webp",
      "/images/products/Precast Cement Products/6.webp",
    ],
    title: "Precast Cement Products",
    description:
      "We are a leading supplier and processor of all allied precast concrete products no matter how bulk the quantity is.You provide us your requirement in precasting and we will deliver you our best solution and service.We produce Precast Concrete Products From 50 lbs to 10 tons, no matter what shape or size we meet the commitments.(But we entertain requirements of special designed Precast Products only in Bulk / Huge Quantities requirement.All our products are processed from high quality raw materials which make the construction of various products durable, structurally sound, versatile and economic as compared to Cast-In-Situ Procedure. ​Honesty, impeccable quality, on time delivery, affordable pricing and customer satisfaction has helped us maintain a close association with our clients.",
  },
  //new Products
  {
    images: [
      "/images/products/Newly Launch Product/1.jfif",
      "/images/products/Newly Launch Product/2.jfif",
      "/images/products/Newly Launch Product/3.jfif",
    ],
    title: "CELLULAR LIGHT WEIGHT CONCRETE BLOCKS",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
  },

  {
    images: [
      "/images/products/Newly Launch Product/precast Door Frame.webp",
      "/images/products/Newly Launch Product/precast-door-frame.avif",
      "/images/products/Newly Launch Product/images.jfif",
    ],
    title: "CEMENT DOOR WINDOW FRAME",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
  },

  {
    images: [
      "/images/products/Newly Launch Product/cement bench.avif",
      "/images/products/Newly Launch Product/cement bench1.jfif",
      "/images/products/Newly Launch Product/cement bench2.jpg",
    ],
    title: "CEMENT Bench For OutDoor",
    description: "Bench",
  },

  {
    images: [
      "/images/products/Newly Launch Product/precast beam and coloumn.jfif",
      "/images/products/Newly Launch Product/precast wall pannels.jfif",
      "/images/products/Newly Launch Product/stairs.jfif",
      "/images/products/Newly Launch Product/precast housing unit.jpg",
    ],
    title: "Beam & columns / Wall Panels / Stairs / Structural Slab",
    description: "Beam & columns / Wall Panels / Stairs / Structural Slab",
  },
  {
    images: [
      "/images/products/Cement/1.jpg",
      "/images/products/Cement/2.jpg",

      "/images/products/Cement/3.jpg",
      "/images/products/Cement/4.jpg",
      "/images/products/Cement/5.jpg",
      "/images/products/Cement/6.jpg",
    ],
    title: "Cement ",
    description:
      "For any Cement (Trade Materials) PPC / PSC Enquiry of Requirement You can contact us for Bulk Quantity. We can Provide You the following Brands (Trade Material) depending on their Availability",
  },
];
