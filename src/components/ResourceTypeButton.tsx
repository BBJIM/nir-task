
import { FilterProps, ResourceType } from "../types/resourceType";

const ResourceSelect = ({ setFilter }: FilterProps) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> =(event) => {
		// @ts-ignore
    setFilter((prev) => ({...prev, resourceType: event.target.value}));
  };

  return (
    <select onChange={handleChange}>
      <option value={ResourceType.Image}>Image</option>
      <option value={ResourceType.Repository}>Repository</option>
    </select>
  );
};

export default ResourceSelect;