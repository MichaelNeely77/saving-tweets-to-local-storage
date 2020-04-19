// Variables
const tweetList = document.getElementById('tweet-list');


// Event Listeners
eventListeners();

function eventListeners() {
    //Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet from list
    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}




// Functions

function newTweet(e) {
    e.preventDefault();
const tweet = document.getElementById('tweet').value;

    // Create a remove tweet button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //Create an li Element
    const li = document.createElement('li');
    li.textContent = tweet;
    

    // Add remove button 
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);

    addTweetLocalStorage(tweet);

    alert('Tweet Added!');

    this.reset();

}

    // Remove tweet form DOM
    function removeTweet(e) {
        if(e.target.classList.contains('remove-tweet')) {
            e.target.parentElement.remove();
        } 


        // REmove form local storage
        removeTweetLocalStorage(e.target.parentElement.textContent) ;
    }

    //Adds tweets to the local storage

    function addTweetLocalStorage(tweet) {
        let tweets = getTweetsFromStorage();
        // console.log(tweets);
        // Add the tweet into the array
        tweets.push(tweet);

        // Convert Tweet array into string
        localStorage.setItem("tweets", JSON.stringify( tweets ) );
    }

    function getTweetsFromStorage() {
        let tweets;
        const tweetsLS = localStorage.getItem('tweets');
        // Get the values of null is returned then we create an empty value
        if(tweetsLS === null) {
            tweets = [];
        } else {
            tweets = JSON.parse(tweetsLS);
        }
        return tweets;
    }

    // Print local storage events on load
    function localStorageOnLoad() {
        let tweets = getTweetsFromStorage();



        // Loop through the storage and proint the valuses
        tweets.forEach(function(tweet) {

            // Create a remove tweet button
            const removeBtn = document.createElement('a');
            removeBtn.classList = 'remove-tweet';
            removeBtn.textContent = 'X';

            //Create an li Element
            const li = document.createElement('li');
            li.textContent = tweet;
            

            // Add remove button 
            li.appendChild(removeBtn);

            // Add to the list
            tweetList.appendChild(li);

        });
    }

    function removeTweetLocalStorage(tweet) {
        // Get tweets from local storage
        let tweets = getTweetsFromStorage();

        // REmove 'X' from local storage
        const tweetDelete = tweet.substring( 0,tweet.length -1);

        // loop through the tweets and remove the tweets that are equal
        tweets.forEach(function(tweetLS, index) {
            if(tweetDelete === tweetLS) {
                tweets.splice(index, 1)
            }
        });
        localStorage.setItem('tweets', JSON.stringify(tweets) );
    }