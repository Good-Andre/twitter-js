const arr = [
  {
    userName: 'Олег Васильевич',
    nickname: 'vasil',
    text: 'Где детонатор?',
    postDate: '02.14.2012, 05:00',
  },
  {
    userName: 'Brock',
    nickname: 'brock',
    text:
      'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.',
    postDate: '02.05.2012, 13:27',
    img: 'https://fish-text.ru/images/logo.png',
    likes: 50,
  },
  {
    userName: 'Raamin',
    nickname: 'raamin',
    text:
      'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.',
    postDate: '03.11.2012, 10:30',
    likes: 999,
  },
  {
    userName: 'Дональд',
    nickname: 'trampampam',
    text: 'Зарегался на вк, хороший сервис и не банят',
    postDate: '02.05.2012, 13:27',
    img:
      'https://i2.wp.com/media.globalnews.ca/videostatic/news/vamt80qbaq-94ovmaxjqg/trumptwitterupdate.jpg?w=500&quality=70&strip=all',
    likes: 50,
  },
  {
    userName: 'Олег Васильевич',
    nickname: 'vasil',
    text: 'Где детонатор?',
    postDate: '02.14.2012, 05:00',
    img:
      'https://www.meme-arsenal.com/memes/27606cb09d10f670389750cffb4d900d.jpg',
    likes: 666,
  },
  {
    userName: 'Raamin',
    nickname: 'raamin',
    text:
      'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.',
    postDate: '03.11.2012, 10:30',
    likes: 999,
  },
];

class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem),
    };
  }

  renderPosts() {}

  showUserPost() {}

  showLikesPosts() {}

  showAllPosts() {}

  openModal() {}
}

class Posts {
  constructor({ posts = arr } = {}) {
    this.posts = posts;
  }

  addPost(tweet) {
    this.posts.push(new Post(tweet));
  }

  deletePost(id) {
    this.posts.forEach((item, i) => {
      for (let key in item) {
        // если тип данных id строка, приводим к числу ('защита от дурака')
        if (+item[key] === id) {
          this.posts.splice(i, 1);
        }
      }
    });
  }

  likePost(id) {
    this.posts.forEach((item) => {
      for (let key in item) {
        if (+item[key] === id) {
          item.likes++;
          item.liked = true;
        }
      }
    });
  }
}

class Post {
  constructor(param) {
    this.id = param.id;
    this.userName = param.userName;
    this.nickName = param.nickName;
    this.postDate = param.postDate;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }

  changeLike() {
    this.liked = !this.liked;
    if (this.liked === true) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter({
  listElem: '.tweet-list',
});

twitter.tweets.addPost({
  id: 23,
  userName: 'Nataly',
  nickName: 'Nat',
  postDate: '19.01.2021',
  text: 'lorem ipsum',
  img: '',
  likes: 50,
});

twitter.tweets.addPost({
  id: 24,
  userName: 'Leonardo',
  nickName: 'Leo',
  postDate: '20.01.2021',
  text: 'Ipsum lorem',
  img: '',
  likes: 10,
});

twitter.tweets.deletePost(23);
twitter.tweets.likePost(24);

console.log('Оставшиеся посты (пост с id: 23 удален): ', twitter.tweets.posts);
console.log('Лайкнутый пост: ', twitter.tweets.posts[6]);
