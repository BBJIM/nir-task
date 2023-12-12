type Repository = {
    id: string;
    name: string;
    url: string;
    created_date_timestamp: number;
    updated_date_timestamp: number;
    scan_id: number;
    highest_severity: string;
    total_findings: number;
    scan_date_timestamp: number;
    connected_image_id: string;
    source: 'github' | 'bitbucket' | 'gitlab';
    last_push: string;
    size: number;
}

type Image = {
    id: string;
    name: string;
    url: string;
    created_date_timestamp: number;
    updated_date_timestamp: number;
    scan_id: number;
    highest_severity: string;
    total_findings: number;
    scan_date_timestamp: number;
    connected_repository_id: string;
    source: 'dockerhub' | 'ecr' | 'jfrog';
    number_of_layers: number;
    architecture: 'arm' | 'amd';
}

export type reconciliatedData = {
    Repository: Repository;
    Image: Image;
}

export type RepositoryKeys = keyof Repository;
export type ImageKeys = keyof Image;