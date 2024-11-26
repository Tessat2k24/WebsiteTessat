import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";



import edwin from "./ProfileImages/Edwin.jpg";
import asif from "./ProfileImages/Asif-main.jpeg";
import bijin from "./ProfileImages/Bijin-main.jpeg";
import bino from "./ProfileImages/Bino-main.jpeg";
import joseph from "./ProfileImages/joseph.jpg";
import sethu from "./ProfileImages/Sethu.jpg";
import marianna from "./ProfileImages/Marianna.jpeg";
import alan from "./ProfileImages/Alan.jpeg";
import adhithyan from "./ProfileImages/Adhithyan.jpg";
import sreesankar from "./ProfileImages/Sreesankar.jpg";
import gopika from "./ProfileImages/Gopika.jpg";
import alen from "./ProfileImages/Alen.jpg";
import diyasusan from "./ProfileImages/DiyaSusan.jpg";
import nikhil from "./ProfileImages/Nikhil.jpg";
import blessy from "./ProfileImages/Blessy.jpg";
import andrewjos from "./ProfileImages/Andrewjos.jpg";
import rahul from "./ProfileImages/Rahul.jpg";
import diyasinoy from "./ProfileImages/DiyaSinoy.jpg";
import stefan from "./ProfileImages/Stefan.jpg";
import Vaishnav from "./ProfileImages/Vaishnav.png";

// Team data with categories
const teamMembers = [
  {
    id: 1,
    name: "Edwin K Jayesh",
    role: "CEO",
    category: "Executive",
    image: edwin,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/edwinkjayesh",
        isBrand: true,
      },

      {
        platform: "envelope",
        url: "mailto:edwinkjap11@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/edwin.k.jayesh?igsh=MWJib3hnMTRwaTV1cA==",
        isBrand: true,
      },
    ],
  },
  {
    id: 2,
    name: "Joseph Binil",
    role: "COO",
    category: "Executive",
    image: joseph,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/joseph-binil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "mailto:josephmbinil@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/joseph_binil_?igsh=MTNtNTJqZ2s1d3k2Nw==",
        isBrand: true,
      },
    ],
  },

  {
    id: 3,
    name: "Bijin Kurian",
    role: "Managing Director",
    category: "Executive",
    image: bijin,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/bijin-kurian-306051252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "mailto:bijinkalayil@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/bijin_kk?igsh=bHNhb3R3MWZtNnp2",
        isBrand: true,
      },
    ],
  },
  {
    id: 4,
    name: "Asif Muhammad Sadhik",
    role: "Chief Technical Officer",
    category: "Executive",
    image: asif,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/asif-muhammad-sadhik-51a6a9255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "mohammedazif77@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/aziffeh?igsh=MWE4OGliaWF0NjA3dQ==",
        isBrand: true,
      },
    ],
  },
  {
    id: 5,
    name: "Bino J Panicker",
    role: "Web Head",
    category: "Executive",
    image: bino,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/bino-j-panicker-820937257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "binojp2005@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/binojpanicker?igsh=OXhhN2ZpOTRvNXho",
        isBrand: true,
      },
    ],
  },
  {
    id: 6,
    name: "Sethunath A",
    role: "Fullstack Developer",
    category: "Software Dev",
    image: sethu,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/sethunatha2003/",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "sethunatha2003@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/_sethunath._/?igsh=MWJsZjhrYmtoeWs3cg%3D%3D",
        isBrand: true,
      },
    ],
  },
  {
    id: 7,
    name: "Marianna Martin",
    role: "Software Engineer",
    category: "Software Dev",
    image: marianna,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/marianna-martin-854605254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "mariannamartin219@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "",
        isBrand: true,
      },
    ],
  },
  {
    id: 8,
    name: "Alan Rony",
    role: "Research Intern",
    category: "Intern",
    image: alan,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/alan-rony-968238269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "alanrony748@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/alan____rony?igsh=MTdzY2Q5Z2poYWZzdg==",
        isBrand: true,
      },
    ],
  },
  {
    id: 9,
    name: "Adhithyan VJ",
    role: "System Developement Engineer",
    category: "System Dev",
    image: adhithyan,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/adhithyan-vj-4a10192a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "postboxno.1128@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/_.a_.d_.h_.i/profilecard/?igsh=MXU4eGlmN2MwZXloZA==",
        isBrand: true,
      },
    ],
  },
  {
    id: 10,
    name: "Sreesankar Jayasankar",
    role: "Research Intern",
    category: "Intern",
    image: sreesankar,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/sreesankar-jayasankar-89167027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "jsreesankar@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/ssankar.j_/profilecard/?igsh=b3llMjF4Y2F3b3k=",
        isBrand: true,
      },
    ],
  },
  {
    id: 11,
    name: "Gopika S",
    role: "Research Intern",
    category: "Intern",
    image: gopika,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/gopika-s-prolinku",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "gopika.stwothousand4@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/gopsiam?igsh=aXVrdXBwNGFqOWpw",
        isBrand: true,
      },
    ],
  },
  {
    id: 12,
    name: "Alen T Binu",
    role: "Intern",
    category: "Intern",
    image: alen,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/alen-t-binu",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "alentbinu0481@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "",
        isBrand: true,
      },
    ],
  },
  {
    id: 13,
    name: "Diya Susan Mathew",
    role: "FrontEnd Developer",
    category: "Software Dev",
    image: diyasusan,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/diya-susan-mathew-7186a3287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "susanmathewdiya32@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/_.diyasusan._/profilecard/?igsh=MWthandtdjY3dnF2eQ==",
        isBrand: true,
      },
    ],
  },
  {
    id: 14,
    name: "Nikhil Rajesh",
    role: "Documentation Officer",
    category: "Documentation",
    image: nikhil,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/nikhil-rajesh-548130323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "nikhilrajesh@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/nickaniman/profilecard/?igsh=MTN0b3U5cThuOHJyZA==",
        isBrand: true,
      },
    ],
  },
  {
    id: 15,
    name: "Blessy Mathew",
    role: "Documentation Officer",
    category: "Documentation",
    image: blessy,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/blessy-mathew-24a367291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "blessyava12@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/blessy.m12/profilecard/?igsh=NnRpMDEyd2QwMnV2",
        isBrand: true,
      },
    ],
  },
  {
    id: 16,
    name: "Andrewjos Sebastian",
    role: "System Development Engineer",
    category: "System Dev",
    image: andrewjos,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/andrewjos-sebastian",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "andrewjossebastian@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "",
        isBrand: true,
      },
    ],
  },
  {
    id: 17,
    name: "Rahul Krishnan",
    role: "Product Development ",
    category: "System Dev",
    image: rahul,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/rahul-krishnan-b9a1132b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "rahulkrishnan4002@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/mr_rahulkrishnan_05?utm_source=qr&igsh=dDk0dWtvY2w4aTl1",
        isBrand: true,
      },
    ],
  },
  {
    id: 18,
    name: "Diya Sinoy",
    role: "Software Engineer",
    category: "Software Dev",
    image: diyasinoy,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/diya-sinoy-70682a265",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "diyasinoy17@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/_diyasinoy_?igsh=NGdnM250Nno5cTF1",
        isBrand: true,
      },
    ],
  },
  {
    id: 19,
    name: " Stefan Mathew Kurian",
    role: "Intern",
    category: "Intern",
    image: stefan,
    socials: [
      {
        platform: "linkedin",
        url: "http://linkedin.com/in/stefan-mathew-kurian-b1836524b",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "stefankurian33@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/stefan.mk33?igsh=ODRzM2x0ampweWFx",
        isBrand: true,
      },
    ],
  },
  {
    id: 20,
    name: "Vaishnav C Babu",
    role: "System Engineer ",
    category: "System Dev",
    image: Vaishnav,
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/vaishnav-cbabu-771176250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        isBrand: true,
      },
      {
        platform: "envelope",
        url: "vaishnavcbabu31@gmail.com",
        isBrand: false,
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/vaishnav_c_babu/profilecard/?igsh=c3djMGllOTI1dGs4",
        isBrand: true,
      },
    ],
  },
];

