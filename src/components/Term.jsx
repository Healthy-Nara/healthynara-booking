import React, { useState } from "react";
import logo from "./../assets/image/Vector.png";

const Term = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 1,
      title: "What is Flowbite?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>{" "}
            including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you
            see in the library has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "What are the differences between Flowbite and Tailwind UI?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the{" "}
            <a
              href="https://github.com/themesberg/flowbite/blob/main/LICENSE.md"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT license
            </a>
            , whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on
            smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI
            as there is no technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="p-4 max-w-2xl h-screen mx-auto bg-[#019177]">
      <div className="flex items-center justify-between">
        <img src={logo} alt="" className="rounded-2xl" />

        <h1 className="font-bold text-white text-[20px]">စည်းမျဉ်းနှင့် သဘောတူညီချက်များ</h1>
      </div>

      <div id="accordion-collapse" data-accordion="collapse" className="mt-[50px]">
        {sections.map((section, index) => (
          <React.Fragment key={section.id}>
            <h2 id={`accordion-collapse-heading-${section.id}`}>
              <button
                type="button"
                className={`flex items-center border-b  justify-between w-full p-5 font-medium rtl:text-right text-white gap-3 `}
                data-accordion-target={`#accordion-collapse-body-${section.id}`}
                aria-expanded={openSection === section.id}
                aria-controls={`accordion-collapse-body-${section.id}`}
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>
                <svg
                  data-accordion-icon
                  className={` shrink-0 transition-transform duration-200`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="0 -960 960 960"
                  width="14px"
                  fill="white"
                >
                  <path d="M824-80 716-188q-22 13-46 20.5t-50 7.5q-75 0-127.5-52.5T440-340q0-75 52.5-127.5T620-520q75 0 127.5 52.5T800-340q0 26-7.5 50T772-244l108 108-56 56ZM620-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm220-320h-80v-200h-80v120H280v-120h-80v560h200v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${section.id}`}
              className={`${openSection === section.id ? "" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${section.id}`}
            >
              <div
                className={`p-5 border border-gray-200 dark:border-gray-700 ${
                  index > 0 ? "border-t-0" : "border-t-0 border-b-0"
                } ${index === sections.length - 1 ? "" : "border-b-0"}`}
              >
                {section.content}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Term;
