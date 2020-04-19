export default function cleanUrls(url) {
   const regex = new RegExp(/(http:\/\/|https:\/\/|\/\/)(.*)/, "g");
   return regex.exec(url)[2];
}
