var weirdObject = `{
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}`
var jsonObject = JSON.parse(weirdObject)

function whereInTheJson(obj, inputValue){


  for (let key in obj) {
    var val = obj[key]
    if (val === inputValue) {
      return key
    }

    if (Array.isArray(val) === true) {
      for (var i = 0; i < val.length; i++) {
        if (val[i] === inputValue) {
          var path =  key + " -> " + val.indexOf(val[i])
          return path
        }
      }
//not working:
    } else if (val !== null && typeof val === 'object'){
      for (let key in val) {
        var nestedObjVal = val[key]
          if (nestedObjVal === inputValue) {
            var path =  key + " -> " + nestedObjVal.indexOf(nestedObjVal[i])
            return path
          }
      }
    }

  }
}
