"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "./projectsData";
import BrandLogos from "./components/BrandLogos";
import DigitalSkills from "./components/DigitalSkills";
import { digitalSkills } from "./skillsData";

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentProject = projects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 sm:pt-20 sm:px-40 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <div className="flex flex-col mb-2 max-w-5xl w-full">
        <div className="flex flex-row">
          <div className="hidden lg:flex flex-col w-2/3 h-52 items-center justify-center mr-5">
            <Image
              src="/profile-photo.jpeg"
              width={208}
              height={208}
              alt="profile photo"
              className="rounded-full object-cover"
            />
          </div>

          <div>
            <div className="pb-5">
              <h1 className="font-bold text-4xl text-color-green">
                Hi, I'm Nana, an E-commerce & Digital Marketing Specialist.
              </h1>

              <p className="text-2xl text-gray-600">
                Originally from Japan and now based in London, I have eight
                years of experience in analysing and growing brands and
                e-commerce businesses. I'm passionate about data-driven
                strategy, tennis and discovering new places!
              </p>

              <p className="mt-1 text-gray-600 flex gap-6 items-center">
                <a
                  className="flex items-center gap-2 hover:underline hover:text-green"
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                  />
                  CV
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:text-green"
                  href="https://www.linkedin.com/in/nana-nemoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                  />
                  LinkedIn
                </a>
              </p>
            </div>

            {/* Language Skills Section */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-600 pb-2 inline-block relative">
                Languages
                <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-green"></div>
              </h3>
              <div className="flex flex-row gap-x-10">
                {/* Japanese */}
                <div className="flex flex-col items-start p-3">
                  <span className="font-medium text-gray-600">Japanese</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange text-white border border-orange">
                    Native
                  </span>
                </div>

                {/* English */}
                <div className="flex flex-col items-start p-3">
                  <span className="font-medium text-gray-600">English</span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange text-white border border-orange">
                      Business-level
                    </span>
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-300">
                      TOEIC 870
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Skills Section */}
            <DigitalSkills skills={digitalSkills} />

            {/* Brands I have worked with Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-600 pb-2 inline-block relative">
                Brands I have worked with
                <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-green"></div>
              </h3>
              <BrandLogos />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col w-full items-center">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-green mb-2">
              Notable projects
            </h2>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-2 mb-8 space-x-4">
            {projects.map((project, index) => {
              let shortTitle = project.title;
              if (project.title.includes("Spring/Summer")) {
                shortTitle = "25SS";
              } else if (project.title.includes("Autumn/Winter")) {
                shortTitle = "24AW";
              } else if (project.title.includes("MQDW")) {
                shortTitle = "NBA X Graphic Designer collaboration";
              } else if (project.title.includes("new era")) {
                shortTitle = "new era";
              }
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentProjectIndex(index);
                  }}
                  className={`px-6 py-3 cursor-pointer rounded-full transition-all duration-200 text-sm font-medium border-2 ${
                    index === currentProjectIndex ? "" : ""
                  }`}
                  style={
                    index === currentProjectIndex
                      ? {
                          background: "var(--color-cream)",
                          color: "grey",
                          borderColor: "var(--color-navy)",
                          boxShadow: "0 2px 8px 0 rgba(32,45,102,0.15)",
                        }
                      : {
                          background: "white",
                          color: "var(--color-green)",
                          borderColor: "var(--color-green)",
                        }
                  }
                  aria-label={`Go to ${project.title}`}
                >
                  {shortTitle}
                </button>
              );
            })}
          </div>
          {/* Project Carousel Container */}
          <div className="relative">
            <section className="bg-white p-8 md:px-4 md:py-10 rounded-3xl shadow-lg max-w-5xl mx-auto mb-8 relative">
              <div className="flex flex-row">
                {/* Navigation button: left */}
                <button
                  onClick={prevProject}
                  className=" text-orange rounded-full md:pr-4 transition-all duration-200"
                  aria-label="Previous project"
                  style={{ zIndex: 10 }}
                >
                  <svg
                    className="w-5 md:w-15 h-5 md:h-15"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {currentProject.title}
                    </h3>
                  </div>

                  {/* Horizontal Scrollable Images */}
                  <div className="mb-8">
                    <div className="hidden md:flex gap-2 overflow-x-auto scrollbar-hide">
                      {currentProject.images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 relative">
                          <Image
                            src={image}
                            alt={`${currentProject.title} image ${index + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 object-contain h-[430px] w-auto cursor-pointer"
                            onClick={() => openImageModal(image)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {currentProject.description}
                    </p>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-600 mb-3">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                        {currentProject.achievements.map(
                          (achievement, index) => (
                            <li key={index} className="leading-relaxed">
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-cream/60 p-4 rounded-xl border-l-4 border-orange">
                      <p className="text-sm text-gray-600 font-medium">
                        <span className="text-orange font-bold">→ Result:</span>{" "}
                        {currentProject.result}
                      </p>
                    </div>

                    {currentProject.links &&
                      currentProject.links.length > 0 && (
                        <div className="flex flex-row gap-x-10 mt-4">
                          {currentProject.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              className="inline-flex items-center gap-2 text-orange hover:text-green font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
                            >
                              <span>{link.label}</span>
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
                {/* Navigation button: right */}
                <button
                  onClick={nextProject}
                  className="text-orange rounded-full md:pl-4 transition-all duration-200"
                  aria-label="Next project"
                  style={{ zIndex: 10 }}
                >
                  <svg
                    className="w-5 md:w-15 h-5 md:h-15"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold z-10"
              aria-label="Close modal"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged project image"
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