// Categories for filtering
const categories = [ "Executive", "Software Dev", "System Dev","Documentation", "Intern"];

function Team() {
  const [selectedCategory, setSelectedCategory] = useState("Executive");

  // Filter team members based on selected category
  const filteredTeam =teamMembers.filter((member) => member.category === selectedCategory);

  return (
    <>
      {/* <Navbar /> */}
      <section className="py-20 mb-0 bg-black relative overflow-hidden min-h-screen">
        <div className="bg-black backdrop-blur-3xl h-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl text-white font-bold mb-4">Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                Introducing our Team, the most important asset of our company.
              </p>

              {/* Category Buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-2 rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Members Section */}
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              {filteredTeam.map((member) => (
                <div
                  key={member.id}
                  className="block group md:col-span-2 lg:col-span-1"
                >
                  <div className="relative mb-6">
                    {/* Team Member Image */}
                    <img
                      src={member.image}
                      alt={`${member.name} image`}
                      className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                      style={{
                        objectPosition: "top", // Set the object position to center top
                      }}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {/* Dynamically Render Social Media Icons */}
                      <div className="flex space-x-4">
                        {member.socials.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl hover:text-indigo-400 transition-colors duration-300"
                          >
                            <i
                              className={`${
                                social.isBrand ? "fab" : "fas"
                              } fa-${social.platform}`}
                            ></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Team Member Name */}
                  <h4 className="text-xl font-semibold text-gray-500 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-400">
                    {member.name}
                  </h4>
                  {/* Team Member Role */}
                  <span className="text-gray-600 text-center block transition-all duration-500 group-hover:text-gray-700">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
