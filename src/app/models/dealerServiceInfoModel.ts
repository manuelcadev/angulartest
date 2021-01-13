export interface DealerServiceInfoModelDTO {
    UserID: number;
    UserLogin: string;
    UserLastName: string;
    IsActiveUser?: boolean;
    UserCreatedDate: Date;
    UserLastActivity: Date;
    EmailTypeID?: number;
    IsEmailActiveEmployee?: boolean;
    IsEmailDefaultEmployee?: boolean;
    EmailDisplayName: string;
    Email: string;
    TotalRecordsAffected: number;
}

export interface UserEmailInfoInputValueDTO {
    UserId: number;
    Email: string;
}