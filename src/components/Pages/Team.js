import React from 'react';

const Team = () => {

  const teamMembers = [
    {
      name: "Larry",
      gh: "https://github.com/lfaudreejr",
      img: "larry.png"
    },
    {
      name: "Louis",
      gh: "https://github.com/louisheimel",
      img: "louis.jpg"
    },
    {
      name: "Van",
      gh: "https://github.com/vannya",
      img: "van.jpg"
    },
    {
      name: "Kevin",
      gh: "https://github.com/kgalang",
      img: "kevin.jpg"
    },
  ];

  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <section>
        {teamMembers.map(({gh, name, link, img}) => {
          return (
            <div key={name} className="team-member">
              <img src={require(`../../stylesheets/assets/${img}`)} alt="" />
              <h3>{name}</h3>
              <a href={gh}>Github</a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Team;