import useData from "./useData";

export interface ParentPlatform {
  id: string;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<ParentPlatform>("/platforms/lists/parents");

export default usePlatforms;
