// ===============================================================================
// DATA
// Below data will hold all of the friends
// ===============================================================================

var friends = [
    {
      name:"Gollum",
      photo:"http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/gollum-scary-eyes.jpg",
      scores:[
        "1",
        "1",
        "1",
        "5",
        "1",
        "1",
        "5",
        "5",
        "1",
        "1"
      ]
    },
    {
      name: "Smeagol",
      photo: "https://vignette.wikia.nocookie.net/villains/images/7/7d/Gollum_eating_fish.jpeg/revision/latest?cb=20151101182355",
      scores: [
        "3",
        "1",
        "3",
        "5",
        "3",
        "1",
        "2",
        "1",
        "2",
        "1"
      ]
    },
  ]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;