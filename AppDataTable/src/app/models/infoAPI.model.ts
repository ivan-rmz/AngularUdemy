export interface InfoAPIResponse{
    count: number,
    entries: InfoAPI[]
}

export interface InfoAPI{
    API: string,
    Description: string,
    Link:string,
    Category: string,
    Cors:string
}