const API_KEY = "rx3PfFHGjLpTOuUQPt9Onhgg1p9iRBItSR45Gl8zZ9f1ltVvnBbig8SbLCfT";

export const getMatches = () => {
  const url = `https://cricket.sportmonks.com/api/v2.0/continents?api_token=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  // const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  // return fetch(url)
  //   .then((response) => response.json())
  //   .catch((error) => console.log(error));
  console.log("get match details called");
};
