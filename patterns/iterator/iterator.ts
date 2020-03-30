// const arr = [1,2]
// const iteratorArr = arr[Symbol.iterator]()
// console.log(iteratorArr.next())
// console.log(iteratorArr.next())
// console.log(iteratorArr.next())
// const obj = {a: 'a', b: 'b', c: 'c'}
// const iteratorObj = Object.values(obj)[Symbol.iterator]()
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

interface Song {
  title: string
  artist: string
  year: number
}

class SongCreator {
  constructor(public title: string, public artist: string, public year: number) {
    return {
      title: this.title,
      artist: this.artist,
      year: this.year
    }
  }
}

interface SongIterator {
  createIterator(): void
}

abstract class Songs<T> {
  abstract bestSongs: T
  abstract addSong(song: Song): void
  getBestSongs(): T {
    return this.bestSongs
  }
}

class SongsOf70s extends Songs<Song[]> implements SongIterator{
  bestSongs: Song[] = []

  constructor() {
    super()
    this.addSong(new SongCreator('Imagine', 'John Lennon', 1970))
    this.addSong(new SongCreator("American Pie", "Don McLean", 1971))
    this.addSong(new SongCreator("I Will Survive", "Gloria Gaynor", 1979))
  }

  addSong(song: Song): void {
    this.bestSongs.push(song)
  }

  createIterator(): any {
    return this.bestSongs[Symbol.iterator]()
  }
}

class SongsOf80s extends Songs<{[key: string]: Song}> implements SongIterator{
  bestSongs: {[key: string]: Song} = {}

  constructor() {
    super()
    this.addSong(new SongCreator("Head Over Heels", "Tears For Fears", 1985))
    this.addSong(new SongCreator("Cruel Summer", "Bananarama", 1984))
    this.addSong(new SongCreator("Roam", "B 52s", 1989))
  }

  addSong(song: Song): void {
    this.bestSongs[Math.random()] = song
  }

  createIterator(): any {
    return Object.values(this.bestSongs)[Symbol.iterator]()
  }
}


class DJ<T extends SongIterator> {
  constructor(public songs: T ) { }
  
  printSongs() {
    const iterator = this.songs.createIterator()
    this.iterateSongs(iterator)
  }

  iterateSongs(iterator: any) {
    let _value: any
    let _done: any
    let {value, done} = iterator.next()
    _value = value
    _done = done

    while(!_done) {
      console.log(_value?.title, _done)
      let {value, done} = iterator.next()
      _done = done
      _value = value
    }
  }
}

const seventies = new SongsOf70s()
const eighties = new SongsOf80s()
const dj70 = new DJ(seventies)
const dj80 = new DJ(eighties)
dj70.printSongs()
dj80.printSongs()