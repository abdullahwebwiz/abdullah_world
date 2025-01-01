import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    number: 1,
    title: "Searchify | AI-Powered Search Engine.",
    description:
      "Searchify is an innovative AI-powered search engine built with Next.js 🖥️, designed to provide a smarter, more efficient search experience 🔍. It combines traditional web results 🌐 with precise, AI-generated answers 🤖, giving users comprehensive insights in one place 📊. With features like seamless signup and login 🔐.",
    link: "https://github.com/abdullahwebwiz/searchify",
    tags: ["AI-powered", "Next.js", "Search engine"],
  },
  {
    number: 2,
    title: "DownTuber | 50+ Platforms.",
    description:
      "DownTuber is a powerful and user-friendly platform 🎯 designed to let anyone download videos and media 🎥📥 from the internet effortlessly. By simply pasting the video link 🔗, users can access high-quality downloads from popular platforms like Facebook 📘, TikTok 🎶, YouTube ▶️, Instagram 📸, and over 45 other sites 🌐.",
    link: "https://github.com/abdullahwebwiz/downTuber",
    tags: ["Video downloader", "User-friendly", "50+ platforms"],
  },
  {
    number: 3,
    title: "Dropshippers.pk | Pakistan's Dropshipping Platform.",
    description:
      "Dropshippers.pk is an innovative online platform designed to help entrepreneurs start their e-commerce journey with ease, using the dropshipping model. 🌐 It allows you to run your business with minimal investment, low risk, and without the hassles of inventory management, sourcing, or warehousing. 📦💡.",
    link: "https://github.com/abdullahwebwiz/dropshippers",
    tags: ["E-commerce", "Dropshipping", "Low investment"],
  },
  {
    number: 4,
    title: "Quality Enhancement Program (QEC) for Government Colleges KPK.",
    description:
      "This React.js project is a Quality Enhancement Program (QEC) 📊 designed for government colleges across Khyber Pakhtunkhwa (KPK), Pakistan 🇵🇰. Developed by our software agency in Kohat 🏢, this project aims to enhance and streamline the evaluation, reporting, and quality assurance processes in educational institutions 🎓. As the frontend lead 💻.",
    link: "https://github.com/abdullahwebwiz/qec_government",
    tags: ["Education", "Quality assurance", "React.js"],
  },
  {
    number: 5,
    title: "Kohat Foods.",
    description:
      "I am managing a client’s business, Kohat Foods, an e-commerce website built on WordPress. Kohat Foods is your ultimate one-stop online shop for a wide range of products, including dairy items, bakeware, bakery goods, spices, cakeware, party essentials, and so much more!",
    link: "https://github.com/abdullahwebwiz/kohat-foods",
    tags: ["E-commerce", "WordPress", "Diverse products"],
  },
  {
    number: 6,
    title: "QuDO | Childhood Games Collection.",
    description:
      "Step into a world of nostalgia with QuDO, our website that brings timeless childhood and old-school games to life! Rediscover classics like:",
    link: "https://github.com/abdullahwebwiz/qudo",
    tags: ["Nostalgia", "Games", "Classic collection"],
  },
  {
    number: 7,
    title: "One Interiors | Interior Design & Furnitures.",
    description:
      "One Interiors is a premier interior design brand based in Islamabad, specializing in transforming spaces with style and functionality. ✨ We offer a wide range of top-quality products, including elegant curtains, premium wooden flooring, stunning wallpapers 🖼️, modern window blinds 🪞, and bespoke furniture 🛋️.",
    link: "https://github.com/abdullahwebwiz/one-interiors",
    tags: ["Interior design", "Furniture", "Custom solutions"],
  },
  {
    number: 8,
    title: "Car Medics | Car Repair Online Booking.",
    description:
      "My Car Medics is an innovative platform 🚗🔧 designed for car owners to easily schedule online appointments 📅 for car repairs, maintenance, and modification services ⚙️. Specializing in headlight repairs 💡, the website offers a complete automated system 🤖 to streamline the process, ensuring convenience and efficiency 🕒.",
    link: "https://github.com/abdullahwebwiz/carmadices-beta",
    tags: ["Automotive", "Online booking", "Convenience"],
  },
  {
    number: 9,
    title: "Glow Right | Cosmetics & Skin Care Products.",
    description:
      "Glow Right is all about glowing skin and confidence. 💄🌟 Discover a wide range of premium makeup products, skincare essentials 🧴, and beauty tools that make self-care a breeze. Elevate your routine with products designed to help you shine inside and out. ✨💅",
    link: "https://github.com/abdullahwebwiz/glow-right",
    tags: ["Skincare", "Cosmetics", "Beauty tools"],
  },
  {
    number: 10,
    title: "The Phone's Garage | Spare Parts & Repairing Tools.",
    description:
      "This is a React.js-based online store for mobile and smartphone spare parts, along with essential equipment tools. The app features an intuitive and user-friendly interface for browsing through a wide range of products, ensuring a seamless shopping experience. 🛒📱 It includes functionalities like product categories, a search bar, a shopping cart.",
    link: "https://github.com/abdullahwebwiz/the-phone-s-garage",
    tags: ["Mobile parts", "React.js", "User-friendly"],
  },
  {
    number: 11,
    title: "Read Right | Share Views with the World.",
    description:
      "A blogging website built with React.js 🌐✍️, where anyone can share their views, knowledge, and experiences through articles. Think of it as YouTube for written content 📝✨. Write and upload your posts, explore insightful articles from others, and connect with a vibrant community of readers and writers. Let your words inspire the world! 🚀📖.",
    link: "https://github.com/abdullahwebwiz/Read_Right",
    tags: ["Blogging", "React.js", "Community"],
  },
  {
    number: 12,
    title: "Smart-X | Electronic Accessories.",
    description:
      "Smart X is your one-stop shop for all things digital! From cutting-edge headphones 🎧 to sleek phone cases 📱, power banks 🔋, and more, we’ve got everything you need to stay connected in style. Perfect for tech enthusiasts who want reliable and modern gadgets at their fingertips! 🚀✨",
    link: "https://github.com/abdullahwebwiz/smart-x",
    tags: ["Electronics", "Accessories", "Tech gadgets"],
  },
  {
    number: 13,
    title: "Kids Joyland | Toys Store.",
    description:
      "Step into a world of fun and wonder at Kids Joyland! 🎠🎁 Whether you’re looking for engaging toys 🧸, colorful accessories 🎒, or unique gifts, we bring joy and smiles to little ones. Perfect for kids of all ages, our store is where magic meets creativity.",
    link: "https://github.com/abdullahwebwiz/kids-joyland",
    tags: ["Toys", "Kids", "Fun and creativity"],
  },
  {
    number: 14,
    title: "Looks Matter | Fashion Store.",
    description:
      "Looks Matter is here to redefine your fashion game. 👗💎 From trendy outfits to chic accessories 👜 and must-have wardrobe staples, we offer everything to keep you looking fabulous and confident. Embrace your style with high-quality fashion picks that are perfect for every occasion! 🌟",
    link: "https://github.com/abdullahwebwiz/looks-matter",
    tags: ["Fashion", "Accessories", "Style"],
  },
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((d: any) => {
          return (
            <ScrollAnimation animateIn="flipInX" key={d.title}>
              <div className="project">
                <header>
                  <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b "
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Folder</title>{" "}
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
                  </svg>
                  <div className="project-links">
                    <a href={d.link} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="Visit site" />{" "}
                    </a>
                    <a href={d.link} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  </div>
                </header>
                <div className="body">
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {d.tags.map((d: any) => {
                      return <li key={d}>{d}</li>;
                    })}
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </Container>
  );
}
