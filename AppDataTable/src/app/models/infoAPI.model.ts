export interface InfoAPIResponse{
    count: number,
    entries: InfoAPI[]
}

export class InfoAPI{
    constructor(
    public API: string,
    public Description: string,
    public Link:string,
    public Category: string,
    public Cors:string
    ){}
}