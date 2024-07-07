export type PlacesLibrary = google.maps.PlacesLibrary;
export type PlaceResult = google.maps.places.PlaceResult;
export type AutoComplete = google.maps.places.Autocomplete;

export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  imageUrl?: string;
  iconUrl?: string;
  name?: string;
}
