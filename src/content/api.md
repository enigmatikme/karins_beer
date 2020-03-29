## Api Endpoints
Assignment details can be found at [https://www.karinsbeer.com/](https://www.karinsbeer.com/)

### Host
The host for Karin's Beer API requests is always `https://www.karinsbeer.com/`

### Authentication
All endpoints require an `API_KEY` to access. Talk to Andrew to get this key. Once you have the key, you will need to include using `key` as a query parameter bypass the authentication.

*Example*
```https://www.karinsbeer.com/api/[END_POINT]/?key=[API_KEY]```

### Beers

 1. `/api/all_beers` - Returns the first 50 Beers from the BreweryDB API
 2. `/api/beer/:name` - Returns info about the Beer if found by name
 3. `/api/beer/random` - Returns info about a random Beer

### Breweries

 1. `/api/all_breweries` - Returns the first 50 Breweries from the BreweryDB API
 2. `/api/brewery/:name` - Returns info about the Brewery if found by name

### Search

 1. `/api/search_all?query=''` - Returns all info from the BreweryDB API matching search query
 2. `/api/search_beers?query=''` - Returns all info about Beers from the BreweryDB API matching search query
 3. `/api/search_breweries?query=''` - Returns all info about Breweries from the BreweryDB API matching search query

### Glassware

 1. `/api/all_glassware` - Returns all Glassware in the BreweryDB API

### Locations

 1. `/api/all_locations` - Returns the first 50 Locations from the BreweryDB API
 2. `/api/locations/:city` - Returns the first 50 Locations in the matched city from the BreweryDB API
