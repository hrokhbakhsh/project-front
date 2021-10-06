export class JwtToken {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public fullName: string,
    public langKey: string,
    public username: string,
    public token: string
  ) {}
}
