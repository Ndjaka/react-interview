import imgage1 from './assets/images/1.jpg'
import image2 from './assets/images/2.jpg'
import image3 from './assets/images/3.jpg'
import image4 from './assets/images/4.jpg'
import image5 from './assets/images/5.jpg'
import image6 from './assets/images/6.jpg'
import image7 from './assets/images/7.jpg'
import image8 from './assets/images/8.jpg'
import image9 from './assets/images/9.jpg'
import image10 from './assets/images/10.jpg'

const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    image: imgage1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    image: image2
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    image: image3
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    image: image4
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    image: image5
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    image: image6
  }, {
    id: '7',
    title: 'La planète des singes',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    image: image7
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image: image8
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image: image9
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    image: image10
  },
]

export const movies$:Promise<MovieType[]> = new Promise((resolve) => setTimeout(resolve, 100, movies))
