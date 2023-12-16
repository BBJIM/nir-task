export enum ResourceType {
	Image='images',
	Repository='repositories'
}

export type filterState = {filter:string, resourceType: ResourceType};

export type FilterProps = {setFilter: React.Dispatch<React.SetStateAction<filterState | undefined>>};