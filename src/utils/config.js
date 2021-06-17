const developmentUrl = "http://venues.yoga.com";
const productionUrl = "http://api.yogaguanjia.com";
const imgUploadUrl= "http://assets.yoga.com";
const productionImgUploadUrl= "http://source.yogaguanjia.com";

export const BASEURL = process.env.NODE_ENV == "development" ? developmentUrl : productionUrl;

export const UPLOADBASEURL = process.env.NODE_ENV == "development" ? imgUploadUrl : productionImgUploadUrl;

// UEditer 使用的上传接口的域名
export const UEDITOR_DOMAIN = process.env.NODE_ENV == "development" ? imgUploadUrl : productionImgUploadUrl;