import { IgApiClient, Feed } from 'instagram-private-api'
import * as fs from 'fs'
import * as dotenv from 'dotenv'
dotenv.config()
const username = process.env.username;
const password = process.env.password;

async function findPeopleWhoDontFollowYouBack() {
  const ig = new IgApiClient();
  ig.state.generateDevice(username);
  const auth = await ig.account.login(username, password)
  const followersFeed = ig.feed.accountFollowers(ig.state.cookieUserId);
  const followingFeed = ig.feed.accountFollowing(ig.state.cookieUserId);
  let followers = await getAllItemsFromFeed(followersFeed);
  let following = await getAllItemsFromFeed(followingFeed);
  followers = new Set(followers.map(item => item.username))
  following = new Set(following.map(item => item.username))
  let result = []

  following.forEach((person) => {
    if(!followers.has(person)) {
      result.push(person);
    }
  })
  fs.writeFileSync('findPeopleWhoDontFollowYouBack.json', JSON.stringify(result, null, 2), 'utf8')
}

async function getAllItemsFromFeed(feed) {
  let items = [];
  do {
    items = items.concat(await feed.items())
  } while (feed.isMoreAvailable());
  return items;
}

findPeopleWhoDontFollowYouBack()
