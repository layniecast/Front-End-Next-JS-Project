import React from "react";
import * as Image from "../public/images";

export const PokemonImage = () => {
  //   let imagesArray = {};
  //   r.keys().map((item, index) => {
  //     imagesArray[item.replace("./", "")] = r(item);
  //   });
  //   const images = PokemonImage(
  //     require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
  //   );

  return <Image src="/abra.jpg" alt="poke images" width="64" height="64" />;
};

//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

//
// <img src={images} />;
