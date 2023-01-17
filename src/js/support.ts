import { nanoid } from "nanoid"

const checkBoxElements = [
    'боевик',
    'приключения',
    'мультфильм',
    'комедия',
    'криминал',
    'документальный',
    'драма',
    'семейный',
    'фэнтези',
    'история',
    'ужасы',
    'музыка',
    'детектив',
    'мелодрамма',
    'фантастика',
    'телевизионный фильм',
    'триллер',
    'военный',
    'вестерн',
]

const movieCard = [
    {id: nanoid(), imgName: '1.png', movieName: 'Истребитель демонов: Поезд \"Бесконечный\"', rating: '8.4', isFavorite: false, isWatchLater: false},
    {id: nanoid(), imgName: '2.png', movieName: 'Леди Баг и Супер-Кот: Нью-Йорк. Союз героев', rating: '8.2', isFavorite: false, isWatchLater: false},
    {id: nanoid(), imgName: '3.png', movieName: 'Детстроук: Рыцари и Драконы', rating: '6.9', isFavorite: false, isWatchLater: false},
    {id: nanoid(), imgName: '4.png', movieName: 'Соник в кино', rating: '7.4', isFavorite: false, isWatchLater: false},
    {id: nanoid(), imgName: '5.png', movieName: 'Семейка Крудс: Новоселье', rating: '7.6', isFavorite: false, isWatchLater: false},
    {id: nanoid(), imgName: '6.png', movieName: 'Губка Боб в бегах', rating: '7.6', isFavorite: false, isWatchLater: false}
]

export {checkBoxElements, movieCard}