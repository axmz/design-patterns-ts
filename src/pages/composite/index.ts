abstract class SongComponent {
  add(songComponent: SongComponent) {
    throw "Not implemented";
  }

  displayInfo() {
    throw "Not implemented";
  }
}

class SongGroup extends SongComponent {
  songComponents: SongComponent[] = [];
  constructor(public groupName: string, public groupDescription: string) {
    super();
  }

  add(songComponent: SongComponent) {
    this.songComponents.push(songComponent);
  }

  displayInfo() {
    console.log(this.groupName, this.groupDescription);
    this.songComponents.forEach((songComponent: SongComponent) => songComponent.displayInfo());
  }
}

class Song extends SongComponent {
  constructor(public title: string, public author: string, public year: number) {
    super();
  }

  displayInfo() {
    console.log(this.title, this.author, this.year);
  }
}

class DiskJokey {
  constructor(public list: SongComponent) {}
  play() {
    console.log(this.list);
    this.list.displayInfo();
  }
}

const industrial = new SongGroup(
  "Industrial",
  "is a style of experimental music that draws on transgressive and provocative themes"
);
const heavyMetalMusic = new SongGroup(
  "\nHeavy Metal",
  "is a genre of rock that developed in the late 1960s, largely in the UK and in the US"
);
const dubstepMusic = new SongGroup(
  "\nDubstep",
  "is a genre of electronic dance music that originated in South London, England"
);
const everySong = new SongGroup("Song List", "Every Song Available");

everySong.add(industrial);
everySong.add(heavyMetalMusic);
// everySong.add(dubstepMusic)

industrial.add(new Song("Head Like a Hole", "NIN", 1990));
industrial.add(new Song("Headhunter", "Front 242", 1988));
industrial.add(dubstepMusic);

dubstepMusic.add(new Song("Centipede", "Knife Party", 2012));
dubstepMusic.add(new Song("Tetris", "Doctor P", 2011));

heavyMetalMusic.add(new Song("War Pigs", "Black Sabath", 1970));
heavyMetalMusic.add(new Song("Ace of Spades", "Motorhead", 1980));

const dj = new DiskJokey(everySong);
dj.play();