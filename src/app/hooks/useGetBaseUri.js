  
export default function useGetBaseUri() {

  const baseUri = process.env.REACT_APP_DRUPAL_URI;
  return baseUri;
  
}