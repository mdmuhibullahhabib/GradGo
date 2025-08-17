import React from "react";
import { Link } from "react-router-dom";
// import useGigs from "../../hooks/useGigs";

const fakeGigs = [
  {
    _id: "gig1",
    title: "Study in Canada - Full Consultation",
    description: "Step-by-step guidance on applying for Canadian universities, visa processing, and scholarship opportunities.",
    category: "Canada",
    price: 8000,
    consultant: {
      id: "consult1",
      name: "Dr. Amina Khan",
      photo: "https://i.pravatar.cc/150?img=21",
      shortBio: "Expert in North American admissions with 10+ years of experience.",
    },
  },
  {
    _id: "gig2",
    title: "UK University Application Support",
    description: "Complete assistance with UCAS applications, personal statements, and interview preparation.",
    category: "UK",
    price: 6500,
    consultant: {
      id: "consult2",
      name: "John Smith",
      photo: "https://i.pravatar.cc/150?img=22",
      shortBio: "UK admissions specialist, former Oxford admissions officer.",
    },
  },
  {
    _id: "gig3",
    title: "Australian Study Abroad Package",
    description: "Guidance on choosing the right Australian universities, scholarships, and post-study work visa details.",
    category: "Australia",
    price: 7000,
    consultant: {
      id: "consult3",
      name: "Sophia Rahman",
      photo: "https://i.pravatar.cc/150?img=23",
      shortBio: "Helps 200+ students yearly secure admission in Australia.",
    },
  },
  {
    _id: "gig4",
    title: "USA Ivy League Mentorship",
    description: "Specialized coaching for Ivy League applications, including SAT prep and essay reviews.",
    category: "USA",
    price: 12000,
    consultant: {
      id: "consult4",
      name: "Michael Johnson",
      photo: "https://i.pravatar.cc/150?img=24",
      shortBio: "Ivy League graduate with 8+ years of consulting experience.",
    },
  },
  {
    _id: "gig5",
    title: "Germany Study Visa & University Selection",
    description: "Full support for admission into top German universities with guidance on DAAD scholarships.",
    category: "Germany",
    price: 6000,
    consultant: {
      id: "consult5",
      name: "Hannah Becker",
      photo: "https://i.pravatar.cc/150?img=25",
      shortBio: "German education expert, fluent in both English and German.",
    },
  },
  {
    _id: "gig6",
    title: "Japan Study Abroad Guidance",
    description: "Special consultation for MEXT scholarship and admission to Japanese universities.",
    category: "Japan",
    price: 5500,
    consultant: {
      id: "consult6",
      name: "Yuki Tanaka",
      photo: "https://i.pravatar.cc/150?img=26",
      shortBio: "Specializes in engineering and tech programs in Japan.",
    },
  },
  {
    _id: "gig7",
    title: "France Higher Studies Support",
    description: "Assistance with French universities, Campus France, and scholarship guidance.",
    category: "France",
    price: 5800,
    consultant: {
      id: "consult7",
      name: "Claire Dupont",
      photo: "https://i.pravatar.cc/150?img=27",
      shortBio: "Fluent in French & English, helps students secure Paris-based universities.",
    },
  },
  {
    _id: "gig8",
    title: "Malaysia Study Abroad Package",
    description: "Affordable consultation for top Malaysian universities with visa processing support.",
    category: "Malaysia",
    price: 4000,
    consultant: {
      id: "consult8",
      name: "Ahmad Zulkifli",
      photo: "https://i.pravatar.cc/150?img=28",
      shortBio: "Malaysia study expert with focus on affordable education.",
    },
  },
  {
    _id: "gig9",
    title: "Italy Masters Program Guidance",
    description: "Specialized support for Masters in Italy with tuition fee waiver guidance.",
    category: "Italy",
    price: 6200,
    consultant: {
      id: "consult9",
      name: "Luca Rossi",
      photo: "https://i.pravatar.cc/150?img=29",
      shortBio: "Helps students secure scholarships at top Italian universities.",
    },
  },
  {
    _id: "gig10",
    title: "Netherlands University Admission",
    description: "Step-by-step assistance with Dutch universities and scholarship programs.",
    category: "Netherlands",
    price: 7500,
    consultant: {
      id: "consult10",
      name: "Eva Janssen",
      photo: "https://i.pravatar.cc/150?img=30",
      shortBio: "Dutch higher studies expert, specialized in STEM programs.",
    },
  },
  {
    _id: "gig11",
    title: "Sweden Scholarship Guidance",
    description: "Complete support for applying to Swedish universities and SI scholarships.",
    category: "Sweden",
    price: 7200,
    consultant: {
      id: "consult11",
      name: "Anders Larsson",
      photo: "https://i.pravatar.cc/150?img=31",
      shortBio: "Scholarship success rate of 85% in Swedish programs.",
    },
  },
  {
    _id: "gig12",
    title: "New Zealand Study Abroad",
    description: "Guidance on universities, PR opportunities, and visa processing in New Zealand.",
    category: "New Zealand",
    price: 6800,
    consultant: {
      id: "consult12",
      name: "Olivia Brown",
      photo: "https://i.pravatar.cc/150?img=32",
      shortBio: "Specializes in business and IT programs in New Zealand.",
    },
  },
  {
    _id: "gig13",
    title: "South Korea Education Consulting",
    description: "Help with Korean universities, Global Korea Scholarship (GKS), and language prep.",
    category: "South Korea",
    price: 5600,
    consultant: {
      id: "consult13",
      name: "Kim Min-Jae",
      photo: "https://i.pravatar.cc/150?img=33",
      shortBio: "South Korea education expert, fluent in Korean & English.",
    },
  },
  {
    _id: "gig14",
    title: "China Scholarship Program Support",
    description: "Guidance on CSC scholarships and admission to top Chinese universities.",
    category: "China",
    price: 5000,
    consultant: {
      id: "consult14",
      name: "Li Wei",
      photo: "https://i.pravatar.cc/150?img=34",
      shortBio: "Helps 100+ students yearly secure CSC scholarships.",
    },
  },
  {
    _id: "gig15",
    title: "Spain Study Abroad Guidance",
    description: "Support for Spanish universities, scholarships, and visa procedures.",
    category: "Spain",
    price: 5900,
    consultant: {
      id: "consult15",
      name: "Carlos Martinez",
      photo: "https://i.pravatar.cc/150?img=35",
      shortBio: "Spanish universities admission expert for Arts & Humanities.",
    },
  },
  {
    _id: "gig16",
    title: "Turkey University Admission Support",
    description: "Guidance on Turkish universities, YÖS exam, and Türkiye scholarships.",
    category: "Turkey",
    price: 4800,
    consultant: {
      id: "consult16",
      name: "Ayşe Demir",
      photo: "https://i.pravatar.cc/150?img=36",
      shortBio: "Helps students secure government scholarships in Turkey.",
    },
  },
  {
    _id: "gig17",
    title: "Poland Study Abroad Package",
    description: "Complete guidance for admission and affordable study options in Poland.",
    category: "Poland",
    price: 4500,
    consultant: {
      id: "consult17",
      name: "Anna Kowalska",
      photo: "https://i.pravatar.cc/150?img=37",
      shortBio: "Focuses on low-cost European study opportunities.",
    },
  },
  {
    _id: "gig18",
    title: "Ireland University Application Help",
    description: "Support for applying to Irish universities and scholarships.",
    category: "Ireland",
    price: 7100,
    consultant: {
      id: "consult18",
      name: "Patrick O'Brien",
      photo: "https://i.pravatar.cc/150?img=38",
      shortBio: "Specialist in Irish higher education and visa processes.",
    },
  },
  {
    _id: "gig19",
    title: "Dubai & UAE Study Abroad",
    description: "Guidance for admission in Dubai and UAE universities with part-time job support.",
    category: "UAE",
    price: 5200,
    consultant: {
      id: "consult19",
      name: "Fatima Al-Sayed",
      photo: "https://i.pravatar.cc/150?img=39",
      shortBio: "Middle East education consultant with 7+ years experience.",
    },
  },
  {
    _id: "gig20",
    title: "Switzerland Masters Guidance",
    description: "Help with applications to top Swiss universities and hospitality programs.",
    category: "Switzerland",
    price: 8500,
    consultant: {
      id: "consult20",
      name: "Lukas Meier",
      photo: "https://i.pravatar.cc/150?img=40",
      shortBio: "Specializes in Swiss hospitality & management education.",
    },
  },
];


const Gigs = () => {
    // const [gigs] =useGigs();
      const gigs = fakeGigs;
    console.log(gigs)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Explore Consultant Gigs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig) => (
          <div
            key={gig._id}
            className="relative bg-white/60 backdrop-blur-md shadow-lg p-5 rounded-xl border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{gig.title}</h3>

            <p className="text-sm text-gray-600 mb-2 line-clamp-3">{gig.description}</p>

            <span className="text-xs font-medium text-white bg-blue-500 px-2 py-1 rounded-full inline-block mb-3">
              {gig.category}
            </span>

            <p className="text-lg text-green-600 font-semibold mb-4">৳ {gig.price}</p>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={gig.consultant.photo}
                alt={gig.consultant.name}
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <div>
                <Link
                  to={`/consultant/${gig.consultant.id}`}
                  className="text-indigo-700 hover:underline font-medium"
                >
                  {gig.consultant.name}
                </Link>
                <p className="text-xs text-gray-500">{gig.consultant.shortBio}</p>
              </div>
            </div>

            <Link
              to={`/gigs/${gig._id}`}
                state={{ gig }}
              className="btn btn-sm btn-primary w-full mt-auto"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
