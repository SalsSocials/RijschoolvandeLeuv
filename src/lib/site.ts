export const SITE = {
  name: "Rijschool Van De Leuv",
  owner: "Joey van de Leuv",
  slogan: "Veilig. Zelfverzekerd. Met plezier.",
  // Pas dit telefoonnummer eenvoudig aan
  phone: "31612345678",
  email: "info@rijschoolvandeleuv.nl",
  region: "West-Friesland",
};

export const whatsappUrl = (
  msg = "Hoi Joey, ik wil graag een proefles inplannen!"
) => `https://wa.me/${SITE.phone}?text=${encodeURIComponent(msg)}`;
