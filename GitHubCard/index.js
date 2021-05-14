/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios.get('https://api.github.com/users/quinn5moli')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
.then((response => {
  let myCard = response.data
  content.appendChild(gitCardMaker(mycard))
}))
.catch(error => {
  console.log(error);
})
.finally(complete =>{
  console.log(complete);
})

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
 'dustinmyers',
  'justsml',
   'luishrd',
    'bigknell'
  ];

  followersArray.forEach(user => {
    axios
    .get(`https://api.github.com/users/${user}`)
    .then (response => document.querySelector('.cards').appendChild(gitCardMaker(response.data)))
  })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitCardMaker(gitHubData) {

// variables to pass data/objects through
const gitHubAvi = gitHubData.avi_url;
const gitHubName = gitHubData.name;
const gitHubLogin = gitHubData.login;
const gitHubLocation = gitHubData.location;
const gitHubUrl = gitHubData.html_url;
const gitHubFollowers = gitHubData.followers;
const gitHubFollowing = gitHubData.following;
const gitHubBio = gitHubData.bio;

// html elements
const cardDiv = document.createElement('div');
const userImg = document.createElement('img');
const cardInfoDiv = document.createElement('div');
const userName = document.createElement('h3');
const userLogin = document.createElement('p');
const userLoc = document.createElement('p');
const userProfile = document.createElement('p');
const profileHref = document.createElement('a');
const userFollowers = document.createElement('p');
const userFollowing = document.createElement('p');
const userBio = document.createElement

}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
