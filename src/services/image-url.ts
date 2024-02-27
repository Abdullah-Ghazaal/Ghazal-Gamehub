function getCroppedImgUrl(url: string) {
  if (!url) return null; // when sorting, some games does not have an image so the programm broke.
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImgUrl;
