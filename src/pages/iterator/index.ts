class SongInfo {
  constructor(public title: string, public artist: string, public year: number) {}
}

interface SongIterator {
  createIterator(): IterableIterator<SongInfo>;
}

class SongsOf70s implements SongIterator {
  // bestSongs here is an Array;
  bestSongs: SongInfo[] = [];

  constructor() {
    this.addSong(new SongInfo("Imagine", "John Lennon", 1970));
    this.addSong(new SongInfo("American Pie", "Don McLean", 1971));
    this.addSong(new SongInfo("I Will Survive", "Gloria Gaynor", 1979));
  }

  addSong(song: SongInfo): void {
    this.bestSongs.push(song);
  }

  createIterator(): IterableIterator<SongInfo> {
    return this.bestSongs[Symbol.iterator]();
  }
}

class SongsOf80s implements SongIterator {
  // bestSongs here is an Object
  bestSongs: { [key: string]: SongInfo } = {};

  constructor() {
    this.addSong(new SongInfo("Head Over Heels", "Tears For Fears", 1985));
    this.addSong(new SongInfo("Cruel Summer", "Bananarama", 1984));
    this.addSong(new SongInfo("Roam", "B 52s", 1989));
  }

  addSong(song: SongInfo): void {
    this.bestSongs[Math.random()] = song;
  }

  createIterator(): IterableIterator<SongInfo> {
    return Object.values(this.bestSongs)[Symbol.iterator]();
  }
}

class DJ {
  constructor(public songs: SongIterator) {}

  printSongs() {
    const iterator = this.songs.createIterator();
    this.iterateSongs(iterator);
  }

  iterateSongs(iterator: any) {
    let _value: any;
    let _done: any;
    let { value, done } = iterator.next();
    _value = value;
    _done = done;

    while (!_done) {
      console.log(_value);
      let { value, done } = iterator.next();
      _done = done;
      _value = value;
    }
  }
}

const seventies = new SongsOf70s();
const eighties = new SongsOf80s();
const dj70 = new DJ(seventies);
const dj80 = new DJ(eighties);

console.group("70s");
dj70.printSongs();
console.groupEnd();

console.group("80s");
dj80.printSongs();
console.groupEnd();
