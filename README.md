# Operation Protagonist
## Become the protagonist of your Instagram

![](https://y.yarn.co/d3eef4fd-e397-4f4f-832c-1afe4fbab895_text.gif)

Feeling petty??

Well this tool creates a list of people that you follow that don't follow you back on Instagram. Don't give them your attention without getting anything back!

This project incorporates [dilame/instagram-private-api](https://github.com/dilame/instagram-private-api) so go there if you want more details for how it works under the hood. 

To run it simply download this repo.

Then run:

```
npm install
```

After that you'll want to create a `.env` file in the root directory that contains your username and password:

```
username="YOUR_USERNAME"
password="YOUR_PASSWORD"
```

after that simply run:

```
node index.js
```

And you should see a file named `findPeopleWhoDontFollowYouBack.json`. 

Now you can unfollow all your secret haters!

One Caveat: make sure 2-factor auth is turned off when you run this and turn it back on when you're done otherwise the script won't run properly.