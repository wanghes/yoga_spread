const developmentUrl = "http://venues.yoga.com";
const productionUrl = "//api.yogaguanjia.com";

export const BASEURL = process.env.NODE_ENV == "development" ? developmentUrl : productionUrl;

