// Function to download YouTube videos as MP3
function download(){
    // Gets the video ID form URL
    let url = document.getElementById('video_id').value;
    var ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }

// Actual API
const RAPIDAPI_API_URL = 'https://free-mp3-mp4-youtube.p.rapidapi.com/'+ID+'/MP3/spinner/2196f3/100/box-button/2196f3/tiny-button/Download/FFFFFF/yes/FFFFFF/none';
// Required headers
const RAPIDAPI_REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'free-mp3-mp4-youtube.p.rapidapi.com', 
    'X-RapidAPI-Key': 'c27336f7d0msh8a84c23e58f1a7ap103c92jsn0ee8c8fa002e', 
    'Content-Type': 'application/json'
};
// Fetching process
fetch (`${RAPIDAPI_API_URL}`,{
    "headers": RAPIDAPI_REQUEST_HEADERS
})
    . then (response => {
        return response.json();
        
    })
    . then (json => {
        //console.log(json) // Used for debugging
        document.getElementById("thumb").src=json.thumbnail; // Adds thumbnail
        document.getElementById("download_link").href=json.url; // Adds Download URL
        video_id.value = ''; // Clears the input field
    })
}
