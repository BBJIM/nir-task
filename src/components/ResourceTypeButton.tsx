
import {FilterProps, ResourceType} from "../types/resourceType";

const ResourceSelect = ({setFilter}: FilterProps) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilter((prev) => prev ? ({...prev, resourceType: event.target.value}) : {});
  };

  return (
    <select onChange={handleChange} defaultValue={ResourceType.Image}>
      <option value={ResourceType.Image}>Images</option>
      <option value={ResourceType.Repository}>Repositories</option>
    </select>
  );
};

export default ResourceSelect;