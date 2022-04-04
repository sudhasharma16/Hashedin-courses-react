export interface AreaOfInterest {
    designer: boolean;
    developer: boolean;
    projectManager: boolean;
    sales: boolean;
}

export interface ProfileModel {
    displayName: string;
    firstName: string;
    lastName: string;
    about: string;
    areaOfInterest: AreaOfInterest;
    profession: string;
    experience: string;
    expertise: string;
    role: string;
}