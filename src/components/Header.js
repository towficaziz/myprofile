import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:tapolly01@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/towficaziz",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/md-towfic-aziz-0a493743/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Box
      position="fixed"
      top={visible ? 0 : -100}
      left={0}
      right={0}
      translateY={0}
      // transitionProperty="transform"
      // transitionDuration=".3s"
      transition="top 0.3s ease-in-out"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={boxRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a target="_blank" key={index} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a href="#projects-section">Projects</a>
              <a href="#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;



// import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faMedium,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";
// import { Box, HStack } from "@chakra-ui/react";

// const socials = [
//   {
//     icon: faEnvelope,
//     url: "mailto: tapolly01@gmail.com",
//   },
//   {
//     icon: faGithub,
//     url: "https://github.com/towficaziz",
//   },
//   {
//     icon: faLinkedin,
//     url: "https://www.linkedin.com/in/md-towfic-aziz-0a493743/",
//   },
//   {
//     icon: faMedium,
//     url: "https://medium.com",
//   },
//   {
//     icon: faStackOverflow,
//     url: "https://stackoverflow.com",
//   },
// ];

// const Header = () => {
//   const handleClick = (anchor) => () => {
//     const id = `${anchor}-section`;
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <Box
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       translateY={0}
//       transitionProperty="transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"
//       backgroundColor="#18181b"
//     >
//       <Box color="white" maxWidth="1280px" margin="0 auto">
//         <HStack
//           px={16}
//           py={4}
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <nav>
//             <HStack spacing={4}>
//               {socials.map((social, index) => (
//                 <a key={index} href={social.url}>
//                   <FontAwesomeIcon icon={social.icon} size="2x" />
//                 </a>
//               ))}
//             </HStack>
//           </nav>

//           <nav>
//             <HStack spacing={8}>
//               <a href="#projects-section" onClick={handleClick('projects')}>
//                 Projects
//               </a>
//               <a href="#contactme-section" onClick={handleClick('contactme')}>
//                 Contact Me
//               </a>
//             </HStack>
//           </nav>

//         </HStack>
//       </Box>
//     </Box>
//   );
// };
// export default Header;
