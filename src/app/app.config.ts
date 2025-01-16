export class ApplicationConfiguration {
  public ApiServiceLink: string = 'http://192.168.8.100:5298/api/';
  //public ApiServiceLink: string = 'http://192.168.8.100:7249/api/';
  public WebSiteLink: string = 'https://techmindsforge.com/';

  static Get() {
    var acon = new ApplicationConfiguration();
    return acon;
  }
}
