import defaultImage from "../assets/no-image-placeholder-6f3882e0.webp"
const getCroppedImages = (url: string) => {
  const target = "media/";
  if (!url) return defaultImage;
  const insertPlace = url.indexOf(target) + target.length;
  return url.slice(0, insertPlace) + "crop/600/400/" + url.slice(insertPlace);
};

export default getCroppedImages;
