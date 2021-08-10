if ("geolocation" in navigator) {
    navigation.geolocation.getCurrentPosition(function(position) {
        //faz alguma coisa
    })
}