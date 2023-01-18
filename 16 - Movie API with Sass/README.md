# Movie API with Sass

The project is intended to practice RESTFUL API's in JavaScript.

## API Link

- [The Movie Database (TMDB) - API.](https://developers.themoviedb.org/3/movies/get-popular-movies)

## API Reference

#### Get all movie items

```http
  GET api/3/movie?api_key=${api_key}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Required**. Your personal API key |

#### Get all movie items with a specific language (default: en-US)

```http
  GET api/3/movie?api_key=${personal-key}&language=${iso}
```

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| `iso`     | `string` | **Optional**. ISO 639-1 value to fetch specified language |

#### Get all movie items from a specific page

```http
  GET api/3/movie?api_key=${personal-key}&page=${pageNum}
```

| Parameter | Type      | Description                                |
| :-------- | :-------- | :----------------------------------------- |
| `pageNum` | `integer` | **Optional**. Specify which page to query. |

#### To get an specific movie image

The source of the image must be the following:

```http
  GET https://image.tmdb.org/t/p/w500/${poster_path}

  The poster_path can be accessed through the propertie movie.poster_path
```

| Parameter     | Type     | Description                                 |
| :------------ | :------- | :------------------------------------------ |
| `poster_path` | `string` | **Required**. Specify which image to query. |

## Authors

- [@Git-Darkmoon](https://github.com/Git-Darkmoon)

## Features

- Light/dark mode toggle
- Daily Updated API
- Responsive Design

## Lessons Learned

Through this project i learned and mastered the
asynchronous functions of ES6+ using the reserved words like
fetch, await, async through the JavaScript file.

The most important lines of code which were the
principal objective of this project:

```javascript
// This code is for demo purposes, not the real one.

const getData = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=24853442298977a0118226709d68cfa8&language=en-US&page=1"
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    alert(error);
  }
};

getData();
```
