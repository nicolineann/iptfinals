export type Movie = {
  title: string;
  slug: string;
  category: string;
  img: string;
  trailer?: string;
  description?: string;
  cast?: string;
  published?: string;
};

export const movies: Movie[] = [
  {
    title: "The Witch Part 2",
    slug: "the-witch-part-2",
    category: "KOREAN",
    img: "/movies/witch2.jpg",
    trailer: "https://www.youtube.com/embed/4GHILJ3-47w",
    description:
      "A girl with mysterious powers escapes from a secret laboratory and faces new enemies who want to capture her.",
    cast: "Shin Si-ah, Park Eun-bin, Seo Eun-soo",
    published: "June 15, 2022",
  },
  {
    title: "Parasite",
    slug: "parasite",
    category: "KOREAN",
    img: "/movies/parasite.jpg",
    trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
    description:
      "A poor family infiltrates a wealthy household, leading to unexpected consequences.",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    published: "May 30, 2019",
  },
  {
    title: "Hello, Love, Goodbye",
    slug: "hello-love-goodbye",
    category: "FILIPINO",
    img: "/movies/hellolovegoodbye.jpg",
    trailer: "https://www.youtube.com/embed/m0Smq6ZK4Yg",
    description:
      "Two overseas Filipino workers in Hong Kong struggle to balance love and their personal dreams.",
    cast: "Kathryn Bernardo, Alden Richards, Maymay Entrata",
    published: "July 31, 2019",
  },
  {
    title: "Seven Sundays",
    slug: "seven-sundays",
    category: "FILIPINO",
    img: "/movies/sevensundays.jpg",
    trailer: "https://www.youtube.com/embed/Hf0pXb4nQ0s",
    description:
      "Four siblings are reunited when their father is diagnosed with cancer, forcing them to reconnect and face old issues.",
    cast: "Ronaldo Valdez, Aga Muhlach, Dingdong Dantes, Cristine Reyes",
    published: "October 11, 2017",
  },
  {
    title: "Your Name",
    slug: "your-name",
    category: "JAPANESE",
    img: "/movies/yourname.jpg",
    trailer: "https://www.youtube.com/embed/xU47nhruN-Q",
    description:
      "Two teenagers mysteriously swap bodies and form a connection that transcends time and space.",
    cast: "Ryunosuke Kamiki, Mone Kamishiraishi, Ryo Narita",
    published: "August 26, 2016",
  },
  {
    title: "Spirited Away",
    slug: "spirited-away",
    category: "JAPANESE",
    img: "/movies/spiritedaway.jpg",
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
    description:
      "A young girl becomes trapped in a magical world of spirits and must find her way home while saving her parents.",
    cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
    published: "July 20, 2001",
  },
  {
    title: "Bad Genius",
    slug: "bad-genius",
    category: "THAI",
    img: "/movies/badgenius.jpg",
    trailer: "https://www.youtube.com/embed/WMZc2FPLoSE",
    description:
      "A brilliant student devises an elaborate cheating scheme to help others ace exams—for a price.",
    cast: "Chutimon Chuengcharoensukying, Teeradon Supapunpinyo, Eisaya Hosuwan",
    published: "May 3, 2017",
  },
  {
    title: "Brother of the Year",
    slug: "brother-of-the-year",
    category: "THAI",
    img: "/movies/brotheroftheyear.jpg",
    trailer: "https://www.youtube.com/embed/2fEJ2Dko5mg",
    description:
      "A lazy brother becomes jealous when his sister finds love, leading to family tension and comedy.",
    cast: "Sunny Suwanmethanont, Urassaya Sperbund, Nichkhun Horvejkul",
    published: "June 7, 2018",
  },
  {
    title: "Avengers: Endgame",
    slug: "avengers-endgame",
    category: "AMERICAN",
    img: "/movies/endgame.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    description:
      "The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth",
    published: "April 26, 2019",
  },
  {
    title: "Inception",
    slug: "inception",
    category: "AMERICAN",
    img: "/movies/inception.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    description:
      "A skilled thief enters people's dreams to steal secrets, but his latest job challenges reality itself.",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    published: "July 16, 2010",
  },
  
];

// Compatibility map keyed by title for older code that imports `movieData`
export const movieData: Record<string, Movie> = Object.fromEntries(
  movies.map((m) => [m.title, m])
);
