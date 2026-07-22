// Lucas County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-21

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor/platform that hosts the county Auditor's online parcel records.
export const AUDITOR_VENDOR = "AREIS Online";

export const LINKS = [
  // ---------- Government ----------
  { name: "Lucas County (Official Site)", category: "Government", subcategory: "County", url: "https://www.co.lucas.oh.us/", description: "Official government portal for Lucas County, Ohio (county seat: Toledo)." },
  { name: "Lucas County Auditor (AREIS)", category: "Government", subcategory: "Auditor", url: "https://www.lucascountyohioauditor.gov/", description: "Property records, valuations, and the AREIS Online parcel/property search." },
  { name: "Lucas County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.lucascountyohiovotes.gov/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Toledo", category: "Government", subcategory: "City", url: "https://toledo.oh.gov/", description: "Government site for the City of Toledo, the county seat and Ohio's fourth-largest city." },
  // ---------- Education ----------
  { name: "Toledo Lucas County Public Library", category: "Education", subcategory: "Library", url: "https://www.toledolibrary.org/", description: "Nationally recognized public library system serving all of Lucas County." },
  { name: "Toledo Public Schools", category: "Education", subcategory: "K-12", url: "https://www.tps.org/", description: "The county seat's public school district and the largest in the county." },
  { name: "University of Toledo", category: "Education", subcategory: "Higher Ed", url: "https://www.utoledo.edu/", description: "Public research university in Toledo, including the UToledo Medical Center." },
  // ---------- Health ----------
  { name: "Toledo-Lucas County Health Department", category: "Health", subcategory: "Public Health", url: "https://lucascountyhealth.com/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "ProMedica", category: "Health", subcategory: "Hospital", url: "https://www.promedica.org/", description: "Toledo-based nonprofit health system (Toledo Hospital and regional facilities)." },
  // ---------- Business & Economy ----------
  { name: "Toledo Regional Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.toledochamber.com/", description: "Regional business advocacy, member support, and economic resources." },
  // ---------- Recreation & Tourism ----------
  { name: "Metroparks Toledo", category: "Recreation & Tourism", subcategory: "Parks", url: "https://metroparkstoledo.com/", description: "Award-winning regional park system across Lucas County." },
  { name: "Toledo Zoo & Aquarium", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.toledozoo.org/", description: "One of the nation's top-ranked zoos, in Toledo." },
  // ---------- News & Media ----------
  { name: "The Blade", category: "News & Media", subcategory: "Newspaper", url: "https://www.toledoblade.com/", description: "Toledo's daily newspaper covering Lucas County and northwest Ohio." },
];
