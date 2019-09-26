export function idFromUrl(){
  let url = window.location.toString();
  return url.split("/").pop();
}