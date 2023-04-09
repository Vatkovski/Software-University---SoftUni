function demo(input) {
  let nameTvSerie = input[0];
  let episodeTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let lunch = breakTime * 1 / 8;
  let leisure = breakTime * 1 / 4;
  let timeLeft = episodeTime + lunch + leisure;
  let timeLeftFormatted = Math.ceil(timeLeft);
  let freeTime = timeLeftFormatted - breakTime;

  if (freeTime >= 0) {
    console.log(
      `You have enough time to watch ${nameTvSerie} and left with ${freeTime} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${nameTvSerie}, you need ${Math.abs(freeTime)} more minutes.`
    );
  }
}

demo(["Game of Thrones", "60", "96"]);
demo(["Teen Wolf", "48", "60"]);
