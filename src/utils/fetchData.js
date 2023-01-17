export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e51174fe7mshd2d482e9818ce05p1342f3jsn7b58e4c803d8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '1e51174fe7mshd2d482e9818ce05p1342f3jsn7b58e4c803d8',
    },
  };
export const fetchData=async(url, options) => {
const response = await fetch(url, options)
const data = await response.json()
return data
}