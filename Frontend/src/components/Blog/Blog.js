import React from "react";
import { Card, CardHeader, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ResponsiveContainer from "./BlogMenu";
import Footer from "../Footer/Footer";
import ScrollButton from "../ScrollTopButton/ScrollTop";
import card1 from "./card1.png";
function Blog() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
  		in place of 'smooth' */
    });
  };
  scrollToTop();
  return (
    <ResponsiveContainer>
      <p
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "2rem",
          color: "yellowgreen",
        }}
      >
        <b>
          <u>Recent Posts</u>
        </b>
      </p>
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: " flex-end",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <article
          style={{
            flex: "0 0 20rem",
            margin: "1rem",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)",
          }}
        >
          <Image
            as={Link}
            to={{ pathname: "/blogs/cards" }}
            state={{
              header:
                "10 factors to consider while buying an electric scooter.",
              content: `Planning to buy an electric scooter and love the feeling of being “a know” it all? 
                You’ll really know it all as you’re at the right place! What does this mean? 
                The next time you go to a showroom, 
                you’ll know exactly what factors to look for while buying an electric scooter.
                Let us first understand the scenario of the Indian vehicle market. 
                According to a survey conducted, 49.7% of Indian households own a two-wheeler,
                 but due to rising fuel prices, 
                many people are switching to electric scooters.`,
            }}
            style={{ maxWidth: "100%" }}
            src={card1}
            alt="Sample photo"
          />
          <div style={{ padding: "0 20px 20px" }}>
            <h3>10 factors to consider while buying an electric scooter.</h3>
            <p>
              Planning to buy an electric scooter and love the feeling of being
              “a know” it […]
            </p>
          </div>
        </article>
        <article
          style={{
            flex: "0 0 20rem",
            margin: "1rem",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)",
          }}
        >
          <Image
            as={Link}
            to="/blogs/cards"
            state={{
              header: `Why Is The Festive Season The Best Time To Buy An Electric Scooter
                In India?`,
              content: `Generally people who buy vehicles during the festive season also expect a timely delivery since many consider these specific dates within these months to be auspicious. Therefore, the waiting period during festivities is relatively lower than usual.

              The feeling of being festive ready!
              When festivities are around the corner, dressing up with new clothes,
               buying new gadgets etc become a ritual for many people every year.
                This gives you a feeling that you’re ready to stand out at every occasion.
                 So why show up in everything new but an old ride? Rather you can have a
                  look at the BG D15 and with its stylish design and eye-catchy colours,
                   you would surely make an impact! Just a fun Idea- Twin your clothes with 
                   the BG D15 for
               some fashionista pictures to post on your social media handles!
              Choosing Made In India products.
              Every year in India, there has been more awareness about buying Indian made lights,
               decorations and other essentials for the festivities. This has resulted in an 
               increase in the quality of festive essentials available in the market. Since Vocal 
               for Local has made the celebrations much better, why not follow this for your rides 
               as well? The BG D15 is completely made in India. From its parts to engineering 
               everything is localised to provide you the best quality rides with technology 
               ahead of its time. Moreover, since we keep everything clean during these auspicious
                months, from our houses to our clothes, 
              it’s time to keep our environment clean too. `,
            }}
            style={{ maxWidth: "100%" }}
            src={card1}
            alt="Sample photo"
          />
          <div style={{ padding: "0 20px 20px" }}>
            <h3>
              Why Is The Festive Season The Best Time To Buy An Electric Scooter
              In India?
            </h3>
            <p>
              The festive season in India begins in October and lasts till
              December. From Diwali – […]
            </p>
          </div>
        </article>
        <article
          style={{
            flex: "0 0 20rem",
            margin: "1rem",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)",
          }}
        >
          <Image
            as={Link}
            to="/blogs/cards"
            state={{
              header: `A buying guide for the best long-range electric scooter.`,
              content: `When it comes to e-scooters, one of the key differences lies 
                in the battery life. A short-range scooter will typically have a
                 smaller battery, which means that it will need to be charged more often.
                  In contrast, a long-range e-scooter can go much further on a single     
             charge. This means you can go longer between charges, which is more convenient. 
                While short-range electric scooters typically need to be plugged in after every
                 use, 
                long-range models normally only require charging twice or thrice per week,
                 depending on your usage frequency. This can be a significant benefit if 
                 you don’t have easy access to a power outlet or if you simply don’t want the 
                 hassle of dealing with frequent charges. In addition, it can be more convenient
                  to only have to worry about charging your scooter every few days as opposed to 
                  every day.
                
                 `,
            }}
            style={{ maxWidth: "100%" }}
            src={card1}
            alt="Sample photo"
          />
          <div style={{ padding: "0 20px 20px" }}>
            <h3>A buying guide for the best long-range electric scooter.</h3>
            <p>
              A buying guide for the best long-range electric scooter. Do you
              know that feeling when […]
            </p>
          </div>
        </article>
        <article
          style={{
            flex: "0 0 20rem",
            margin: "1rem",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)",
          }}
        >
          <Image
            as={Link}
            to="/blogs/cards"
            state={{
              header: ` Electric Scooters: Mix of Technology and Lifestyle.`,
              content: `Technology has played an important part in human evolution, 
              if not, we would still be using bullock carts to travel around the city! 
              The world depends on the evolution of technology and invention of new ways to match 
              up with the requirements of the growing population. While the petrol dependent
               automobile industry was thriving, the rising fuel prices and pollution got people 
               longing for a better alternative. That’s when the interest for electric scooters 
               spiked. A few years ago if you would have spoken about electric scooters, people 
               would have nudged it off, saying that it’ll take years for EVs to become a part of 
               our lifestyles! But look at how the world is evolving. Be it better EV infrastructure,
                government subsidies, smart scooters, you have everything you need to make the switch
                 to a smart and safe commute.

              We aim  to bring sense to your city with a blend of innovative
               technology, power and efficiency in a range of premium yet affordable electric
                scooters. Our latest innovation is the new D15, which is big on comfort, 
                intelligence, style and size! The vehicle is loaded with IoT features, 
              bringing more convenience to you than ever before.
                  
                   `,
            }}
            style={{ maxWidth: "100%" }}
            src={card1}
            alt="Sample photo"
          />
          <div style={{ padding: "0 20px 20px" }}>
            <h3> Electric Scooters: Mix of Technology and Lifestyle.</h3>
            <p>
              Technology has played an important part in human evolution, if
              not, we would still be […]
            </p>
          </div>
        </article>
        <article
          style={{
            flex: "0 0 20rem",
            margin: "1rem",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)",
          }}
        >
          <Image
            as={Link}
            to="/blogs/cards"
            state={{
              header: `Reasons to buy an electric scooter in India`,
              content: `Petrol-led vehicles emit harmful gasses like sulphur and carbon dioxide 
              resulting in increased pollution and global warming. On the other hand, e-scooters 
              emit zero harmful
               gasses and contribute to a pollution-free and greener environment.

              The BG D15 uses kinetic energy produced by braking and gives you an 
              additional battery charge each time you hit the brakes. This means you’re 
              not just having a fun and safe ride but also contributing towards a greener 
              tomorrow along the way!
                     `,
            }}
            style={{ maxWidth: "100%" }}
            src={card1}
            alt="Sample photo"
          />
          <div style={{ padding: "0 20px 20px" }}>
            <h3>Reasons to buy an electric scooter in India</h3>
            <p>
              The world has been rapidly progressing with better substitutes in
              every field. For example, look […]
            </p>
          </div>
        </article>
        <article
          style={{
            flex: "0 0 20rem",
            margin: "1rem",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)",
          }}
        >
          <Image
            as={Link}
            to="/blogs/cards"
            state={{
              header: `Smart Ways To Protect The Battery In Your Electric Scooter`,
              content: `After every trip, make sure your electric scooter cools off. When the scooter
               is in motion, the battery gets hot and if you immediately charge it after usage it 
               will build up more heat. Excessive heat could lead to damage of your battery.  It’s 
               mandatory for the scooter to cool down before you begin the charging process. Another 
               tip would be to charge your scooter at the night during the summer season. As the
                temperature soars during the day, 
              charging your electric scooter battery at night would cause less heat.   `,
            }}
            style={{ maxWidth: "100%" }}
            src={card1}
            alt="Sample photo"
          />
          <div style={{ padding: "0 20px 20px" }}>
            <h3>Smart Ways To Protect The Battery In Your Electric Scooter</h3>
            <p>
              How To Protect Battery In Your Electric Scooter Electric vehicles
              are beginning to see a […]
            </p>
          </div>
        </article>
      </main>
      <br />
      <Footer />
      <ScrollButton />
    </ResponsiveContainer>
  );
}

export default Blog;
