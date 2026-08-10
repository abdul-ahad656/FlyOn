import type { DestinationCardData } from "./types";

import dubai from "../../assets/destinations/dubai.jpeg";
import bali from "../../assets/destinations/bali.jpeg";
import kyoto from "../../assets/destinations/kyoto.jpeg";
import swiss from "../../assets/destinations/swiss.jpeg";
import santorini from "../../assets/destinations/santorini.jpeg";
import maldives from "../../assets/destinations/maldives.jpeg";

export const destinations: DestinationCardData[] = [
  {
    id: 1,

    featured: true,

    title: "Maldives",

    country: "Maldives",

    duration: "7 Days",

    rating: 4.9,

    price: "$4,900",

    image: maldives,

    description:
      "Crystal lagoons, overwater villas and unforgettable luxury experiences.",

    world: {
      x: 0,
      y: 0,
      z: 0,

      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

      scale: 1.08,
    },
  },

  {
    id: 2,

    featured: false,

    title: "Dubai",

    country: "United Arab Emirates",

    duration: "5 Days",

    rating: 4.8,

    price: "$2,700",

    image: dubai,

    description:
      "Luxury shopping, iconic skylines and exclusive desert adventures.",

    world: {
      x: -26,
      y: -5,
      z: -10,

      rotateX: 2,
      rotateY: 9,
      rotateZ: -4,

      scale: 0.82,
    },
  },

  {
    id: 3,

    featured: false,

    title: "Kyoto",

    country: "Japan",

    duration: "8 Days",

    rating: 4.9,

    price: "$3,900",

    image: kyoto,

    description:
      "Ancient temples, peaceful gardens and timeless Japanese culture.",

    world: {
      x: 24,
      y: 8,
      z: -16,

      rotateX: -3,
      rotateY: -10,
      rotateZ: 5,

      scale: 0.78,
    },
  },

  {
    id: 4,

    featured: false,

    title: "Bali",

    country: "Indonesia",

    duration: "6 Days",

    rating: 4.8,

    price: "$2,600",

    image: bali,

    description:
      "Private villas, tropical beaches and unforgettable island escapes.",

    world: {
      x: 28,
      y: -12,
      z: -30,

      rotateX: 4,
      rotateY: -8,
      rotateZ: -5,

      scale: 0.72,
    },
  },

  {
    id: 5,

    featured: false,

    title: "Santorini",

    country: "Greece",

    duration: "6 Days",

    rating: 4.9,

    price: "$3,500",

    image: santorini,

    description:
      "Whitewashed villages, breathtaking sunsets and luxury seaside retreats.",

    world: {
      x: -22,
      y: 15,
      z: -38,

      rotateX: -4,
      rotateY: 12,
      rotateZ: 4,

      scale: 0.68,
    },
  },

  {
    id: 6,

    featured: false,

    title: "Swiss Alps",

    country: "Switzerland",

    duration: "9 Days",

    rating: 5,

    price: "$5,800",

    image: swiss,

    description:
      "Snow-covered peaks, scenic rail journeys and alpine luxury resorts.",

    world: {
      x: 18,
      y: -18,
      z: -50,

      rotateX: 5,
      rotateY: -7,
      rotateZ: -6,

      scale: 0.64,
    },
  },
];