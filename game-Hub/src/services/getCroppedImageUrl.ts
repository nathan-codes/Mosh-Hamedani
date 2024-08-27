const getCroppedImages = (url: string) => {
  const target = "media/";
  if (!url) return ""
  const insertPlace = url.indexOf(target) + target.length;
  return url.slice(0, insertPlace) + "crop/600/400/" + url.slice(insertPlace);
};

export default getCroppedImages;
