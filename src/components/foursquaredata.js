/*=================== Get Venues from Foursquare ==================== */
// Places / Locations in Foursquare are called "Venues"

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// need foursquare client key and secret below
// fetch <LINK TO DISPLAY INFO ABOUT>, where ll = lat lng (required, or need to use "near", query uses keywords, and you need the version ("v") as YYYYMMDD)
export const getVenues = () =>
  fetch(`https://api.foursquare.com/v2/venues/search?ll=25.8142,-80.1399&radius=800&intent=browse&query=mount sinai,hospital&client_id=YVSNSMCSPYQTTKMXI4CIYNI55OKH4J51FBZWYGK2CAZZE0L1&client_secret=UEIWIJWRRQ4Q40U4RYDEQOCZMHAWMVM1I0LA2HGUXAKFXSN3&v=20181125`)
    .then(handleErrors)
    .then(res => res.json())

    .then(data => data.response.venues)
