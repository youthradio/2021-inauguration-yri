module.exports = {
  baseURL: process.env.BASE_URL_PRODUCTION || '/2021-inauguration-yri',
  title: `What a Trump-Free White House Sounds Like`,
  author: 'YRI ARTS',
  publishDate: 'Dec. 2, 2020',
  location: 'Oakland, CA',
  description:
    'Deepfakes use artificial intelligence to manipulate a person’s voice and image. From movies to music, news to the workplace, how do we draw the line between the real and the fake?',
  tweetMessage: 'with @itsyrmedia',
  url: 'https://interactive.yr.media/double-take-four-deepfake-scenarios',
  featureImage:
    'https://interactive.yr.media/double-take-four-deepfake-scenarios/social.jpg',
  featureImagePath: 'images/template-feature-image',
  featureImageDescription: 'People Protesting BLM',
  featureImageCaption: '(Photo: Andersen Ross Photography Inc/Getty Images)',

  wpPostSlug: 'north-carolina-vs-vaping-companies',
  wpPostID: '60986',
  // you might not need to change
  fbAppID: '73080818131',
  twitterHandler: '@itsyrmedia',
  docs: [
    {
      name: '2021-inauguration-yri - backend',
      id: '1na5DSfBATVAgtImO5mcoZdTtHfD-IDrdq9MePFKCXM8',
    },
  ],
  dataPath: 'data/data.json',
  POLLSERVER: 'https://ee51aej7u4.execute-api.us-west-2.amazonaws.com/latest',
}
