import TOURS from "./TOURS";

export default [
  {
    id: 1,
    title: "All",
    tours: [...TOURS, ...TOURS, ...TOURS, ...TOURS],
    
  },
  {
    id: 2,
    title: "America",
    tours: [...TOURS, ...TOURS, ...TOURS],
  },
  {
    id: 3,
    title: "Europe",
    tours: [...TOURS],
  },
  {
    id: 4,
    title: "Asia",
    tours: [...TOURS,...TOURS],
  },

];
