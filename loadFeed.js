// this script loads atom/rss feed to the "block-content" div

//creates an empty textbox which inherits the values of clean-blog-post
function makeBlogPost() {
  var postElem = document.createElement("div")
  var CSSattr = document.createAttribute("class")
  CSSattr.value = "portfolio-block block-intro"
  postElem.setAttributeNode(CSSattr)
  return postElem;
}

//fetches the posts from the rss feed
function fetchPosts() {
  let request = new XMLHttpRequest();
    const ATOM_FEED_URL = "https://the-nova-system.github.io/blog/feed.xml";
  //this just gets the base url and gets the feed.xml file. It was changed to a relative url for testing purposes, as the local builds would lead to the main page
  const ERROR_MSG = "Uh Oh: Cannot load posts at the moment :("
  request.open("GET", ATOM_FEED_URL, true);

  request.send();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadPosts(this.responseXML);
    } else if (this.readyState == 4) {
      let textbox = makeBlogPost();
      textbox.innerHTML = ERROR_MSG;
      document.querySelector("body > main > div").appendChild(textbox)
    }
  };
}


function loadPosts(feedXml) {
    const listPosts = feedXml.getElementsByTagName("feed")[0].getElementsByTagName("entry");

    for (let i=0; i<listPosts.length; i++) {
        let post = listPosts.item(i); //gets the post from the list

        //extracts the information needed from the post
        const link = post.getElementsByTagName("link")[0].attributes.getNamedItem("href").value;
        const excerpt = post.getElementsByTagName("summary")[0].textContent;
        const title = post.getElementsByTagName("title")[0].textContent;
        let published = post.getElementsByTagName("published")[0].textContent;
        published = published.substring(0, 10).replaceAll("-","/") //cleans to YYYY-MM-DD
        const author = post.getElementsByTagName("author")[0].textContent;

        let postElem = makeBlogPost(); //creates an empty textbox from the function above

        //this code just creates the html for our textbox using the variables defined above, and then pushes it the inner HTML of the post element
        postElem.innerHTML = `
        <h3>${title}</h3>
        <div class=\"info\">
            <span style="color: var(--muted-text-color)">
                By ${author} - ${published}
            </span>
        </div>
        <p>${excerpt}</p>
        <a class="btn btn-outline-primary btn-sm" role="button" href="${link}" style="border-color: var(--highlight-color);color: var(--highlight-color);">
        Read More
        </a>
        `

        //finally, here we push the final post element into the block-content div
        document.querySelector("body > main > div").appendChild(postElem)
    }
}
fetchPosts()
