/**
 * Wok & Raga - Master Menu Catalog
 * 
 * Category list and culinary items.
 * The restaurant owner can easily add, edit, or modify prices and items in this file.
 */

export const menuCategories = [
  { id: "all", label: "All Items", icon: "restaurant" },
  { id: "starters", label: "Starters & Wok Appetizers", icon: "tapas" },
  { id: "indo-chinese", label: "Indo-Chinese Specials", icon: "local_fire_department" },
  { id: "momos", label: "Artisan Momos & Dim Sum", icon: "lunch_dining" },
  { id: "chinese", label: "Classic Chinese", icon: "ramen_dining" },
  { id: "noodles", label: "Wok Noodles & Chowmein", icon: "dinner_dining" },
  { id: "fried-rice", label: "Sizzling Fried Rice", icon: "rice_bowl" },
  { id: "main-course", label: "Main Course & Gravies", icon: "soup_kitchen" },
  { id: "tandoor", label: "Tandoor & Desi Specialties", icon: "outdoor_grill" },
  { id: "beverages", label: "Mocktails & Beverages", icon: "local_bar" },
  { id: "desserts", label: "Sweet Finales", icon: "icecream" }
];

export const menuItems = [
  // --- STARTERS & WOK APPETIZERS ---
  {
    id: "crispy-sesame-chili",
    category: "starters",
    name: "Crispy Sesame Chili",
    description: "Wok-tossed golden crisp tossed with sweet honey-chili glaze, roasted white sesame seeds, and garden scallions.",
    price: "₹180",
    numericPrice: 180,
    vegetarian: true,
    spicy: true,
    isSignature: true,
    badge: "Crowd Favorite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCygUjmGeg5NvnZ4n-FtQS-HlkLKyidt2CrbygJIeGQUJC8TYiRpdbGVMgyaJsuywqmYtOON8eqZWGuVuOjwOb7Uu6Ccw9whIbcv-b4h3AQuvH2bmwJtaKntQeZygxYRxUKrhzkIDPRUn_EuykoesYsq6_Fxs1S7p9gKq0DeinFX0RNmvW7uIv-c4wTSvMh7BkPxCvlIBBzdU-umvrCgzEdtqjXNJA3RR49T92ii1GGcHXoAqiSvvT8DPATKfdjw8f3l2Y"
  },
  {
    id: "sizzling-chili-platter",
    category: "starters",
    name: "Sizzling Chili Platter",
    description: "Wok-charred chicken or paneer slivers tossed with colorful capsicum, julienned sweet carrots, fresh lime wedges and bird’s eye chili.",
    price: "₹260",
    numericPrice: 260,
    vegetarian: false,
    spicy: true,
    isSignature: true,
    badge: "Chef Curated",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNSqWKSbkMwNRRicMUQKXDPGCanucSSzNQuByhStb54_V8DD5Axe-PsQbY8zCVoLdTtUPXasfZMLW8eI9JuUUlSSC50x9ggzKDtYs9EfyPMuhbHyMTtmdCWLCLQ7cQESeE03dLIXRFNNMiSr-1949jTsc2geQkzebscw_xm0GW6z0tr3KjgURM0hs-yXhJyO38chuEjeiRzyQhwgYysMLnGS1RU1iA3SmZA2mvq9GHbsMCmWdBXX6Z4ADYGVptTURN3jM"
  },
  {
    id: "crispy-corn-pepper",
    category: "starters",
    name: "Crispy Pepper Sweet Corn",
    description: "Golden fried sweet corn kernels tossed with crushed black pepper, chopped green chilies, and fresh spring onions.",
    price: "₹170",
    numericPrice: 170,
    vegetarian: true,
    spicy: false,
    isSignature: false,
    badge: "Crispy Delight",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxwkbvpUzu2pSSfSFxKgICOMKMo8iEtax56C6U-JDFchZxfvnzdJsAfrR2TPARxeelC51JXn1DmbDbC43Ch2c3mXYd7tAz1xbdK0OzR3HJKHiMUGMW3Y_43uJxGubCgsoazq6QclsaApSH3DYJvmunLDvkzvEgHCf4BGKSSvjXrWO-pqy9KFLS9xQP3q9cTE3Kfm8s3jsnmGEvoHBOuM1C2RRjn2a-UCCMj9bJJfUVw9lwIXe1HWLJxCtye6GX91rTRc"
  },
  {
    id: "chicken-lollipop-wok",
    category: "starters",
    name: "Wok-Tossed Chicken Lollipop",
    description: "Crisp frenched chicken drumettes coated in a fiery Schezwan glaze with garlic and ginger essence.",
    price: "₹240",
    numericPrice: 240,
    vegetarian: false,
    spicy: true,
    isSignature: false,
    badge: "Must Try",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNSqWKSbkMwNRRicMUQKXDPGCanucSSzNQuByhStb54_V8DD5Axe-PsQbY8zCVoLdTtUPXasfZMLW8eI9JuUUlSSC50x9ggzKDtYs9EfyPMuhbHyMTtmdCWLCLQ7cQESeE03dLIXRFNNMiSr-1949jTsc2geQkzebscw_xm0GW6z0tr3KjgURM0hs-yXhJyO38chuEjeiRzyQhwgYysMLnGS1RU1iA3SmZA2mvq9GHbsMCmWdBXX6Z4ADYGVptTURN3jM"
  },

  // --- MOMOS & DIM SUM ---
  {
    id: "pan-fried-artisan-momos",
    category: "momos",
    name: "Pan-Fried Artisan Momos",
    description: "Hand-crimped Himalayan dumplings, pan-seared to a golden bottom crunch, served with our signature zesty chili chutney.",
    price: "₹160",
    numericPrice: 160,
    vegetarian: true,
    spicy: true,
    isSignature: true,
    badge: "Hill Specialty",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLM3A5xEOs1d_Ud7425sAqdYq3MTgaYt2uBu8x4SjErkuyDnPs3abPuUYhAmk5Z6FBDUGseEh5izLgJyi4ZX-2Jdxa0w6xKwPs54MkGLhriCrBs7-v9F4zvHrsuFC8jKgNj0vsIlmsuMYAKgs6zTaIuDROjvUK4KRn63EUiDkGFWPkPoISWd05d_YIZt0gbXtSlXkM8f-zf0w_U2beRn5vYX9cPQucye0S7g8nYyH2qGCiXfifNUOx3BY1EuoLGls7ot0"
  },
  {
    id: "steamed-chicken-momos",
    category: "momos",
    name: "Classic Steamed Himalayan Momos",
    description: "Delicate steamed dumplings stuffed with spiced juicy minced chicken or farm veggies, served with fiery tomato-garlic dip.",
    price: "₹140",
    numericPrice: 140,
    vegetarian: false,
    spicy: false,
    isSignature: false,
    badge: "Traditional",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLM3A5xEOs1d_Ud7425sAqdYq3MTgaYt2uBu8x4SjErkuyDnPs3abPuUYhAmk5Z6FBDUGseEh5izLgJyi4ZX-2Jdxa0w6xKwPs54MkGLhriCrBs7-v9F4zvHrsuFC8jKgNj0vsIlmsuMYAKgs6zTaIuDROjvUK4KRn63EUiDkGFWPkPoISWd05d_YIZt0gbXtSlXkM8f-zf0w_U2beRn5vYX9cPQucye0S7g8nYyH2qGCiXfifNUOx3BY1EuoLGls7ot0"
  },
  {
    id: "jhol-momo-diphu-special",
    category: "momos",
    name: "Diphu Special Jhol Momos",
    description: "Steamed dumplings submerged in a fragrant, tangy sesame-peanut broth infused with mountain herbs and toasted cumin.",
    price: "₹180",
    numericPrice: 180,
    vegetarian: true,
    spicy: true,
    isSignature: false,
    badge: "Soulful Broth",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLM3A5xEOs1d_Ud7425sAqdYq3MTgaYt2uBu8x4SjErkuyDnPs3abPuUYhAmk5Z6FBDUGseEh5izLgJyi4ZX-2Jdxa0w6xKwPs54MkGLhriCrBs7-v9F4zvHrsuFC8jKgNj0vsIlmsuMYAKgs6zTaIuDROjvUK4KRn63EUiDkGFWPkPoISWd05d_YIZt0gbXtSlXkM8f-zf0w_U2beRn5vYX9cPQucye0S7g8nYyH2qGCiXfifNUOx3BY1EuoLGls7ot0"
  },

  // --- INDO-CHINESE & GRAVIES ---
  {
    id: "classic-dark-manchurian",
    category: "indo-chinese",
    name: "Classic Dark Manchurian",
    description: "Crispy hand-rolled vegetable dumplings immersed in a dark, garlic-laden soy and ginger reduction with garden cilantro.",
    price: "₹210",
    numericPrice: 210,
    vegetarian: true,
    spicy: false,
    isSignature: true,
    badge: "Vegetarian Classic",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_9F86MJ8t6nfTAzoERxc0M-ZITzG6T0NnADXurAOYg392cPYZdtNn2OixupD9bblvpyjouxcqed_-vtxlfwRUrE27W0MhgO-n1Bj-RHxU91Q5RMl0ytamdvV_WS9TDR-DUjO4nQ9XuVlpY5KC0EuRSNen0Rwc0FjhEvNuqkMFS8KfxZz6TbUPeCzdOjfNMAEpbOB0hX5TdiP9iCa5jMYGQ4Mnh-e529O1xrM7RY_tvzC_XrrhfX8Ii7Hqsl-LSIt9H2I"
  },
  {
    id: "chili-chicken-gravy",
    category: "indo-chinese",
    name: "Authentic Chili Chicken (Dry / Gravy)",
    description: "Tender chicken cubes wok-seared with bell peppers, green chilies, dark soy sauce, and aromatic garlic cloves.",
    price: "₹240",
    numericPrice: 240,
    vegetarian: false,
    spicy: true,
    isSignature: false,
    badge: "Best Seller",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_9F86MJ8t6nfTAzoERxc0M-ZITzG6T0NnADXurAOYg392cPYZdtNn2OixupD9bblvpyjouxcqed_-vtxlfwRUrE27W0MhgO-n1Bj-RHxU91Q5RMl0ytamdvV_WS9TDR-DUjO4nQ9XuVlpY5KC0EuRSNen0Rwc0FjhEvNuqkMFS8KfxZz6TbUPeCzdOjfNMAEpbOB0hX5TdiP9iCa5jMYGQ4Mnh-e529O1xrM7RY_tvzC_XrrhfX8Ii7Hqsl-LSIt9H2I"
  },
  {
    id: "chili-paneer-dry",
    category: "indo-chinese",
    name: "Wok-Tossed Chili Paneer",
    description: "Fresh cottage cheese cubes tossed with crunchy capsicum, onions, and spicy soy-chili reduction.",
    price: "₹220",
    numericPrice: 220,
    vegetarian: true,
    spicy: true,
    isSignature: false,
    badge: "Popular",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNSqWKSbkMwNRRicMUQKXDPGCanucSSzNQuByhStb54_V8DD5Axe-PsQbY8zCVoLdTtUPXasfZMLW8eI9JuUUlSSC50x9ggzKDtYs9EfyPMuhbHyMTtmdCWLCLQ7cQESeE03dLIXRFNNMiSr-1949jTsc2geQkzebscw_xm0GW6z0tr3KjgURM0hs-yXhJyO38chuEjeiRzyQhwgYysMLnGS1RU1iA3SmZA2mvq9GHbsMCmWdBXX6Z4ADYGVptTURN3jM"
  },

  // --- NOODLES & CHOWMEIN ---
  {
    id: "hakka-noodles-wok-tossed",
    category: "noodles",
    name: "Classic Wok Hakka Noodles",
    description: "Thin noodles tossed on high flame with julienned vegetables, light soy, white pepper, and spring greens.",
    price: "₹170",
    numericPrice: 170,
    vegetarian: true,
    spicy: false,
    isSignature: false,
    badge: "Wok Hei",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxwkbvpUzu2pSSfSFxKgICOMKMo8iEtax56C6U-JDFchZxfvnzdJsAfrR2TPARxeelC51JXn1DmbDbC43Ch2c3mXYd7tAz1xbdK0OzR3HJKHiMUGMW3Y_43uJxGubCgsoazq6QclsaApSH3DYJvmunLDvkzvEgHCf4BGKSSvjXrWO-pqy9KFLS9xQP3q9cTE3Kfm8s3jsnmGEvoHBOuM1C2RRjn2a-UCCMj9bJJfUVw9lwIXe1HWLJxCtye6GX91rTRc"
  },
  {
    id: "schezwan-spicy-noodles",
    category: "noodles",
    name: "Fiery Schezwan Noodles",
    description: "Noodles tossed in homemade spicy Schezwan sauce with crushed red chilies, garlic, and fresh bell peppers.",
    price: "₹190",
    numericPrice: 190,
    vegetarian: false,
    spicy: true,
    isSignature: false,
    badge: "Spicy & Bold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxwkbvpUzu2pSSfSFxKgICOMKMo8iEtax56C6U-JDFchZxfvnzdJsAfrR2TPARxeelC51JXn1DmbDbC43Ch2c3mXYd7tAz1xbdK0OzR3HJKHiMUGMW3Y_43uJxGubCgsoazq6QclsaApSH3DYJvmunLDvkzvEgHCf4BGKSSvjXrWO-pqy9KFLS9xQP3q9cTE3Kfm8s3jsnmGEvoHBOuM1C2RRjn2a-UCCMj9bJJfUVw9lwIXe1HWLJxCtye6GX91rTRc"
  },

  // --- FRIED RICE ---
  {
    id: "wok-raga-special-fried-rice",
    category: "fried-rice",
    name: "Wok & Raga Signature Fried Rice",
    description: "Fragrant basmati rice tossed with garden vegetables, roasted garlic butter, scallions, and light seasoning.",
    price: "₹190",
    numericPrice: 190,
    vegetarian: true,
    spicy: false,
    isSignature: false,
    badge: "Chef Special",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCygUjmGeg5NvnZ4n-FtQS-HlkLKyidt2CrbygJIeGQUJC8TYiRpdbGVMgyaJsuywqmYtOON8eqZWGuVuOjwOb7Uu6Ccw9whIbcv-b4h3AQuvH2bmwJtaKntQeZygxYRxUKrhzkIDPRUn_EuykoesYsq6_Fxs1S7p9gKq0DeinFX0RNmvW7uIv-c4wTSvMh7BkPxCvlIBBzdU-umvrCgzEdtqjXNJA3RR49T92ii1GGcHXoAqiSvvT8DPATKfdjw8f3l2Y"
  },
  {
    id: "egg-chicken-fried-rice",
    category: "fried-rice",
    name: "Smoky Egg & Chicken Fried Rice",
    description: "Wok-scrambled farm eggs, seasoned chicken bits, and long-grain rice tossed in live fire with fresh spring onions.",
    price: "₹220",
    numericPrice: 220,
    vegetarian: false,
    spicy: false,
    isSignature: false,
    badge: "Hearty",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCygUjmGeg5NvnZ4n-FtQS-HlkLKyidt2CrbygJIeGQUJC8TYiRpdbGVMgyaJsuywqmYtOON8eqZWGuVuOjwOb7Uu6Ccw9whIbcv-b4h3AQuvH2bmwJtaKntQeZygxYRxUKrhzkIDPRUn_EuykoesYsq6_Fxs1S7p9gKq0DeinFX0RNmvW7uIv-c4wTSvMh7BkPxCvlIBBzdU-umvrCgzEdtqjXNJA3RR49T92ii1GGcHXoAqiSvvT8DPATKfdjw8f3l2Y"
  },

  // --- TANDOOR & INDIAN DELICACIES ---
  {
    id: "tandoori-paneer-tikka",
    category: "tandoor",
    name: "Charcoal Tandoori Paneer Tikka",
    description: "Clay-oven roasted cottage cheese marinated in hung curd, Kashmiri deggi mirch, and hand-ground hill spices.",
    price: "₹240",
    numericPrice: 240,
    vegetarian: true,
    spicy: true,
    isSignature: false,
    badge: "Clay Oven",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNSqWKSbkMwNRRicMUQKXDPGCanucSSzNQuByhStb54_V8DD5Axe-PsQbY8zCVoLdTtUPXasfZMLW8eI9JuUUlSSC50x9ggzKDtYs9EfyPMuhbHyMTtmdCWLCLQ7cQESeE03dLIXRFNNMiSr-1949jTsc2geQkzebscw_xm0GW6z0tr3KjgURM0hs-yXhJyO38chuEjeiRzyQhwgYysMLnGS1RU1iA3SmZA2mvq9GHbsMCmWdBXX6Z4ADYGVptTURN3jM"
  },
  {
    id: "murgh-malai-tikka",
    category: "tandoor",
    name: "Murgh Malai Tikka",
    description: "Creamy boneless chicken morsels infused with green cardamom, melted cheese, roasted garlic, and gentle spices.",
    price: "₹270",
    numericPrice: 270,
    vegetarian: false,
    spicy: false,
    isSignature: false,
    badge: "Rich & Mild",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNSqWKSbkMwNRRicMUQKXDPGCanucSSzNQuByhStb54_V8DD5Axe-PsQbY8zCVoLdTtUPXasfZMLW8eI9JuUUlSSC50x9ggzKDtYs9EfyPMuhbHyMTtmdCWLCLQ7cQESeE03dLIXRFNNMiSr-1949jTsc2geQkzebscw_xm0GW6z0tr3KjgURM0hs-yXhJyO38chuEjeiRzyQhwgYysMLnGS1RU1iA3SmZA2mvq9GHbsMCmWdBXX6Z4ADYGVptTURN3jM"
  },

  // --- BEVERAGES & MOCKTAILS ---
  {
    id: "raga-sunset-cooler",
    category: "beverages",
    name: "Raga Sunset Cooler",
    description: "Refreshing artisan mocktail layered with citrus orange, passion fruit, fresh mint leaves, and sparkling soda.",
    price: "₹130",
    numericPrice: 130,
    vegetarian: true,
    spicy: false,
    isSignature: false,
    badge: "Signature Sip",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEL0HB2YIYhFUNDsRq4Y7Tz_Uil5o6I4FyEW-v17tAyEF1MiNj4nvQBTO1bbNV7fymv4pi0zi6qAKWUcpu1EL15x49w-NPZarlYS_MD6pIhiYGGnxBji3kDfiW0hdfUXlWEm3UAAppAivYSDgs4V5bkds3cmtpvsqPDnPxBraoAkpRIMf73O4yv0CUsGtgy7oh2SJJjltkZuAxC3yV35M2brNjo0PbhVlfLEOrkIUwqq3bIBkGO4uf_OYlt50Y05MEqWk"
  },
  {
    id: "fresh-lime-soda",
    category: "beverages",
    name: "Assam Hill Lemon & Mint Soda",
    description: "Locally sourced aromatic lemon juice, muddled mint, rock salt, and chilled soda.",
    price: "₹90",
    numericPrice: 90,
    vegetarian: true,
    spicy: false,
    isSignature: false,
    badge: "Refreshing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEL0HB2YIYhFUNDsRq4Y7Tz_Uil5o6I4FyEW-v17tAyEF1MiNj4nvQBTO1bbNV7fymv4pi0zi6qAKWUcpu1EL15x49w-NPZarlYS_MD6pIhiYGGnxBji3kDfiW0hdfUXlWEm3UAAppAivYSDgs4V5bkds3cmtpvsqPDnPxBraoAkpRIMf73O4yv0CUsGtgy7oh2SJJjltkZuAxC3yV35M2brNjo0PbhVlfLEOrkIUwqq3bIBkGO4uf_OYlt50Y05MEqWk"
  },

  // --- DESSERTS ---
  {
    id: "sizzling-brownie-ice-cream",
    category: "desserts",
    name: "Sizzling Chocolate Brownie with Vanilla",
    description: "Warm fudge brownie served on a cast-iron sizzler platter, topped with rich vanilla bean ice cream and melted dark chocolate.",
    price: "₹180",
    numericPrice: 180,
    vegetarian: true,
    spicy: false,
    isSignature: false,
    badge: "Decadent Finale",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxwkbvpUzu2pSSfSFxKgICOMKMo8iEtax56C6U-JDFchZxfvnzdJsAfrR2TPARxeelC51JXn1DmbDbC43Ch2c3mXYd7tAz1xbdK0OzR3HJKHiMUGMW3Y_43uJxGubCgsoazq6QclsaApSH3DYJvmunLDvkzvEgHCf4BGKSSvjXrWO-pqy9KFLS9xQP3q9cTE3Kfm8s3jsnmGEvoHBOuM1C2RRjn2a-UCCMj9bJJfUVw9lwIXe1HWLJxCtye6GX91rTRc"
  }
];

export default { menuCategories, menuItems };
