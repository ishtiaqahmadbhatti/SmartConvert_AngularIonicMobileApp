export class ApplicationConfiguration {
  public ApiServiceLink: string = 'https://localhost:7249/api/';
  public WebSiteLink: string = 'https://techmindsforge.com/';

  static Get() {
    var acon = new ApplicationConfiguration();
    return acon;
  }
}
