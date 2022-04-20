import React from "react";
import charizard from "../../Images/charizard-gif.gif";
import pikachu from "../../Images/pickachu-gif.gif";
import bulbasaur from "../../Images/bulbasaur-gif.gif";
import Header from "../Header";

function Home() {
  return (
    <>
      <Header />
      <div className="mtop home">
        <div className="container content">
          <div className="content_top">
            <div className="content_top-text">
              <h1 className="title">Pokémon</h1>

              <p className="description">
                <strong>Pokémon</strong> (an abbreviation for Pocket Monsters in
                Japan) is a Japanese media franchise managed by The Pokémon
                Company, a company founded by Nintendo, Game Freak, and
                Creatures. The franchise was created by Satoshi Tajiri in 1996,
                and is centered on fictional creatures called "Pokémon". In
                Pokémon, humans, known as Pokémon Trainers, catch and train
                Pokémon to battle other Pokémon for sport. All media works
                within the franchise are set in the Pokémon universe. The
                English slogan for the franchise is "Gotta Catch 'Em All!".
                There are currently 908 Pokémon species.
              </p>
            </div>
          </div>
          <div className="content_bottom">
            <img
              src={charizard}
              className="content_bottom-img img-fluid"
              alt="pokemon"
            />
          </div>
        </div>

        <div className="container content">
          <div className="content_top">
            <div className="content_top-text">
              <h1 className="title">History</h1>

              <p className="description">
                In 1998, Nintendo spent $25 million promoting Pokémon in the
                United States in partnership with Hasbro, KFC, and others.
                Nintendo initially feared that Pokémon was too Japanese for
                Western tastes but Alfred Kahn, then CEO of 4Kids Entertainment
                convinced the company otherwise. The one who spotted Pokemon's
                potential in the United States was Kahn's colleague Thomas
                Kenney.
                <br></br>
                <br></br>
                In November 2005, 4Kids Entertainment, which had managed the
                non-game related licensing of Pokémon, announced that it had
                agreed not to renew the Pokémon representation agreement. The
                Pokémon Company International oversees all Pokémon licensing
                outside Asia. In 2006, the franchise celebrated its tenth
                anniversary. In 2016, the Pokémon Company celebrated Pokémon's
                20th anniversary by airing an ad during Super Bowl 50 in January
                and re-releasing the first Pokémon video games 1996 Game Boy
                games Pokémon Red, Green (only in Japan), and Blue, and the 1998
                Game Boy Color game Pokémon Yellow for the Nintendo 3DS on
                February 26, 2016.
              </p>
            </div>
          </div>
          <div className="content_bottom">
            <img
              src={pikachu}
              className="content_bottom-img img-fluid"
              alt="pokemon"
            />
          </div>
        </div>

        <div className="container content">
          <div className="content_top">
            <div className="content_top-text">
              <h1 className="title">Pokémon universe</h1>

              <p className="description">
                Pokémon is set in the fictional Pokemon universe. There are
                numerous regions that have appeared in the various media of the
                Pokémon franchise. There are 8 main series regions set in the
                main series games: Kanto, Johto, Hoenn, Sinnoh/Hisui, Unova,
                Kalos, Alola, and Galar. Each of the eight generations of the
                main series releases focuses on a new region. Every region
                consists of several cities and towns that the player must
                explore in order to overcome many waiting challenges, such as
                Gyms, Contests and villainous teams. At different locations
                within each region, the player can find different types of
                Pokémon, as well as helpful items and characters. Different
                regions are not accessible from one another at all within a
                single game, only with the exception of Kanto and Johto being
                linked together in Pokémon Gold, Silver, Crystal, HeartGold and
                SoulSilver versions.
              </p>
            </div>
          </div>
          <div className="content_bottom">
            <img
              src={bulbasaur}
              className="content_bottom-img img-fluid"
              alt="pokemon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
